'use client'

import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, MoonIcon, MountainIcon, PhoneIcon, Star, SunIcon, TwitterIcon, UmbrellaIcon, UsersIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
'../components/ui/';

type Resena = {
  nombre: string
  comentario: string
  puntuacion: number
}

type Destino = {
  nombre: string
  descripcion: string
  imagen: string
  icono: React.ReactNode
}

const destinos: Destino[] = [
  { 
    nombre: "Montaña Aventura", 
    descripcion: "Excursiones y escalada en las montañas más hermosas.", 
    imagen: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80", 
    icono: <MountainIcon className="h-6 w-6" />
  },
  { 
    nombre: "Rafting Extremo", 
    descripcion: "Experimenta la adrenalina en los rápidos más emocionantes.", 
    imagen: "https://images.unsplash.com/photo-1530866495561-12c9aff02a2f?auto=format&fit=crop&w=300&q=80", 
    icono: <UmbrellaIcon className="h-6 w-6" />
  },
  { 
    nombre: "Senderismo en la Selva", 
    descripcion: "Explora la naturaleza en su estado más puro.", 
    imagen: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=300&q=80", 
    icono: <MapPinIcon className="h-6 w-6" />
  },
]

export default function PaginaPrincipal() {
  const [resenas, setResenas] = useState<Resena[]>([])
  const [nombre, setNombre] = useState('')
  const [comentario, setComentario] = useState('')
  const [puntuacion, setPuntuacion] = useState(5)
  const { theme, setTheme } = useTheme()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const storedResenas = localStorage.getItem('resenas')
    if (storedResenas) {
      setResenas(JSON.parse(storedResenas))
    }
  }, [])

  const handleSubmitResena = (e: React.FormEvent) => {
    e.preventDefault()
    const nuevaResena: Resena = { nombre, comentario, puntuacion }
    const nuevasResenas = [...resenas, nuevaResena]
    setResenas(nuevasResenas)
    localStorage.setItem('resenas', JSON.stringify(nuevasResenas))
    setNombre('')
    setComentario('')
    setPuntuacion(5)
  }

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

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Barra de navegación */}
      <nav className="bg-primary text-primary-foreground p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Instinto Nómade</h1>
          <div className="flex items-center space-x-4">
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
        </div>
      </nav>

      {/* Sección de slides de fotos */}
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

      {/* Sección de destinos */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Destinos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinos.map((destino, index) => (
              <Card key={index} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <Image src={destino.imagen} alt={destino.nombre} width={300} height={200} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    {destino.icono}
                    <span className="ml-2">{destino.nombre}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{destino.descripcion}</p>
                  <Button className="mt-4 w-full">Ver más</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de actividades */}
      <section className="py-12 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Actividades Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image src='https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&h=400&q=80'  alt="Senderismo" layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">Senderismo</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image src='https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&h=400&q=80' alt="Escalada" layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">Escalada</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarIcon className="mr-2" />
                  Flexibilidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Ofrecemos fechas flexibles para adaptarnos a tu agenda.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UsersIcon className="mr-2" />
                  Grupos Pequeños
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Experiencias personalizadas en grupos reducidos.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PhoneIcon className="mr-2" />
                  Soporte 24/7
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Estamos disponibles para ti en todo momento.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de reseñas */}
      <section className="py-12 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Reseñas de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Deja tu Reseña</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitResena} className="space-y-4">
                  <Input
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="border-2 border-primary focus:ring-2 focus:ring-primary"
                  />
                  <Textarea
                    placeholder="Tu comentario"
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    required
                    className="border-2 border-primary focus:ring-2 focus:ring-primary"
                  />
                  <div>
                    <label htmlFor="puntuacion" className="block mb-2 font-semibold">Puntuación:</label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <Star
                          key={value}
                          className={`cursor-pointer transition-colors duration-300 ${
                            value <= puntuacion ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          onClick={() => setPuntuacion(value)}
                        />
                      ))}
                    </div>
                  </div>
                  <Button type="submit" className="w-full transition-transform duration-300 hover:scale-105">Enviar Reseña</Button>
                </form>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Reseñas Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                {resenas.length === 0 ? (
                  <p className="text-center text-muted-foreground">No hay reseñas aún.</p>
                ) : (
                  <ul className="space-y-4">
                    {resenas.map((resena, index) => (
                      <li key={index} className="border-b pb-4 last:border-b-0">
                        <p className="font-bold text-lg">{resena.nombre}</p>
                        <p className="text-muted-foreground">{resena.comentario}</p>
                        <div className="flex items-center mt-2">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <Star
                              key={value}
                              className={`w-4 h-4 ${
                                value <= resena.puntuacion ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="space-y-4">
                <Input placeholder="Nombre" className="border-2 border-primary focus:ring-2 focus:ring-primary" />
                <Input placeholder="Email" type="email" className="border-2 border-primary focus:ring-2 focus:ring-primary" />
                <Textarea placeholder="Mensaje" className="border-2 border-primary focus:ring-2 focus:ring-primary" />
                <Button className="w-full">Enviar Mensaje</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer actualizado */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Instinto Nómade</h3>
            <p>Experiencias inolvidables en cada viaje</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contáctanos</h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <MailIcon className="mr-2 h-5 w-5" />
                info@instintonomade.com
              </p>
              <p className="flex items-center">
                <PhoneIcon className="mr-2 h-5 w-5" />
                +1 234 567 890
              </p>
              <p className="flex items-center">
                <MapPinIcon className="mr-2 h-5 w-5" />
                123 Calle Aventura, Ciudad Exploradora
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors duration-300">
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                <TwitterIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Instinto Nómade. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}