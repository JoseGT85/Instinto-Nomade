'use client'

import { Star } from "lucide-react"
import { useEffect, useState } from 'react'
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { Input } from "./ui/nput"
import { Textarea } from "./ui/textarea"

type Resena = {
  nombre: string
  comentario: string
  puntuacion: number
}

export default function Resenas() {
  const [resenas, setResenas] = useState<Resena[]>([])
  const [nombre, setNombre] = useState('')
  const [comentario, setComentario] = useState('')
  const [puntuacion, setPuntuacion] = useState(5)

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

  return (
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
  )
}

export { Resenas }
