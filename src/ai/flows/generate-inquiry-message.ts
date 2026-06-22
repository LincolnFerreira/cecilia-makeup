
'use server';
/**
 * @fileOverview Um assistente de IA que gera mensagens personalizadas no estilo "amiga especialista" da Cecilia Sousa.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInquiryMessageInputSchema = z.object({
  userConcerns: z
    .string()
    .describe(
      "As preocupações específicas da cliente (ex: 'cílios retos', 'sobrancelha bagunçada')."
    ),
});
export type GenerateInquiryMessageInput = z.infer<
  typeof GenerateInquiryMessageInputSchema
>;

const GenerateInquiryMessageOutputSchema = z.object({
  messageStarter: z
    .string()
    .describe(
      'Uma mensagem de WhatsApp personalizada no tom de voz da Cecilia.'
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
  prompt: `Você é a assistente digital da Cecilia Sousa, especialista em Brow Lamination e Lash Lifting.
O tom de voz da Cecilia é de uma "amiga especialista": confiante, direta, vendedora e informal. Ela usa termos como "diva", "bb", "SEM CONDIÇÕES" e foca muito em "processo x resultado".

Seu objetivo é gerar o início de uma conversa para a cliente enviar para a Cecilia no WhatsApp.
A mensagem deve:
1. Ser direta e cheia de energia.
2. Usar termos como "naturalidade", "alinhamento" e "olhar valorizado".
3. Soar como uma cliente que já decidiu que quer transformar o olhar.
4. Incluir expressões informais se fizer sentido (ex: "Cecilia, vi seus resultados e estou chocada, quero meu horário!").

Preocupação da Cliente: {{{userConcerns}}}`,
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
