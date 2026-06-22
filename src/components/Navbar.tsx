
"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-background/80 backdrop-blur-md border-b py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="group">
          <h1 className="text-2xl font-headline tracking-tighter text-primary">
            CECILIA SOUSA <span className="font-body italic text-sm opacity-50 block -mt-1 group-hover:opacity-100 transition-opacity">Harmonia do Olhar</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-12 font-headline text-sm uppercase tracking-widest">
          <Link href="#services" className="hover:text-primary transition-colors">Serviços</Link>
          <Link href="#gallery" className="hover:text-primary transition-colors">Resultados</Link>
          <Link href="#booking" className="hover:text-primary transition-colors">Agendamento</Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="#booking">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-headline text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
              Agendar
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
