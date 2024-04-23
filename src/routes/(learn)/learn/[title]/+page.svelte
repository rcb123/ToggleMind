<script lang="ts">
  import type { ChatCompletionSystemMessageParam } from "ai/prompts";
  import type { PageData } from "../$types";
  import type { Message } from "ai";

  import { writable } from "svelte/store";
  import { ArrowUp } from "lucide-svelte";
  import { useChat } from "ai/svelte";

  import Button from "$lib/components/ui/button/button.svelte";

  export let data: {
    title: string;
    theme: string;
    brief: string;
    image: string;
  } & PageData;
  console.log(data);

  const isLLMActive = writable(false);
  const systemPrompt: Message = {
    id: "",
    role: "system",
    content: `
      <Guidelines>
      You are a helpful foreign language teacher.
      When prompted, generate stories in English based on the information provided.
      When prompted, generate questions in French based on the story.
      When the user responds, provide feedback in English.
      Remember to be encouraging and constructive in your feedback.
      </Guidelines>
      <Story Information>
      Title: ${data.title}
      Theme: ${data.theme}
      Brief: ${data.brief}
      </Story Information>
      <Rules>
      Stories MUST be in English
      Questions MUST be in French
      User Answers MUST be in French
      Assistant Responses MUST be in English
      </Rules>
      `,
  };
  let tempMessage: ChatCompletionSystemMessageParam | null = null;

  const { input, handleSubmit, messages, append } = useChat({
    initialMessages: [systemPrompt],
    onResponse: () => {
      isLLMActive.set(true);
    },
    onFinish: () => {
      isLLMActive.set(false);
    },
  });

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
    append({
      role: "system",
      content: `Generate a story in ENGLISH ONLY based on the information provided.
                Do not generate any questions yet.
                The story should be 3 paragraphs.`,
    });
  };

  const generateQuestion = () => {
    append({
      role: "system",
      content: `Generate a question in FRENCH ONLY based on the story.
                Questions should be relavant to the story and challenge the user to learn parts of the language, including vocabulary, grammar, and comprehension.`,
    });
  };

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent newline from being inserted
      handleSubmit(event); // Submit the form
    }
    // Allow Shift+Enter to insert newline as usual
  }
</script>

<div
  class="flex flex-col gap-16 rounded-2xl shadow max-w-4xl w-[80vw] h-full max-h-fit p-8"
>
  <h1 class="text-4xl font-bold">{data.title}</h1>
  <div class="flex flex-col gap-6 text-lg">
    <div class="flex gap-8 items-center">
      <img src={data.image} alt={data.title} class="w-24 h-24 rounded-md" />
      <h3 class="text-lg">{data.brief}</h3>
    </div>
    {#if $messages.length > 1}
      {#each $messages as message, index (index)}
        {#if message.role !== "system"}
          <div
            class="w-full h-full flex flex-col gap-4 p-8 rounded-lg shadow-md border border-gray-100"
          >
            <p class="text-lg font-semibold">
              {message.role === "assistant" ? "ToggleMind" : "User"}
            </p>
            <p>{message.content.replace("\\n", "\n\n\nreplaced")}</p>
          </div>
        {/if}
      {/each}
    {:else}
      <div
        class="w-full h-full p-8 rounded-lg shadow-md border border-gray-100"
      >
        <p>Get started by generating a story!</p>
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
        bind:value={$input}
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
