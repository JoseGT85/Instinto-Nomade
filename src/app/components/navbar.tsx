'use client'

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from 'react'
import { Button } from "./ui/Button"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Instinto Nómade</h1>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="hover:bg-primary-foreground hover:text-primary transition-colors duration-300">Inicio</Button>
          <Button variant="ghost" className="hover:bg-primary-foreground hover:text-primary transition-colors duration-300">Destinos</Button>
          <Button variant="ghost" className="hover:bg-primary-foreground hover:text-primary transition-colors duration-300">Actividades</Button>
          <Button variant="ghost" className="hover:bg-primary-foreground hover:text-primary transition-colors duration-300">Reseñas</Button>
          <Button variant="ghost" className="hover:bg-primary-foreground hover:text-primary transition-colors duration-300">Contacto</Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="transition-transform duration-300 hover:scale-110"
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            <span className="sr-only">Cambiar tema</span>
          </Button>
        </div>
        <Button
          className="md:hidden"
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <Button variant="ghost" className="w-full text-left py-2">Inicio</Button>
          <Button variant="ghost" className="w-full text-left py-2">Destinos</Button>
          <Button variant="ghost" className="w-full text-left py-2">Actividades</Button>
          <Button variant="ghost" className="w-full text-left py-2">Reseñas</Button>
          <Button variant="ghost" className="w-full text-left py-2">Contacto</Button>
        </div>
      )}
    </nav>
  )
}

export { Navbar }
