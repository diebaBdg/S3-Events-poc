"use client"

import { useState } from "react"
import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Calendar, Users, Wallet, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const eventTypes = [
  { id: "mariage", label: "Mariage", icon: "💍" },
  { id: "bapteme", label: "Baptême", icon: "👶" },
  { id: "anniversaire", label: "Anniversaire", icon: "🎂" },
  { id: "soiree", label: "Soirée", icon: "🎉" },
  { id: "autre", label: "Autre", icon: "✨" },
]

const budgetRanges = [
  { id: "small", label: "Moins de 1M FCFA", value: "< 1 000 000" },
  { id: "medium", label: "1M - 3M FCFA", value: "1 000 000 - 3 000 000" },
  { id: "large", label: "3M - 5M FCFA", value: "3 000 000 - 5 000 000" },
  { id: "premium", label: "Plus de 5M FCFA", value: "> 5 000 000" },
]

const services = [
  { id: "couture", label: "Couture", description: "Robes et tenues sur mesure" },
  { id: "photographe", label: "Photographe", description: "Photos et vidéos" },
  { id: "maquillage", label: "Maquillage", description: "Beauté et coiffure" },
  { id: "decoration", label: "Décoration", description: "Aménagement du lieu" },
  { id: "traiteur", label: "Traiteur", description: "Repas et boissons" },
]

function BookingForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    selectedServices: [] as string[],
    name: "",
    phone: "",
    email: "",
    notes: "",
  })

  const totalSteps = 4

  const updateFormData = (field: string, value: string | string[] | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter((s) => s !== serviceId)
        : [...prev.selectedServices, serviceId],
    }))
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.eventType !== ""
      case 2:
        return formData.budget !== ""
      case 3:
        return formData.selectedServices.length > 0
      case 4:
        return formData.name !== "" && formData.phone !== ""
      default:
        return false
    }
  }

  const handleSubmit = () => {
    // In production, this would submit to an API
    alert("Merci ! Votre demande a été envoyée. Nous vous contacterons bientôt.")
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Progress Bar */}
      <div className="bg-muted border-b border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Link>
            <span className="text-sm text-foreground/60">
              Étape {step} sur {totalSteps}
            </span>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Step 1: Event Type */}
        {step === 1 && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="font-serif text-3xl lg:text-4xl text-foreground">
                Quel type d&apos;événement organisez-vous ?
              </h1>
              <p className="mt-3 text-foreground/60">
                Sélectionnez le type d&apos;événement pour des recommandations personnalisées.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {eventTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => updateFormData("eventType", type.id)}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${
                    formData.eventType === type.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="text-3xl mb-3 block">{type.icon}</span>
                  <span className="font-medium text-foreground text-lg">{type.label}</span>
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Date de l&apos;événement
                </label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => updateFormData("eventDate", e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Nombre d&apos;invités
                </label>
                <input
                  type="number"
                  placeholder="Ex: 150"
                  value={formData.guestCount}
                  onChange={(e) => updateFormData("guestCount", e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Budget */}
        {step === 2 && (
          <div className="space-y-8">
            <div className="text-center">
              <Wallet className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="font-serif text-3xl lg:text-4xl text-foreground">
                Quel est votre budget ?
              </h1>
              <p className="mt-3 text-foreground/60">
                Cela nous aide à vous proposer les meilleures options.
              </p>
            </div>

            <div className="space-y-3">
              {budgetRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => updateFormData("budget", range.id)}
                  className={`w-full p-5 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${
                    formData.budget === range.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="font-medium text-foreground">{range.label}</span>
                  {formData.budget === range.id && (
                    <Check className="w-5 h-5 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Services */}
        {step === 3 && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="font-serif text-3xl lg:text-4xl text-foreground">
                De quels services avez-vous besoin ?
              </h1>
              <p className="mt-3 text-foreground/60">
                Sélectionnez les services ou optez pour notre service concierge.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    formData.selectedServices.includes(service.id)
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-foreground block">{service.label}</span>
                      <span className="text-foreground/50 text-sm">{service.description}</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      formData.selectedServices.includes(service.id) ? "border-primary bg-primary" : "border-border"
                    }`}>
                      {formData.selectedServices.includes(service.id) && (
                        <Check className="w-4 h-4 text-primary-foreground" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Contact Info */}
        {step === 4 && (
          <div className="space-y-8">
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="font-serif text-3xl lg:text-4xl text-foreground">
                Presque terminé !
              </h1>
              <p className="mt-3 text-foreground/60">
                Laissez-nous vos coordonnées pour finaliser votre demande.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Téléphone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  placeholder="+221 77 123 45 67"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Notes supplémentaires
                </label>
                <textarea
                  placeholder="Décrivez votre vision ou ajoutez des détails..."
                  value={formData.notes}
                  onChange={(e) => updateFormData("notes", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-muted rounded-2xl p-6">
              <h3 className="font-medium text-foreground mb-4">Récapitulatif</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/60">Type d&apos;événement</span>
                  <span className="text-foreground">{eventTypes.find(e => e.id === formData.eventType)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Budget</span>
                  <span className="text-foreground">{budgetRanges.find(b => b.id === formData.budget)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Services</span>
                  <span className="text-foreground">
                    {formData.selectedServices.map(s => services.find(sv => sv.id === s)?.label).join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
          <Button
            variant="ghost"
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className="text-foreground/60"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          {step < totalSteps ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12"
            >
              Continuer
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12"
            >
              Envoyer ma demande
              <Check className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense fallback={<div className="min-h-screen pt-20 flex items-center justify-center">Chargement...</div>}>
        <BookingForm />
      </Suspense>
      <Footer />
    </main>
  )
}
