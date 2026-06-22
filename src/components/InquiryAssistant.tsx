
"use client"

import * as React from "react"
import { Send, Sparkles, Loader2, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { generateInquiryMessage } from "@/ai/flows/generate-inquiry-message"

export function InquiryAssistant() {
  const [concern, setConcern] = React.useState("")
  const [generatedMessage, setGeneratedMessage] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const handleGenerate = async () => {
    if (!concern) return
    setLoading(true)
    try {
      const result = await generateInquiryMessage({ userConcerns: concern })
      setGeneratedMessage(result.messageStarter)
    } catch (error) {
      console.error("Failed to generate message", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSend = () => {
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(generatedMessage)}`, '_blank')
  }

  return (
    <section className="py-24 px-4 bg-accent/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-headline mb-4">
            <Sparkles className="w-4 h-4" />
            Concierge Digital
          </div>
          <h2 className="text-4xl md:text-5xl font-headline mb-4">Dúvidas sobre o seu Olhar?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compartilhe suas inseguranças ou o que gostaria de melhorar. Nossa IA gerará um ponto de partida personalizado para sua consultoria com a Cecilia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <Card className="p-6 border-dashed flex flex-col justify-between">
            <div>
              <label className="text-sm font-headline uppercase tracking-widest block mb-3 opacity-70">
                O que te incomoda hoje?
              </label>
              <Textarea 
                placeholder="Ex: Minhas sobrancelhas são ralas e tenho medo de que qualquer procedimento fique artificial..."
                className="min-h-[150px] resize-none mb-4 focus:ring-primary/20"
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
              />
            </div>
            <Button 
              className="w-full gap-2 py-6 font-headline text-lg" 
              onClick={handleGenerate}
              disabled={loading || !concern}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              Gerar Início de Conversa
            </Button>
          </Card>

          <Card className={`p-6 bg-background transition-all duration-500 flex flex-col justify-between shadow-xl ${generatedMessage ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-sm font-headline uppercase tracking-widest opacity-70">Sua solicitação de consultoria</span>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg italic text-muted-foreground min-h-[120px] text-sm leading-relaxed">
                {generatedMessage || "O texto sugerido para Cecilia aparecerá aqui..."}
              </div>
            </div>
            
            {generatedMessage && (
              <Button 
                variant="default"
                className="w-full gap-2 py-6 mt-4 font-headline text-lg"
                onClick={handleSend}
              >
                <Send className="w-5 h-5" />
                Iniciar Atendimento no WhatsApp
              </Button>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
