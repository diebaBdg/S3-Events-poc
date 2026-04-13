import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Scissors, Camera, Sparkles, Palette, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categoryData: Record<string, {
  title: string
  description: string
  icon: typeof Scissors
  image: string
  providers: Array<{
    id: number
    name: string
    specialty: string
    rating: number
    reviews: number
    image: string
    price: string
  }>
}> = {
  couture: {
    title: "Couture",
    description: "Robes sur mesure, tenues traditionnelles et modernes pour sublimer votre journee speciale.",
    icon: Scissors,
    image: "/images/service-couture.jpg",
    providers: [
      { id: 1, name: "Fatou Diallo", specialty: "Robes de mariee", rating: 4.9, reviews: 127, image: "/images/provider-3.jpg", price: "A partir de 250 000 FCFA" },
      { id: 2, name: "Aida Ndiaye", specialty: "Tenues traditionnelles", rating: 4.8, reviews: 89, image: "/images/provider-2.jpg", price: "A partir de 150 000 FCFA" },
      { id: 8, name: "Coumba Sarr", specialty: "Mode africaine moderne", rating: 4.7, reviews: 65, image: "/images/provider-1.jpg", price: "A partir de 120 000 FCFA" },
    ],
  },
  photographe: {
    title: "Photographes",
    description: "Immortalisez chaque moment precieux avec nos photographes professionnels.",
    icon: Camera,
    image: "/images/service-photo.jpg",
    providers: [
      { id: 3, name: "Aminata Sow", specialty: "Mariage & Portrait", rating: 5.0, reviews: 156, image: "/images/provider-1.jpg", price: "A partir de 200 000 FCFA" },
      { id: 4, name: "Moussa Fall", specialty: "Video & Photo", rating: 4.9, reviews: 98, image: "/images/provider-6.jpg", price: "A partir de 300 000 FCFA" },
      { id: 9, name: "Oumar Diallo", specialty: "Photo evenementielle", rating: 4.8, reviews: 72, image: "/images/provider-4.jpg", price: "A partir de 150 000 FCFA" },
    ],
  },
  maquillage: {
    title: "Maquillage",
    description: "Des maquilleuses professionnelles pour sublimer votre beaute naturelle.",
    icon: Sparkles,
    image: "/images/service-makeup.jpg",
    providers: [
      { id: 5, name: "Khady Mbaye", specialty: "Maquillage mariee", rating: 4.9, reviews: 134, image: "/images/provider-2.jpg", price: "A partir de 75 000 FCFA" },
      { id: 10, name: "Ndeye Fatou", specialty: "Maquillage & Coiffure", rating: 4.8, reviews: 95, image: "/images/provider-3.jpg", price: "A partir de 50 000 FCFA" },
    ],
  },
  decoration: {
    title: "Decoration",
    description: "Creez l'ambiance parfaite avec nos decorateurs evenementiels experts.",
    icon: Palette,
    image: "/images/service-decor.jpg",
    providers: [
      { id: 6, name: "Ibrahima Diop", specialty: "Decoration mariage", rating: 4.8, reviews: 76, image: "/images/provider-4.jpg", price: "A partir de 500 000 FCFA" },
      { id: 11, name: "Mame Diarra", specialty: "Decoration florale", rating: 4.9, reviews: 84, image: "/images/provider-5.jpg", price: "A partir de 300 000 FCFA" },
      { id: 12, name: "Seydou Gueye", specialty: "Decoration complete", rating: 4.7, reviews: 58, image: "/images/provider-6.jpg", price: "A partir de 400 000 FCFA" },
    ],
  },
  traiteur: {
    title: "Traiteur",
    description: "Des saveurs exquises pour ravir vos invites lors de votre evenement.",
    icon: UtensilsCrossed,
    image: "/images/service-traiteur.jpg",
    providers: [
      { id: 7, name: "Mariama Ba", specialty: "Cuisine senegalaise & internationale", rating: 4.9, reviews: 112, image: "/images/provider-5.jpg", price: "A partir de 15 000 FCFA/personne" },
      { id: 13, name: "Abdoulaye Seck", specialty: "Cuisine traditionnelle", rating: 4.8, reviews: 89, image: "/images/provider-4.jpg", price: "A partir de 12 000 FCFA/personne" },
    ],
  },
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const data = categoryData[category] || categoryData.couture
  const IconComponent = data.icon

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="bg-muted border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux services
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-16 lg:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h1 className="font-serif text-4xl lg:text-5xl text-foreground">{data.title}</h1>
                </div>
                <p className="text-foreground/60 text-lg leading-relaxed">
                  {data.description}
                </p>
              </div>
              <div className="aspect-[16/10] relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Providers Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl text-foreground mb-8">
              {data.providers.length} prestataires disponibles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.providers.map((provider) => (
                <Link
                  key={provider.id}
                  href={`/services/${category}/${provider.id}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={provider.image}
                      alt={provider.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                      {provider.name}
                    </h3>
                    <p className="text-foreground/60 text-sm mt-1">{provider.specialty}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-medium text-foreground">{provider.rating}</span>
                      <span className="text-foreground/40 text-sm">({provider.reviews} avis)</span>
                    </div>
                    <p className="text-primary font-medium mt-4">{provider.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl text-foreground mb-4">
              Besoin d&apos;aide pour choisir ?
            </h2>
            <p className="text-foreground/60 mb-8">
              Contactez-nous pour des recommandations personnalisees.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/booking">
                Demander un devis
              </Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
