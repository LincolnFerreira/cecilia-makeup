
"use client"

import * as React from "react"
import Image from "next/image"
import { Quote } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Advogada",
    content: "O trabalho da Cecilia é impecável. Minhas sobrancelhas ficaram naturais, exatamente como eu queria. O ambiente é acolhedor e ela é muito detalhista.",
    imgId: "client-testimonial-1"
  },
  {
    name: "Beatriz Oliveira",
    role: "Designer",
    content: "Nunca tinha feito Brow Lamination por medo de ficar exagerado. A Cecilia me explicou tudo e o resultado foi sutil e elegante. Recomendo demais!",
    imgId: "client-testimonial-2"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-4xl md:text-5xl font-headline mb-8 text-primary leading-tight">
            O que dizem sobre a <span className="italic font-body">Experiência Cecilia Sousa</span>
          </h2>
          <div className="h-1 w-24 bg-primary/20 mb-8" />
          <p className="text-lg text-muted-foreground mb-12">
            Mais do que procedimentos estéticos, entregamos confiança e bem-estar através do olhar.
          </p>
        </div>

        <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => {
            const img = PlaceHolderImages.find(i => i.id === t.imgId)
            return (
              <Card key={idx} className="p-8 border-none bg-muted/30 shadow-none relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary opacity-5" />
                <p className="text-lg italic font-body text-foreground/80 mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
                    <Image 
                      src={img?.imageUrl || ""} 
                      alt={t.name}
                      fill
                      className="object-cover"
                      data-ai-hint="beauty portrait"
                    />
                  </div>
                  <div>
                    <div className="font-headline text-lg text-primary">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest opacity-50">{t.role}</div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
