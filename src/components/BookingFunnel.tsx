
"use client"

import * as React from "react"
import { ChevronRight, Calendar, Sparkles, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const steps = [
  {
    id: 1,
    title: "Qual o seu objetivo principal?",
    options: ["Naturalidade e Harmonia", "Definição Técnica", "Praticidade Diária", "Correção de Design"],
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Histórico de procedimentos:",
    options: ["Nunca realizei", "Manutenção regular", "Busco reabilitação", "Maquiagem para evento"],
    icon: <Heart className="w-6 h-6" />
  }
]

export function BookingFunnel() {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [selections, setSelections] = React.useState<string[]>([])

  const handleOption = (option: string) => {
    const newSelections = [...selections, option]
    setSelections(newSelections)
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      const message = `Olá Cecilia! Gostaria de agendar um atendimento profissional. Meus objetivos: ${newSelections.join(", ")}.`
      window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(message)}`, '_blank')
    }
  }

  return (
    <section id="booking" className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline mb-6">Pronta para elevar sua beleza?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Inicie seu agendamento respondendo a estas questões para que eu possa planejar sua consultoria de visagismo personalizada.
            </p>
            <div className="flex items-center gap-4 text-sm uppercase tracking-widest font-headline opacity-60">
              <span className={currentStep === 0 ? "opacity-100 font-bold" : ""}>01. Objetivo</span>
              <div className="h-px w-8 bg-current opacity-30" />
              <span className={currentStep === 1 ? "opacity-100 font-bold" : ""}>02. Histórico</span>
            </div>
          </div>

          <Card className="p-8 bg-background text-foreground border-none shadow-2xl">
            <div className="mb-6 text-primary flex items-center gap-3">
              {steps[currentStep].icon}
              <h3 className="text-xl font-headline">{steps[currentStep].title}</h3>
            </div>
            
            <div className="grid gap-3">
              {steps[currentStep].options.map((option) => (
                <Button 
                  key={option}
                  variant="outline"
                  className="justify-between h-14 text-left border-primary/10 hover:border-primary hover:bg-primary/5 transition-all group"
                  onClick={() => handleOption(option)}
                >
                  {option}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center text-xs opacity-50 uppercase tracking-tighter">
              <span>Etapa {currentStep + 1} de 2</span>
              {currentStep > 0 && (
                <button 
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="hover:underline"
                >
                  Voltar
                </button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
