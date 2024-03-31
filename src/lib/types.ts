export interface ChatMessage {
  role: string;
  content: string;
  tool_calls?: Array<ToolCall>;
}

export interface InterimChatMessage {
  role: string;
  content: string[];
  tool_calls?: Array<ToolCall>;
}

export interface ToolCall {
  id?: string;
  function?: Function;
  type?: string;
}

export interface Function {
  arguments?: string;
  name?: string;
}

export enum LLMProviders {
  GROQ = "groq",
  OPENAI = "openai",
}
