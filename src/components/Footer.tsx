
import Link from "next/link"
import { Instagram, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-primary/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-headline tracking-tighter text-primary mb-6">
              CECILIA SOUSA
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando olhares em São Caetano do Sul. Foco em naturalidade, técnica e saúde dos fios. +1000 clientes que revelaram sua melhor versão.
            </p>
          </div>

          <div>
            <h3 className="font-headline uppercase tracking-widest text-xs mb-6 opacity-60">Onde estamos</h3>
            <ul className="space-y-4 text-sm font-body">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 opacity-40" />
                São Caetano do Sul, SP <br />
                <span className="text-[10px] opacity-60 ml-7">Atendimento na @makeupjaque</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 opacity-40" />
                @ceciliasousabeauty
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline uppercase tracking-widest text-xs mb-6 opacity-60">Atendimento</h3>
            <ul className="space-y-2 text-sm font-body">
              <li>Seg - Sex: Horários Flexíveis</li>
              <li>Sábados: Sob Agendamento</li>
              <li className="opacity-40 italic">Garanta sua vaga antecipada, bb!</li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline uppercase tracking-widest text-xs mb-6 opacity-60">Siga no Insta</h3>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/ceciliasousa____/" target="_blank" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-primary/5 gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-30">
            © 2026 CECILIA SOUSA BEAUTY. BELEZA NATURAL SEMPRE.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] opacity-30">
            <Link href="#" className="hover:opacity-100 transition-opacity">Privacidade</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
