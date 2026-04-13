import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Camera, Scissors, Palette, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    title: "Couture",
    description: "Robes sur mesure et tenues traditionnelles élégantes",
    image: "/images/service-couture.jpg",
    icon: Scissors,
  },
  {
    title: "Photographe",
    description: "Capturer chaque moment précieux de votre journée",
    image: "/images/service-photo.jpg",
    icon: Camera,
  },
  {
    title: "Maquillage",
    description: "Sublimez votre beauté naturelle",
    image: "/images/service-makeup.jpg",
    icon: Sparkles,
  },
  {
    title: "Décoration",
    description: "Créer l&apos;ambiance parfaite pour votre événement",
    image: "/images/service-decor.jpg",
    icon: Palette,
  },
  {
    title: "Traiteur",
    description: "Saveurs exquises pour ravir vos invités",
    image: "/images/service-traiteur.jpg",
    icon: UtensilsCrossed,
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-wedding.jpg"
            alt="Elegant wedding celebration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-32">
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/70 mb-6">
            Bienvenue chez S3 Events
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-light text-foreground leading-tight text-balance">
            On s&apos;occupe
            <br />
            <span className="italic">de tout</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Organisez votre mariage, baptême ou événement spécial au Sénégal sans bouger. 
            Nous réunissons les meilleurs prestataires pour vous.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base">
              <Link href="/booking">
                Organiser mon événement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base border-foreground/20">
              <Link href="/services">
                Découvrir les services
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-foreground/50 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Nos Services</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground text-balance">
              Tout ce dont vous avez besoin
            </h2>
            <p className="mt-6 text-foreground/60 max-w-xl mx-auto">
              Des prestataires de confiance sélectionnés avec soin pour créer l&apos;événement de vos rêves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={`/services/${service.title.toLowerCase()}`}
                className={`group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-xl transition-all duration-500 ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-background" />
                    </div>
                    <h3 className="font-serif text-2xl text-background">{service.title}</h3>
                  </div>
                  <p className="text-background/80 text-sm">{service.description}</p>
                  <div className="mt-4 flex items-center text-background text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Découvrir</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/services">
                Voir tous les services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Comment ça marche</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground text-balance">
              Simple et rapide
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Choisissez vos services",
                description: "Parcourez nos prestataires et sélectionnez ceux qui correspondent à votre vision.",
              },
              {
                step: "02",
                title: "Réservez en ligne",
                description: "Confirmez vos choix et recevez un devis personnalisé rapidement.",
              },
              {
                step: "03",
                title: "Profitez de votre jour",
                description: "Nous coordonnons tout avec les prestataires. Vous, profitez !",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl text-primary">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance">
            Prête à créer l&apos;événement de vos rêves ?
          </h2>
          <p className="mt-6 text-background/70 text-lg max-w-2xl mx-auto">
            Commencez dès maintenant et découvrez comment S3 Events peut transformer votre vision en réalité.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 h-14">
              <Link href="/booking">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 border-background/30 text-background hover:bg-background/10">
              <Link href="https://wa.me/221771234567" target="_blank">
                Nous contacter via WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
