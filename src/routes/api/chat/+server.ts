import { PRIVATE_OPENAI_API_KEY } from "$env/static/private";
import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

import type { RequestHandler } from "./$types";

const openai = new OpenAI({
  apiKey: PRIVATE_OPENAI_API_KEY,
});

export const config = {
  runtime: "edge",
};

export const POST = (async ({ request }) => {
  const { systemPrompt, messages } = await request.json();

  const completeMessageHistory = [];
  if (systemPrompt) completeMessageHistory.push(systemPrompt);
  completeMessageHistory.push(...messages);

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    stream: true,
    messages: completeMessageHistory,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}) satisfies RequestHandler;
