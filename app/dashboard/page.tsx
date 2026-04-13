"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, CheckCircle2, Circle, MessageCircle, ArrowRight, Crown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Sample order data - in production this would come from a database
const orders = [
  {
    id: "ORD-2024-001",
    eventType: "Mariage",
    eventDate: "2024-06-15",
    status: "in-progress",
    statusLabel: "En préparation",
    concierge: true,
    services: [
      { name: "Couture", provider: "Fatou Diallo", status: "completed", image: "/images/provider-3.jpg" },
      { name: "Photographe", provider: "Aminata Sow", status: "in-progress", image: "/images/provider-1.jpg" },
      { name: "Maquillage", provider: "Khady Mbaye", status: "pending", image: "/images/provider-2.jpg" },
      { name: "Décoration", provider: "En attente", status: "pending", image: "/images/service-decor.jpg" },
      { name: "Traiteur", provider: "Mariama Ba", status: "pending", image: "/images/provider-5.jpg" },
    ],
    createdAt: "2024-03-01",
  },
]

const statusColors = {
  completed: "text-green-600 bg-green-50",
  "in-progress": "text-primary bg-primary/10",
  pending: "text-foreground/50 bg-muted",
}

const statusIcons = {
  completed: CheckCircle2,
  "in-progress": Clock,
  pending: Circle,
}

export default function DashboardPage() {
  const order = orders[0]

  return (
    <main className="min-h-screen bg-muted">
      <Header />

      <div className="pt-20 lg:pt-24 pb-16 lg:pb-24">
        {/* Header */}
        <div className="bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <p className="text-sm text-primary font-medium mb-1">Bienvenue</p>
                <h1 className="font-serif text-3xl lg:text-4xl text-foreground">Mon Espace</h1>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                <Link href="/booking">
                  Organiser un nouvel événement
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Order Card */}
          <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
            {/* Order Header */}
            <div className="p-6 lg:p-8 border-b border-border">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-serif text-2xl text-foreground">{order.eventType}</h2>
                      {order.concierge && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                          <Crown className="w-3 h-3" />
                          Concierge
                        </span>
                      )}
                    </div>
                    <p className="text-foreground/60 text-sm">
                      {new Date(order.eventDate).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${statusColors[order.status as keyof typeof statusColors]}`}>
                    {order.statusLabel}
                  </span>
                  <span className="text-foreground/40 text-sm">#{order.id}</span>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="p-6 lg:p-8 bg-muted/50">
              <h3 className="text-sm uppercase tracking-wider text-foreground/50 mb-6">Progression</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground/70">
                  {order.services.filter(s => s.status === "completed").length} / {order.services.length} services confirmés
                </span>
                <span className="text-sm font-medium text-primary">
                  {Math.round((order.services.filter(s => s.status === "completed").length / order.services.length) * 100)}%
                </span>
              </div>
              <div className="h-3 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{
                    width: `${(order.services.filter(s => s.status === "completed").length / order.services.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Services List */}
            <div className="p-6 lg:p-8">
              <h3 className="text-sm uppercase tracking-wider text-foreground/50 mb-6">Services sélectionnés</h3>
              <div className="space-y-4">
                {order.services.map((service, index) => {
                  const StatusIcon = statusIcons[service.status as keyof typeof statusIcons]
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border"
                    >
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground">{service.name}</h4>
                        <p className="text-sm text-foreground/60">{service.provider}</p>
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${statusColors[service.status as keyof typeof statusColors]}`}>
                        <StatusIcon className="w-4 h-4" />
                        <span className="hidden sm:inline">
                          {service.status === "completed" && "Confirmé"}
                          {service.status === "in-progress" && "En cours"}
                          {service.status === "pending" && "En attente"}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Section */}
            <div className="p-6 lg:p-8 bg-foreground text-background">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-xl mb-2">Besoin d&apos;aide ?</h3>
                  <p className="text-background/70 text-sm">
                    Notre équipe est disponible pour répondre à toutes vos questions.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    className="bg-transparent border-background/30 text-background hover:bg-background/10 rounded-full"
                    asChild
                  >
                    <Link href="https://wa.me/221771234567" target="_blank">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </Link>
                  </Button>
                  <Button
                    className="bg-background text-foreground hover:bg-background/90 rounded-full"
                    asChild
                  >
                    <Link href="tel:+221771234567">
                      <Phone className="w-5 h-5 mr-2" />
                      Appeler
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Empty State for New Users */}
          {orders.length === 0 && (
            <div className="bg-card rounded-2xl p-12 lg:p-16 text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-foreground/30" />
              </div>
              <h2 className="font-serif text-2xl text-foreground mb-3">
                Aucun événement en cours
              </h2>
              <p className="text-foreground/60 max-w-md mx-auto mb-8">
                Commencez à planifier votre prochain événement et laissez-nous vous accompagner.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14">
                <Link href="/booking">
                  Organiser mon événement
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
