import HeroSlider from "@/app/components/hero-slider";
import Actividades from "src/app/components/actividades";
import Caracteristicas from "src/app/components/caracteristicas";
import Contacto from "src/app/components/contacto";
import Destinos from "src/app/components/destinos";
import Footer from "src/app/components/footer";
import Navbar from "src/app/components/navbar";
import Resenas from "src/app/components/resenas";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSlider />
        <Destinos />
        <Actividades />
        <Caracteristicas />
        <Resenas />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}