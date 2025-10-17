/**
 * Multi-turn tool calling workflow
 *
 * TODO Section 2.1: Implement this workflow
 *
 * Requirements:
 * 1. Define tool schemas with Zod
 * 2. Implement tool execution logic
 * 3. Handle multi-turn conversations with tools
 * 4. Add proper error handling (RetryableError vs FatalError)
 *
 * Example structure:
 *
 * 'use workflow'
 * import { step } from '@vercel/workflow'
 * import { generateText } from 'ai'
 * import { z } from 'zod'
 *
 * const weatherTool = {
 *   name: 'get_weather',
 *   description: 'Get weather for a location',
 *   parameters: z.object({
 *     location: z.string().describe('City name'),
 *   }),
 * }
 *
 * export async function toolLoopWorkflow(input: { message: string }) {
 *   const result = await step('call-with-tools', async () => {
 *     return await generateText({
 *       model: openai('gpt-4-turbo'),
 *       messages: [{ role: 'user', content: input.message }],
 *       tools: {
 *         get_weather: weatherTool,
 *       },
 *       maxSteps: 5, // Allow multiple tool turns
 *     })
 *   })
 *
 *   return result
 * }
 *
 * Learning goals:
 * - Implement tool definitions with proper schemas
 * - Handle multi-turn agent loops
 * - Add resilience to tool execution
 * - Understand step isolation for tool calls
 */

export const placeholder = 'TODO: Implement in Section 2.1'
