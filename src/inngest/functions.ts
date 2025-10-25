import { inngest } from './client';

import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { createAnthropic } from '@ai-sdk/anthropic';

import * as Sentry from '@sentry/nextjs';

const google = createGoogleGenerativeAI();
const openai = createOpenAI();
const anthropic = createAnthropic();

export const execute = inngest.createFunction({ id: 'execute-ai' }, { event: 'execute/ai' }, async ({ event, step }) => {
  Sentry.logger.info('user triggered test log', {log_source: 'sentry_test'});
  console.warn('Something is missing');
  console.error('This is an error i want to track...')
  const { steps: geminiSteps } = await step.ai.wrap('gemini-generate-text', generateText, {
    model: google('gemini-2.5-flash'),
    system: 'You are a helpful assistant.',
    prompt: 'Provide me some next.js interview questions?',
    experimental_telemetry: {
      isEnabled: true,
      recordInputs: true,
      recordOutputs: true,
    }
  });

  const { steps: openAiSteps } = await step.ai.wrap('openai-generate-text', generateText, {
    model: openai('gpt-4'),
    system: 'You are a helpful assistant.',
    prompt: 'Provide me some next.js interview questions?',
    experimental_telemetry: {
      isEnabled: true,
      recordInputs: true,
      recordOutputs: true,
    }
  });

  const { steps: anthropicSteps } = await step.ai.wrap('anthropic-generate-text', generateText, {
    model: anthropic('claude-sonnet-4-5'),
    system: 'You are a helpful assistant.',
    prompt: 'Provide me some next.js interview questions?',
    experimental_telemetry: {
      isEnabled: true,
      recordInputs: true,
      recordOutputs: true,
    }
  });

  return {
    geminiSteps,
    openAiSteps,
    anthropicSteps,
  };
});
