'use strict';

import { analyzeDocument, extractFormData } from "../tools/form-recognizer";
import { ToolConfig } from "../types/tools";
import { DocumentSchema, FormDataSchema } from "../types/tools";

export const tools: ToolConfig[] = [
  {
    name: "analyze-document",
    description: "Analyzes a document using Azure Form Recognizer and returns structured data",
    parameters: DocumentSchema,
    execute: async (args) => {
      return await analyzeDocument(args.url, args.modelId);
    },
  },
  {
    name: "extract-form-data",
    description: "Extracts structured data from forms using Azure Form Recognizer",
    parameters: FormDataSchema,
    execute: async (args) => {
      return await extractFormData(args.url, args.formType);
    },
  },
]; 