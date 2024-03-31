import {
  PRIVATE_GROQ_API_KEY,
  PRIVATE_OPENAI_API_KEY,
} from "$env/static/private";
import { LLMProviders, type ChatMessage } from "$lib/types";
import OpenAI from "openai";
import Groq from "groq-sdk";

export async function POST({ request }) {
  const requestBody = await request.json();
  const {
    provider,
    systemPrompt,
    messages,
  }: {
    provider: LLMProviders;
    systemPrompt: ChatMessage | null;
    messages: ChatMessage[];
  } = requestBody;
  let { model }: { model: string } = requestBody;

  const supportedProviders = [LLMProviders.OPENAI, LLMProviders.GROQ];
  if (!supportedProviders.includes(provider)) {
    throw new Error(`Unsupported provider: ${provider}`);
  }

  let supportedModels:
    | Groq.Models.ModelList
    | OpenAI.Models.ModelsPage
    | string[];

  let LLM: Groq | OpenAI;
  switch (provider) {
    case "openai":
      LLM = new OpenAI({
        apiKey: PRIVATE_OPENAI_API_KEY,
      });
      supportedModels = await LLM.models.list();
      if (!model) {
        model = "gpt-4-0125-preview";
      }
      break;
    case "groq":
      LLM = new Groq({
        apiKey: PRIVATE_GROQ_API_KEY,
      });
      supportedModels = await LLM.models.list();
      if (!model) {
        model = "mixtral-8x7b-32768";
      }
      break;
    default:
      LLM = new Groq({
        apiKey: PRIVATE_GROQ_API_KEY,
      });
      supportedModels = await LLM.models.list();
      if (!model) {
        model = "mixtral-8x7b-32768";
      }
      break;
  }

  const modelIsSupported = await isModelSupported(model, supportedModels);
  if (!modelIsSupported) {
    throw new Error(`Unsupported model: ${model}`);
  }

  const stream = new Response(
    new ReadableStream({
      async start(controller) {
        try {
          const completionStream = await (LLM as Groq).chat.completions.create({
            messages: [
              ...(systemPrompt !== null ? [systemPrompt] : []),
              ...messages,
            ],
            // The language model which will generate the completion.
            model,
            // Controls randomness. 0.0 means no randomness. 1.0 means maximum randomness.
            // Can use 0 temperature for caching.
            temperature: 0.5,
            // Maximum number of tokens to generate.
            // max_tokens * 2 is shared between input and output.
            max_tokens: 1650,
            stream: true,
          });

          for await (const part of completionStream) {
            controller.enqueue(
              new TextEncoder().encode(`${JSON.stringify(part)}\n`)
            );
          }
          controller.close();
        } catch (error) {
          console.error(error);
          controller.error(error);
        }
      },
    }),
    {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    }
  );

  return stream;
}

async function isModelSupported(
  requestModel: string,
  supportedModels: Groq.Models.ModelList | OpenAI.Models.ModelsPage
) {
  if (!supportedModels.data) {
    return false;
  }
  const modelIds = supportedModels.data.map((model) => model.id);
  return modelIds.includes(requestModel);
}
