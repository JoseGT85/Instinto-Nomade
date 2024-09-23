import { CalendarIcon, PhoneIcon, UsersIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"

export default function Caracteristicas() {
  return (
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
  )
}
export { Caracteristicas }
