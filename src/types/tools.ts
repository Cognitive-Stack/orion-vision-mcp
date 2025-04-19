'use strict';

import { z } from "zod";
import { FastMCP } from "fastmcp";

export type ToolConfig = {
  name: string;
  description: string;
  parameters: z.ZodObject<any>;
  execute: (args: any) => Promise<string>;
};

export type Tool = FastMCP["addTool"];

export const DocumentSchema = z.object({
  url: z.string().url().describe("URL of the document to analyze"),
  modelId: z.string().optional().describe("Optional model ID for custom models"),
});

export const FormDataSchema = z.object({
  url: z.string().url().describe("URL of the form document to analyze"),
  formType: z.enum(["receipt", "invoice", "idDocument", "businessCard", "custom"]).describe("Type of form to analyze"),
}); 