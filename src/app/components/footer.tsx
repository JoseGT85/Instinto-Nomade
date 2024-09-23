import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"

export default function Footer() {
  return (
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
  )
}

export { Footer };
