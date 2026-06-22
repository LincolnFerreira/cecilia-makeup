
"use client"

import * as React from "react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card } from "@/components/ui/card"

const services = [
  {
    id: "brow-lamination",
    title: "Brow Lamination",
    description: "Técnica de elite para sobrancelhas alinhadas e volumosas. Foco total na saúde dos fios e na texturização para um resultado elegante.",
    tag: "Saúde & Técnica",
    imgId: "brow-lamination"
  },
  {
    id: "lash-lifting",
    title: "Lash Lifting",
    description: "Cílios curvados, hidratados e realçados com naturalidade. Praticidade e sofisticação para o olhar no dia a dia.",
    tag: "Curvatura Natural",
    imgId: "lash-lifting"
  },
  {
    id: "design-estrategico",
    title: "Design Estratégico",
    description: "Uso de visagismo e proporção facial para criar um design exclusivo que valoriza a harmonia única do seu rosto.",
    tag: "Visagismo & Proporção",
    imgId: "brow-design"
  },
  {
    id: "maquiagem-profissional",
    title: "Maquiagem Profissional",
    description: "Beleza sofisticada e técnica para eventos e momentos especiais. Acabamento limpo que realça sua melhor versão.",
    tag: "Beleza de Elite",
    imgId: "hero-portrait"
  }
]

export function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-headline uppercase tracking-[0.4em] text-primary mb-6">Autoridade e Transformação</h2>
            <h3 className="text-5xl md:text-7xl font-headline tracking-tighter text-primary">
              Técnica Avançada para uma <span className="italic font-body text-foreground">Beleza Sofisticada</span>
            </h3>
          </div>
          <p className="text-lg font-body text-muted-foreground max-w-sm mb-2">
            Especialista em transformar olhares através do alinhamento, proporção e saúde dos fios. Naturalidade com técnica de elite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    data-ai-hint={img?.imageHint || "beauty service"}
                  />
                  <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-headline uppercase tracking-widest">
                    {service.tag}
                  </div>
                </div>
                <div>
                  <div className="text-xs opacity-40 font-headline mb-2">0{idx + 1}</div>
                  <h4 className="text-2xl font-headline text-primary mb-4 leading-tight">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
