// src/inngest/functions.ts
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { inngest } from "./client";

export const generateTextFunction = inngest.createFunction(
  { id: "generate-text", triggers: { event: "app/generate-text" } },
  async ({ event, step }) => {
    const result = await step.run("generate-text", async () => {
      return await generateText({
        model: google("gemini-2.5-flash-lite"),
        prompt: "Write a vegetarian lasagna recipe for 4 people.",
      });
    });

    return { message: result.text };
  },
);
