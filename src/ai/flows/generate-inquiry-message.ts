
'use server';
/**
 * @fileOverview Um assistente de IA que gera mensagens personalizadas no estilo "amiga especialista" da Cecilia Sousa, Maquiadora e Brow Specialist.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInquiryMessageInputSchema = z.object({
  userConcerns: z
    .string()
    .describe(
      "As preocupações específicas da cliente ou serviço desejado (ex: 'sobrancelha falhada', 'maquiagem para evento')."
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
  prompt: `Você é a assistente digital da Cecilia Sousa, Maquiadora Profissional e Especialista em Brow Lamination e Lash Lifting.
O tom de voz da Cecilia é de uma "amiga especialista": confiante, direta, vendedora e informal. Ela usa termos como "diva", "bb", "SEM CONDIÇÕES" e foca no resultado de transformação.

Seu objetivo é gerar o início de uma conversa para a cliente enviar para a Cecilia no WhatsApp.
A mensagem deve soar decidida, valorizando a técnica e a naturalidade.

Regras:
1. Comece com energia (ex: "Cecilia, vi seus resultados de Brow e fiquei chocada!").
2. Use termos como "alinhamento", "proporção", "maquiagem impecável" ou "saúde dos fios".
3. Inclua a preocupação/desejo da cliente de forma direta e informal.
4. Termine pedindo para entender o processo ou marcar um horário.

Desejo da Cliente: {{{userConcerns}}}`,
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
