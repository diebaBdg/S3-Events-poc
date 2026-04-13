import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, MapPin, Clock, CheckCircle2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Sample provider data - in production this would come from a database
const providers: Record<string, {
  id: number
  name: string
  specialty: string
  category: string
  rating: number
  reviews: number
  image: string
  price: string
  description: string
  location: string
  responseTime: string
  portfolio: string[]
  features: string[]
}> = {
  "1": {
    id: 1,
    name: "Fatou Diallo",
    specialty: "Robes de mariee",
    category: "Couture",
    rating: 4.9,
    reviews: 127,
    image: "/images/provider-3.jpg",
    price: "A partir de 250 000 FCFA",
    description: "Specialiste des robes de mariee sur mesure depuis plus de 15 ans. Je cree des pieces uniques qui allient tradition senegalaise et elegance moderne. Chaque robe est confectionnee avec des tissus de qualite superieure.",
    location: "Dakar, Almadies",
    responseTime: "Repond en 2h",
    portfolio: ["/images/service-couture.jpg", "/images/hero-wedding.jpg", "/images/service-couture.jpg"],
    features: ["Consultation personnalisee", "Tissus premium", "Retouches incluses", "Delai 4-6 semaines"],
  },
  "2": {
    id: 2,
    name: "Aida Ndiaye",
    specialty: "Tenues traditionnelles",
    category: "Couture",
    rating: 4.8,
    reviews: 89,
    image: "/images/provider-2.jpg",
    price: "A partir de 150 000 FCFA",
    description: "Couturiere specialisee dans les tenues traditionnelles senegalaises. Je confectionne des boubous, des robes en bazin et des tenues de ceremonie avec des finitions impeccables.",
    location: "Dakar, Medina",
    responseTime: "Repond en 3h",
    portfolio: ["/images/service-couture.jpg", "/images/hero-wedding.jpg", "/images/service-couture.jpg"],
    features: ["Boubous traditionnels", "Bazin brode", "Sur mesure", "Livraison possible"],
  },
  "3": {
    id: 3,
    name: "Aminata Sow",
    specialty: "Mariage & Portrait",
    category: "Photographe",
    rating: 5.0,
    reviews: 156,
    image: "/images/provider-1.jpg",
    price: "A partir de 200 000 FCFA",
    description: "Photographe passionnee specialisee dans les mariages et portraits. Je capture les emotions authentiques et les moments precieux de votre journee avec un style artistique et elegant.",
    location: "Dakar, Point E",
    responseTime: "Repond en 1h",
    portfolio: ["/images/service-photo.jpg", "/images/hero-wedding.jpg", "/images/service-photo.jpg"],
    features: ["Couverture complete", "Album photo inclus", "Retouches professionnelles", "Photos HD livrees"],
  },
  "4": {
    id: 4,
    name: "Moussa Fall",
    specialty: "Video & Photo",
    category: "Photographe",
    rating: 4.9,
    reviews: 98,
    image: "/images/provider-6.jpg",
    price: "A partir de 300 000 FCFA",
    description: "Videaste et photographe professionnel. Je realise des films de mariage cinematographiques et des photos qui racontent votre histoire.",
    location: "Dakar, Fann",
    responseTime: "Repond en 2h",
    portfolio: ["/images/service-photo.jpg", "/images/hero-wedding.jpg", "/images/service-photo.jpg"],
    features: ["Video 4K", "Drone aerien", "Montage cinema", "Livraison rapide"],
  },
  "5": {
    id: 5,
    name: "Khady Mbaye",
    specialty: "Maquillage mariee",
    category: "Maquillage",
    rating: 4.9,
    reviews: 134,
    image: "/images/provider-2.jpg",
    price: "A partir de 75 000 FCFA",
    description: "Maquilleuse professionnelle certifiee avec 10 ans d'experience. Je sublime votre beaute naturelle avec des produits haut de gamme adaptes a tous les types de peau.",
    location: "Dakar, Mermoz",
    responseTime: "Repond en 30min",
    portfolio: ["/images/service-makeup.jpg", "/images/service-makeup.jpg", "/images/service-makeup.jpg"],
    features: ["Essai maquillage", "Produits premium", "Deplacement inclus", "Touch-up disponible"],
  },
  "6": {
    id: 6,
    name: "Ibrahima Diop",
    specialty: "Decoration mariage",
    category: "Decoration",
    rating: 4.8,
    reviews: 76,
    image: "/images/provider-4.jpg",
    price: "A partir de 500 000 FCFA",
    description: "Decorateur evenementiel avec plus de 8 ans d'experience. Je cree des ambiances uniques et elegantes pour vos mariages et evenements speciaux.",
    location: "Dakar, Ouakam",
    responseTime: "Repond en 2h",
    portfolio: ["/images/service-decor.jpg", "/images/hero-wedding.jpg", "/images/service-decor.jpg"],
    features: ["Decoration complete", "Fleurs fraiches", "Eclairage", "Installation jour J"],
  },
  "7": {
    id: 7,
    name: "Mariama Ba",
    specialty: "Cuisine senegalaise & internationale",
    category: "Traiteur",
    rating: 4.9,
    reviews: 112,
    image: "/images/provider-5.jpg",
    price: "A partir de 15 000 FCFA/personne",
    description: "Chef traiteur specialisee dans la cuisine senegalaise et internationale. Je prepare des repas savoureux avec des produits frais et locaux pour vos evenements.",
    location: "Dakar, Plateau",
    responseTime: "Repond en 1h",
    portfolio: ["/images/service-traiteur.jpg", "/images/service-traiteur.jpg", "/images/service-traiteur.jpg"],
    features: ["Menu personnalise", "Service inclus", "Vaisselle fournie", "Livraison"],
  },
}

export default async function ProviderDetailPage({
  params,
}: {
  params: Promise<{ category: string; providerId: string }>
}) {
  const { category, providerId } = await params
  const provider = providers[providerId] || providers["1"]

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

        {/* Provider Header */}
        <section className="bg-muted pb-8 lg:pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src={provider.image}
                  alt={provider.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-primary font-medium mb-2">{provider.category}</p>
                <h1 className="font-serif text-3xl lg:text-4xl text-foreground">{provider.name}</h1>
                <p className="text-foreground/60 mt-1">{provider.specialty}</p>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="font-semibold text-foreground">{provider.rating}</span>
                    <span className="text-foreground/50">({provider.reviews} avis)</span>
                  </div>
                  <div className="flex items-center gap-1 text-foreground/60">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{provider.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-foreground/60">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{provider.responseTime}</span>
                  </div>
                </div>
              </div>
              <div className="lg:text-right">
                <p className="text-2xl lg:text-3xl font-serif text-primary">{provider.price}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-10">
                {/* Description */}
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-4">À propos</h2>
                  <p className="text-foreground/70 leading-relaxed">{provider.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-4">Ce qui est inclus</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {provider.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Portfolio */}
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-4">Portfolio</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {provider.portfolio.map((image, index) => (
                      <div key={index} className="aspect-square relative rounded-xl overflow-hidden">
                        <Image
                          src={image}
                          alt={`Portfolio ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border">
                  <h3 className="font-serif text-xl text-foreground mb-6">Réserver ce prestataire</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-foreground/70">Prix indicatif</span>
                      <span className="font-medium text-foreground">{provider.price}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-foreground/70">Disponibilité</span>
                      <span className="font-medium text-primary">Disponible</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full h-14 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href={`/booking?provider=${providerId}&category=${category}`}>
                        Réserver maintenant
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full h-14 rounded-xl"
                      asChild
                    >
                      <Link href={`https://wa.me/221771234567?text=Bonjour, je suis intéressé(e) par les services de ${provider.name}`} target="_blank">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Contacter via WhatsApp
                      </Link>
                    </Button>
                  </div>

                  <p className="text-xs text-foreground/50 text-center mt-4">
                    Pas de frais tant que vous n&apos;avez pas confirmé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
