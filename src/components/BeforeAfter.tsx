
"use client"

import * as React from "react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function BeforeAfter() {
  const [sliderPos, setSliderPos] = React.useState(50)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(pos)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) handleMove(e.clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX)

  const beforeImg = PlaceHolderImages.find(img => img.id === 'gallery-before')
  const afterImg = PlaceHolderImages.find(img => img.id === 'gallery-after')

  return (
    <section id="gallery" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-headline mb-4">A Harmonia em Detalhes</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Arraste para ver como a técnica correta e o visagismo estratégico podem valorizar seu olhar de forma sofisticada.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative aspect-[4/3] max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize select-none border-4 border-background"
        onMouseMove={handleMouseMove}
        onMouseDown={(e) => handleMove(e.clientX)}
        onTouchMove={onTouchMove}
      >
        {/* After Image (Visible) */}
        <div className="absolute inset-0">
          <Image 
            src={afterImg?.imageUrl || ""} 
            alt="After treatment"
            fill
            className="object-cover"
            data-ai-hint="perfect eyebrows"
          />
          <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded text-sm font-headline uppercase tracking-widest">Depois</div>
        </div>

        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image 
            src={beforeImg?.imageUrl || ""} 
            alt="Before treatment"
            fill
            className="object-cover"
            data-ai-hint="thin eyebrows"
          />
          <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded text-sm font-headline uppercase tracking-widest">Antes</div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-3 bg-primary/30 rounded-full" />
              <div className="w-0.5 h-3 bg-primary/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
