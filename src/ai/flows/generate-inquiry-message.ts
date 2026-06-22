
'use server';
/**
 * @fileOverview An AI agent that generates personalized WhatsApp message starters for potential clients.
 *
 * - generateInquiryMessage - A function that handles the message generation process.
 * - GenerateInquiryMessageInput - The input type for the generateInquiryMessage function.
 * - GenerateInquiryMessageOutput - The return type for the generateInquiryMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInquiryMessageInputSchema = z.object({
  userConcerns: z
    .string()
    .describe(
      "The user's specific beauty concerns (e.g., 'thin eyebrows', 'fear of artificial looks')."
    ),
});
export type GenerateInquiryMessageInput = z.infer<
  typeof GenerateInquiryMessageInputSchema
>;

const GenerateInquiryMessageOutputSchema = z.object({
  messageStarter: z
    .string()
    .describe(
      'A personalized WhatsApp message starter based on the user concerns.'
    ),
});
export type GenerateInquiryMessageOutput = z.infer<
  typeof GenerateInquiryMessageOutputSchema
>;

export async function generateInquiryMessage(
  input: GenerateInquiryMessageInput
): Promise<GenerateInquiryMessageOutput> {
  return generateInquiryMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInquiryMessagePrompt',
  input: {schema: GenerateInquiryMessageInputSchema},
  output: {schema: GenerateInquiryMessageOutputSchema},
  prompt: `You are an AI assistant for Cecilia Sousa Beauty, a high-end eyebrow and facial harmony specialist.
Cecilia is known for "Nanopigmentação Flow", "Visagismo Estratégico", and "Reabilitação de Sobrancelhas". Her brand is centered on extreme naturalness and sophisticated technique.

Your goal is to generate a personalized WhatsApp message starter for potential clients. 
The message should:
1. Be sophisticated, professional, yet warm.
2. Acknowledge their concern (e.g., "fear of artificial look", "thin brows").
3. Use terms like "Personalização", "Naturalidade", and "Consultoria Visual".
4. Sound like the client is seeking an expert opinion.

Do not include phone numbers or links. Only the message text.

User Concerns: {{{userConcerns}}}`,
});

const generateInquiryMessageFlow = ai.defineFlow(
  {
    name: 'generateInquiryMessageFlow',
    inputSchema: GenerateInquiryMessageInputSchema,
    outputSchema: GenerateInquiryMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
