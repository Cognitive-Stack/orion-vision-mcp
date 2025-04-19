'use strict';

import dotenv from 'dotenv';

dotenv.config();

export const getConfig = () => {
  const formRecognizerEndpoint = process.env.AZURE_FORM_RECOGNIZER_ENDPOINT;
  const formRecognizerKey = process.env.AZURE_FORM_RECOGNIZER_KEY;

  if (!formRecognizerEndpoint || !formRecognizerKey) {
    throw new Error('Azure Form Recognizer credentials are not properly configured. Please set AZURE_FORM_RECOGNIZER_ENDPOINT and AZURE_FORM_RECOGNIZER_KEY environment variables.');
  }

  return {
    formRecognizerEndpoint,
    formRecognizerKey,
  };
}; 