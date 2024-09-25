import { Card, CardContent } from "../components/ui/Card"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Textarea } from "./ui/textarea"

export default function Contacto() {
  return (
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
  )
}
export { Contacto }
