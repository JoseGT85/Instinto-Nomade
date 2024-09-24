import { MapPinIcon, MountainIcon, UmbrellaIcon } from "lucide-react"
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Button } from "./ui/Button"

const destinos = [
  { 
    nombre: "Montaña Aventura", 
    descripcion: "Excursiones y escalada en las montañas más hermosas.", 
    imagen: "/photo-1464822759023-fed622ff2c3b.avif", 
    icono: <MountainIcon className="h-6 w-6" />
  },
  { 
    nombre: "Rafting Extremo", 
    descripcion: "Experimenta la adrenalina en los rápidos más emocionantes.", 
    imagen: "/photo-1464822759023-fed622ff2c3b.avif", 
    icono: <UmbrellaIcon className="h-6 w-6" />
  },
  { 
    nombre: "Senderismo en la Selva", 
    descripcion: "Explora la naturaleza en su estado más puro.", 
    imagen: "/photo-1448375240586-882707db888b.avif", 
    icono: <MapPinIcon className="h-6 w-6" />
  },
]

export default function Destinos() {
  return (
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
  )
}
export { Destinos }
