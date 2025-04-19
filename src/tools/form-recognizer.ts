'use strict';

import { 
  DocumentAnalysisClient, 
  AzureKeyCredential,
  FormRecognizerRequestBody
} from "@azure/ai-form-recognizer";
import { getConfig } from "../config/env";
import axios from "axios";

export const analyzeDocument = async (url: string, modelId?: string): Promise<string> => {
  const config = getConfig();
  const client = new DocumentAnalysisClient(
    config.formRecognizerEndpoint,
    new AzureKeyCredential(config.formRecognizerKey)
  );

  try {
    // Download the document from URL
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);

    // Analyze the document
    const poller = await client.beginAnalyzeDocument(
      modelId || "prebuilt-document",
      buffer as FormRecognizerRequestBody
    );

    const result = await poller.pollUntilDone();
    return JSON.stringify(result, null, 2);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Document analysis failed: ${errorMessage}`);
  }
};

export const extractFormData = async (url: string, formType: string): Promise<string> => {
  const config = getConfig();
  const client = new DocumentAnalysisClient(
    config.formRecognizerEndpoint,
    new AzureKeyCredential(config.formRecognizerKey)
  );

  try {
    // Download the document from URL
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);

    // Map form type to model ID
    const modelId = {
      receipt: "prebuilt-receipt",
      invoice: "prebuilt-invoice",
      idDocument: "prebuilt-idDocument",
      businessCard: "prebuilt-businessCard",
      custom: "prebuilt-document"
    }[formType];

    if (!modelId) {
      throw new Error(`Invalid form type: ${formType}`);
    }

    // Analyze the form
    const poller = await client.beginAnalyzeDocument(
      modelId,
      buffer as FormRecognizerRequestBody
    );
    
    const result = await poller.pollUntilDone();
    return JSON.stringify(result, null, 2);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Form data extraction failed: ${errorMessage}`);
  }
}; 