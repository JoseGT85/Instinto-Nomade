'use client'

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from "./ui/Button"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&h=800&q=80",
    title: "Descubre la Aventura",
    description: "Explora destinos increíbles y vive experiencias únicas"
  },
  {
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&h=800&q=80",
    title: "Naturaleza Pura",
    description: "Sumérgete en la belleza de paisajes impresionantes"
  },
  {
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1600&h=800&q=80",
    title: "Adrenalina Garantizada",
    description: "Desafía tus límites con nuestras actividades extremas"
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
          <div className="relative z-10 text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl">{slide.description}</p>
          </div>
        </div>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/50 hover:bg-white/75 transition-colors duration-300"
        onClick={prevSlide}
      >
        <ChevronLeftIcon className="h-6 w-6" />
        <span className="sr-only">Anterior</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/50 hover:bg-white/75 transition-colors duration-300"
        onClick={nextSlide}
      >
        <ChevronRightIcon className="h-6 w-6" />
        <span className="sr-only">Siguiente</span>
      </Button>
    </section>
  )
}

export { HeroSlider }

