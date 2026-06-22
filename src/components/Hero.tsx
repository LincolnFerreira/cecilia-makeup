
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-portrait')

  return (
    <section className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden">
      {/* Editorial Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -z-10 translate-x-1/2 -rotate-12" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10 animate-fade-in">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="font-headline uppercase tracking-[0.3em] text-sm text-primary">Master em Harmonização do Olhar</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline leading-[0.9] text-primary mb-8 tracking-tighter">
            A Estética da <br />
            <span className="italic font-body font-light text-foreground opacity-90">Naturalidade</span>
          </h1>

          <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Especialista em Nanopigmentação e Visagismo. Técnica refinada para realçar sua essência sem transformar quem você é. 
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="#booking">
              <button className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-headline text-lg uppercase tracking-widest flex items-center justify-center gap-3 hover:gap-5 transition-all shadow-xl hover:shadow-primary/20">
                Agende sua Consultoria
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="#services" className="flex items-center justify-center px-10 py-5 rounded-full font-headline text-lg uppercase tracking-widest border border-primary/20 hover:bg-primary/5 transition-colors">
              Conheça as Técnicas
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-8 border-t border-primary/10 pt-8 max-w-md">
            <div>
              <div className="text-3xl font-headline text-primary">Master</div>
              <div className="text-xs uppercase tracking-widest opacity-60">Especialista Certificada</div>
            </div>
            <div className="h-12 w-px bg-primary/10" />
            <div>
              <div className="text-3xl font-headline text-primary">100%</div>
              <div className="text-xs uppercase tracking-widest opacity-60">Foco em Personalização</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative aspect-[4/5] md:aspect-auto md:h-[80vh] group">
          <div className="absolute inset-0 border-[20px] border-accent/20 translate-x-8 translate-y-8 -z-10 group-hover:translate-x-12 group-hover:translate-y-12 transition-transform duration-700" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={heroImg?.imageUrl || ""} 
              alt="Cecilia Sousa Professional Portrait"
              fill
              className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              priority
              data-ai-hint="professional beauty woman"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
