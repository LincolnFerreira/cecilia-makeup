
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
              Dedicada à arte de harmonizar o olhar com técnica, elegância e naturalidade. Sediada em São Paulo, atendendo clientes que buscam excelência.
            </p>
          </div>

          <div>
            <h3 className="font-headline uppercase tracking-widest text-xs mb-6 opacity-60">Contato</h3>
            <ul className="space-y-4 text-sm font-body">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-40" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 opacity-40" />
                Av. Paulista, 1000 - CJ 12
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 opacity-40" />
                @ceciliasousabeauty
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline uppercase tracking-widest text-xs mb-6 opacity-60">Horários</h3>
            <ul className="space-y-2 text-sm font-body">
              <li>Seg - Sex: 09h às 19h</li>
              <li>Sábado: 09h às 14h</li>
              <li className="opacity-40">Domingo: Fechado</li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline uppercase tracking-widest text-xs mb-6 opacity-60">Social</h3>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-primary/5 gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-30">
            © 2026 CECILIA SOUSA BEAUTY. TODOS OS DIREITOS RESERVADOS.
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
