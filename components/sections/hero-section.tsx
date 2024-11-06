import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background dark:bg-slate-900">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] items-center">
          <Image
            src="/img/hero.png"
            width={550}
            height={550}
            alt="Ilustración de terapia"
            className="mx-auto w-full max-w-[500px] object-cover"
          />
          <div className="flex flex-col justify-center gap-6">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-primary">
                En cada etapa de la vida
              </h2>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Impulsando el bienestar y el desarrollo emocional
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Transformemos los desafíos en oportunidades para el crecimiento y la mejora continua.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="outline">Más información</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}