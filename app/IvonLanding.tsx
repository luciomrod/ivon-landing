"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Search, Menu, User, Users, Heart, Shield } from "lucide-react"
import { Services } from "@/components/sections/services"
import Header from "../components/sections/header"
import HeroSection from "../components/sections/hero-section"
import ContactSection from "../components/sections/contacto"
import { Carousel } from "@/components/ui/carousel"
import 'aos/dist/aos.css';
import AOS from 'aos';


export default function Component() {

    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true
    });

    return (
    <div className="flex flex-col min-h-screen bg-background">
        <header className="border-b">
        <section className="py-4" >
            <div data-aos="fade-up">
                <Header />
            </div>
        </section>
        </header>

        <main className="flex-grow container mx-auto px-4 flex flex-col items-center justify-center">
        <section id="hero" className="py-16" >
            <HeroSection />
        </section>

        <section id="services" className="py-16">
            <Services />
        </section>

        <section id="contacto" className="py-16" >
            <ContactSection />
        </section>

        <section className="py-16 mt-16 mb-10">
            <div className="container mx-auto px-4 text-center mt-8">
            <h2 className="text-3xl font-bold mb-8">Suscribite para recibir notificaciones</h2>
            <p className="text-xl mb-8">Inicia un proceso respaldado por la experiencia y el compromiso con el bienestar. Agenda una consulta y trabajemos juntos en un desarrollo emocional integral.</p>
            <Button size="lg">Suscribite</Button>
            </div>
        </section>

        <section className="py-16">   
            <Carousel />
        </section>


        </main>

        <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Lic. Luciana Bahr</h3>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Links de utilidad</h3>
                <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Información</Link></li>
                <li><Link href="#" className="hover:underline">Servicios</Link></li>
                <li><Link href="#" className="hover:underline">Contacto</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>Email: info@lucianabahr.com</p>
                <p>Teléfono: +54 55 1234 5678</p>
            </div>
            </div>
            <div className="mt-12 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Coder Craft. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
    </div>
    )
}
