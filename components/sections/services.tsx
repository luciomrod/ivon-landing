import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, School, Heart, Smile, Clock } from "lucide-react"

const services = [
  {
    title: "Trastornos de ansiedad",
    description: "Tratamiento para ansiedad por separación, fobias, ansiedad social y trastorno de ansiedad generalizada.",
    icon: Brain,
  },
  {
    title: "Depresión y trastornos del estado de ánimo",
    description: "Apoyo para superar la depresión, distimia y trastorno bipolar en todas las edades.",
    icon: Heart,
  },
  {
    title: "Trastornos del comportamiento",
    description: "Manejo de trastornos como el negativista desafiante y problemas de conducta.",
    icon: Users,
  },
  {
    title: "Problemas de aprendizaje y desarrollo",
    description: "Ayuda con TDAH, dislexia y otros trastornos del desarrollo que afectan el rendimiento académico.",
    icon: School,
  },
  {
    title: "Dificultades relacionales o familiares",
    description: "Terapia para mejorar las relaciones familiares y resolver conflictos interpersonales.",
    icon: Users,
  },
  {
    title: "Problemas de autoestima y confianza",
    description: "Desarrollo de una imagen positiva de uno mismo y aumento de la confianza personal.",
    icon: Smile,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <service.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}