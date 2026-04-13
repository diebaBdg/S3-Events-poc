"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ConnexionPage() {
  const searchParams = useSearchParams()
  const [isLogin, setIsLogin] = useState(true)
  
  useEffect(() => {
    if (searchParams.get("mode") === "inscription") {
      setIsLogin(false)
    }
  }, [searchParams])
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-muted">
      <Header />

      <div className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center py-12">
        <div className="mx-auto max-w-md w-full px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl text-foreground mb-2">
                  {isLogin ? "Connexion reussie !" : "Compte cree !"}
                </h2>
                <p className="text-foreground/60 mb-6">
                  {isLogin
                    ? "Vous allez etre redirige vers votre tableau de bord."
                    : "Bienvenue sur S3 Events ! Vous pouvez maintenant reserver vos prestataires."}
                </p>
                <Button asChild className="rounded-xl">
                  <Link href="/dashboard">Acceder au tableau de bord</Link>
                </Button>
              </div>
            ) : (
              <>
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl text-foreground">
                {isLogin ? "Connexion" : "Inscription"}
              </h1>
              <p className="text-foreground/60 mt-2">
                {isLogin
                  ? "Connectez-vous a votre compte S3 Events"
                  : "Creez votre compte pour commencer"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="+221 77 123 45 67"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 pr-12"
                    placeholder="Votre mot de passe"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Confirmer votre mot de passe"
                    required
                  />
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <Link href="#" className="text-sm text-primary hover:underline">
                    Mot de passe oublie ?
                  </Link>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-14 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isLogin ? "Se connecter" : "Creer mon compte"}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-foreground/60">
                {isLogin ? "Pas encore de compte ?" : "Deja un compte ?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-primary font-medium hover:underline"
                >
                  {isLogin ? "S'inscrire" : "Se connecter"}
                </button>
              </p>
            </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
