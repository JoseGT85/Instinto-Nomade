import Image from 'next/image'

export default function Actividades() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Actividades Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image src="/photo-1448375240586-882707db888b.avif" alt="Senderismo" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-bold">Senderismo</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image src="/photo-1464822759023-fed622ff2c3b.avif" alt="Escalada" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-bold">Escalada</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export{ Actividades }
