import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Scissors, Camera, Sparkles, Palette, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const serviceCategories = [
  {
    id: "couture",
    title: "Couture",
    description: "Robes sur mesure, tenues traditionnelles et modernes pour sublimer votre journée spéciale.",
    icon: Scissors,
    image: "/images/service-couture.jpg",
    providers: [
      { id: 1, name: "Fatou Diallo", specialty: "Robes de mariée", rating: 4.9, reviews: 127, image: "/images/provider-3.jpg", price: "À partir de 250 000 FCFA" },
      { id: 2, name: "Aïda Ndiaye", specialty: "Tenues traditionnelles", rating: 4.8, reviews: 89, image: "/images/provider-2.jpg", price: "À partir de 150 000 FCFA" },
    ],
  },
  {
    id: "photographe",
    title: "Photographes",
    description: "Immortalisez chaque moment précieux avec nos photographes professionnels.",
    icon: Camera,
    image: "/images/service-photo.jpg",
    providers: [
      { id: 3, name: "Aminata Sow", specialty: "Mariage & Portrait", rating: 5.0, reviews: 156, image: "/images/provider-1.jpg", price: "À partir de 200 000 FCFA" },
      { id: 4, name: "Moussa Fall", specialty: "Vidéo & Photo", rating: 4.9, reviews: 98, image: "/images/provider-6.jpg", price: "À partir de 300 000 FCFA" },
    ],
  },
  {
    id: "maquillage",
    title: "Maquillage",
    description: "Des maquilleuses professionnelles pour sublimer votre beauté naturelle.",
    icon: Sparkles,
    image: "/images/service-makeup.jpg",
    providers: [
      { id: 5, name: "Khady Mbaye", specialty: "Maquillage mariée", rating: 4.9, reviews: 134, image: "/images/provider-2.jpg", price: "À partir de 75 000 FCFA" },
    ],
  },
  {
    id: "decoration",
    title: "Décoration",
    description: "Créez l'ambiance parfaite avec nos décorateurs événementiels experts.",
    icon: Palette,
    image: "/images/service-decor.jpg",
    providers: [
      { id: 6, name: "Ibrahima Diop", specialty: "Décoration mariage", rating: 4.8, reviews: 76, image: "/images/provider-4.jpg", price: "À partir de 500 000 FCFA" },
    ],
  },
  {
    id: "traiteur",
    title: "Traiteur",
    description: "Des saveurs exquises pour ravir vos invités lors de votre événement.",
    icon: UtensilsCrossed,
    image: "/images/service-traiteur.jpg",
    providers: [
      { id: 7, name: "Mariama Ba", specialty: "Cuisine sénégalaise & internationale", rating: 4.9, reviews: 112, image: "/images/provider-5.jpg", price: "À partir de 15 000 FCFA/personne" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Nos Services</p>
            <h1 className="font-serif text-4xl lg:text-6xl font-light text-foreground leading-tight text-balance">
              Des prestataires d&apos;exception pour votre événement
            </h1>
            <p className="mt-6 text-lg text-foreground/60 leading-relaxed">
              Découvrez notre sélection de professionnels triés sur le volet pour créer l&apos;événement de vos rêves.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-16 lg:py-24 ${categoryIndex % 2 === 0 ? "bg-muted" : "bg-background"}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Category Info */}
              <div className={`${categoryIndex % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="sticky top-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-serif text-3xl lg:text-4xl text-foreground">{category.title}</h2>
                  </div>
                  <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                    {category.description}
                  </p>
                  <div className="aspect-[16/10] relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Providers Grid */}
              <div className={`space-y-6 ${categoryIndex % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-sm uppercase tracking-[0.15em] text-foreground/50 mb-6">
                  Nos prestataires
                </h3>
                {category.providers.map((provider) => (
                  <Link
                    key={provider.id}
                    href={`/services/${category.id}/${provider.id}`}
                    className="group block bg-card rounded-2xl p-4 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex gap-4 lg:gap-6">
                      <div className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={provider.image}
                          alt={provider.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-serif text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors">
                              {provider.name}
                            </h4>
                            <p className="text-foreground/60 text-sm mt-1">{provider.specialty}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            <span className="font-medium text-foreground">{provider.rating}</span>
                          </div>
                          <span className="text-foreground/40 text-sm">({provider.reviews} avis)</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-sm text-primary font-medium">{provider.price}</p>
                          <span className="text-sm text-foreground/50 group-hover:text-primary transition-colors flex items-center gap-1">
                            Voir profil
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <Button
                  variant="outline"
                  className="w-full rounded-xl h-14 text-foreground/70 hover:text-foreground border-dashed"
                  asChild
                >
                  <Link href={`/services/${category.id}`}>
                    Voir tous les {category.title.toLowerCase()}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance">
            Vous ne savez pas par ou commencer ?
          </h2>
          <p className="mt-6 text-background/70 text-lg max-w-2xl mx-auto">
            Laissez notre equipe s&apos;occuper de tout. Nous selectionnons les meilleurs prestataires pour vous.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 h-14">
              <Link href="/booking">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
