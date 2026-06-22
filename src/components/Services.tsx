
"use client"

import * as React from "react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card } from "@/components/ui/card"

const services = [
  {
    id: "brow-lamination",
    title: "Brow Lamination",
    description: "Para quem quer sobrancelhas alinhadas e volumosas. Técnica que trata a saúde dos fios enquanto revela o potencial máximo do seu olhar.",
    tag: "Best-Seller",
    imgId: "brow-lamination"
  },
  {
    id: "lash-lifting",
    title: "Lash Lifting",
    description: "Cílios curvados, hidratados e pretinhos com naturalidade. Esqueça o curvex, o foco aqui é praticidade e elegância no dia a dia.",
    tag: "Olhar Revelado",
    imgId: "lash-lifting"
  },
  {
    id: "design-visagismo",
    title: "Design Estratégico",
    description: "Nada de moldes prontos. Uso a proporção e harmonia do seu rosto para criar o design que valoriza a sua beleza única.",
    tag: "Proporção Real",
    imgId: "brow-design"
  }
]

export function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-headline uppercase tracking-[0.4em] text-primary mb-6">Procedimento ou Transformação?</h2>
            <h3 className="text-5xl md:text-7xl font-headline tracking-tighter text-primary">
              Técnica, Saúde e <span className="italic font-body text-foreground">Harmonia Facial</span>
            </h3>
          </div>
          <p className="text-lg font-body text-muted-foreground max-w-sm mb-2">
            Minha missão é revelar a sua melhor versão sem cara de "fiz procedimento". Naturalidade é a nossa regra número 1.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const img = PlaceHolderImages.find(i => i.id === service.imgId)
            return (
              <Card key={service.id} className="group overflow-hidden border-none bg-transparent shadow-none hover:-translate-y-2 transition-transform duration-500">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-8 shadow-xl">
                  <Image 
                    src={img?.imageUrl || ""} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={img?.imageHint}
                  />
                  <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-headline uppercase tracking-widest">
                    {service.tag}
                  </div>
                </div>
                <div>
                  <div className="text-xs opacity-40 font-headline mb-2">0{idx + 1}</div>
                  <h4 className="text-3xl font-headline text-primary mb-4">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
