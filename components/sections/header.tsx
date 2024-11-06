import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white py-6 shadow-sm border-b border-muted border-opacity-10 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-50">
      <div className="container mx-auto px-4 flex justify-between items-center" data-aos="fade-up">
        <Link href="/" className="text-2xl font-serif text-primary">
          Lic. Luciana Bahr
        </Link>
        <nav className="flex-grow mx-4 hidden lg:flex justify-end items-center space-x-4" data-aos="fade-up" data-aos-delay="200" >
          <ul className="flex justify-center space-x-8">
            <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200 py-2 px-3">Información</Link></li>
            <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200 py-2 px-3">Servicios</Link></li>
            <li><Link href="#contacto" className="text-muted-foreground hover:text-primary transition-colors duration-200 py-2 px-3">Contacto</Link></li>
          </ul>
        </nav>
        <div className="lg:hidden flex justify-end">
          <button className="burger-menu-button" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mobile-menu hidden lg:hidden">
        <ul className="flex flex-col space-y-4">
          <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200 py-2 px-3">Información</Link></li>
          <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200 py-2 px-3">Servicios</Link></li>
          <li><Link href="#contacto" className="text-muted-foreground hover:text-primary transition-colors duration-200 py-2 px-3">Contacto</Link></li>
        </ul>
      </div>
    </header>
  )
}