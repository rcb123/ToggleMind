<script lang="ts">
  import { LLMProviders, type ChatMessage } from "$lib/types";
  import type { ChatCompletion } from "groq-sdk/resources/chat/completions.mjs";
  import type { PageData } from "../$types";
  import { writable } from "svelte/store";
  import { ArrowUp } from "lucide-svelte";
  import Ellipsis from "$lib/svgs/Ellipsis.svelte";
  import Button from "$lib/components/ui/button/button.svelte";

  export let data: {
    title: string;
    theme: string;
    brief: string;
    image: string;
  } & PageData;
  console.log(data);
  let abortController: AbortController | null = null;

  const LLMProvider: LLMProviders = LLMProviders.OPENAI;
  const isLLMActive = writable(false);
  const messages = writable<ChatMessage[]>([]);
  let inputText = "";
  const systemPrompt = {
    role: "system",
    content: `
      You are a learning assistant that creates a story for the user and questions to assess their comprehension skills.
      The user will respond to the questions and translate their answers into a foreign language.
      Your questions should be structured to test the user's understanding of the story and their ability to translate it accurately.
      Questions should be relavant to the story and cover a range of topics, including vocabulary, grammar, and comprehension.
      Your task is to provide feedback on the user's responses and translations, guiding them to improve their language skills and understanding of the story.
      Remember to be encouraging and constructive in your feedback.
      Story Title: ${data.title}
      Story Theme: ${data.theme}
      Story Brief: ${data.brief}
      `,
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if ($isLLMActive) return;
    if (inputText.trim() !== "") {
      isLLMActive.set(true);
      $messages.push({
        role: "user",
        content: inputText,
      });
      inputText = "";
      handleLLMQuery();
    }
  };

  function handleUserInput(event: Event) {
    // TODO: Update height after submission to reset it
    const textarea = event.target as HTMLTextAreaElement;
    // Reset the height to ensure scrollHeight reflects the content's current height
    textarea.style.height = "min-content";
    // Set a maximum height
    const maxHeight = 100;
    // Update the height, not exceeding the maximum
    textarea.style.height = `${Math.min(textarea.scrollHeight + 3, maxHeight)}px`;
  }

  const generateStory = () => {
    $messages.push({
      role: "system",
      content:
        "Generate a story based on the information provided. Do not generate questions until the user asks you to.",
    });
    handleLLMQuery();
  };

  const generateQuestion = () => {
    $messages.push({
      role: "user",
      content: "Generate a question based on the story.",
    });
    handleLLMQuery();
  };

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent newline from being inserted
      handleSubmit(event); // Submit the form
    }
    // Allow Shift+Enter to insert newline as usual
  }

  const handleLLMQuery = async () => {
    abortController = new AbortController();
    const LLMResponse = await fetchLLMResponse(
      systemPrompt,
      $messages,
      abortController.signal
    );

    if (!LLMResponse) return;
    if (!LLMResponse.body) throw new Error("No response body");

    const reader = LLMResponse.body.getReader();

    isLLMActive.set(true);
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      // Decoding each chunk
      const chunk = new TextDecoder().decode(value);
      // Split by new lines and filter out empty lines
      const lines = chunk.split("\n").filter((line) => line.trim());
      for (const line of lines) {
        try {
          const part = JSON.parse(line);
          console.log(part);
          if (part.choices[0].finish_reason === "stop") {
            isLLMActive.set(false);
            // if (LLMProvider === LLMProviders.GROQ) {
            //   // Log token usage and timing information for GROQ
            //   console.log(part.x_groq.usage);
            // }
            break;
          }
          // Concatenate the content of each part to accumulatedContent
          const content: string = part.choices[0].delta.content;

          // Check if the last message is from the assistant and update it,
          // otherwise create a new message
          messages.update((messages) => {
            if (
              messages.length > 0 &&
              messages[messages.length - 1].role === "assistant"
            ) {
              messages[messages.length - 1].content += content;
            } else {
              messages.push({
                role: "assistant",
                content: content,
              });
            }
            return messages;
          });
        } catch (error) {
          console.error("Error parsing LLM response:", error);
        }
      }
    }
    // Prevent simultaneous LLM requests
    isLLMActive.set(false);
  };

  async function fetchLLMResponse(
    systemPrompt: ChatMessage | null,
    messages: ChatCompletion.Choice.Message[],
    signal: AbortSignal
  ) {
    try {
      const response = await fetch("/api/chat-completion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider: LLMProvider,
          // gpt-3.5-turbo-0125
          // mixtral-8x7b-32768
          model: "gpt-3.5-turbo-0125",
          systemPrompt,
          messages,
        }),
        signal: signal,
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return response;
    } catch (error) {
      console.error("Error fetching GPT response:", error);
      throw error;
    }
  }
</script>

<div
  class="flex flex-col gap-16 rounded-2xl shadow max-w-4xl w-[80vw] h-full max-h-fit p-8"
>
  <h1 class="text-4xl font-bold">{data.title}</h1>
  <div class="flex flex-col gap-6 text-lg">
    {#if $messages.length > 0}
      {#each $messages as message, index (index)}
        {#if message.role !== "system"}
          <p>{message.content}</p>
        {/if}
      {/each}
    {:else}
      <div class="flex flex-row justify-between">
        <div class="flex gap-2 items-center">
          <img src={data.image} alt={data.title} class="w-12 h-12 rounded-md" />
          <h3>{data.brief}</h3>
        </div>
        <Ellipsis />
      </div>
    {/if}
  </div>

  <form on:submit={handleSubmit} class="flex flex-col gap-4 w-full">
    <div class="flex flex-row justify-end gap-6">
      <Button on:click={generateStory} type="button">Generate Story</Button>
      <Button on:click={generateQuestion} type="button"
        >Generate Question</Button
      >
    </div>
    <div class="flex flex-row gap-4">
      <textarea
        bind:value={inputText}
        on:input={handleUserInput}
        on:keydown={handleKeyDown}
        rows="1"
        placeholder="Type your answer here..."
        class="border-b flex-1 border-sky-400 bg-transparent text-black placeholder-black placeholder-opacity-50 focus:outline-none focus:border-sky-300 focus:border-b-2 focus:border-opacity-50"
      />
      <button
        disabled={$isLLMActive}
        type="submit"
        class="disabled:cursor-not-allowed disabled:opacity-50 self-end pb-4"
      >
        <ArrowUp />
      </button>
    </div>
  </form>
</div>
