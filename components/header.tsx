"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isLoggedIn, logout } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
              S3 Events
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/booking" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Réserver
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Mon Espace
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" className="text-sm font-medium" asChild>
                  <Link href="/dashboard">
                    <User className="w-4 h-4 mr-2" />
                    Mon Espace
                  </Link>
                </Button>
                <Button variant="ghost" className="text-sm font-medium" onClick={logout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Deconnexion
                </Button>
              </>
            ) : (
              <Button variant="ghost" className="text-sm font-medium" asChild>
                <Link href="/connexion">Connexion</Link>
              </Button>
            )}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6" asChild>
              <Link href="/booking">Organiser mon evenement</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link href="/" className="text-base font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </Link>
            <Link href="/services" className="text-base font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/booking" className="text-base font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Réserver
            </Link>
            <Link href="/dashboard" className="text-base font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Mon Espace
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/connexion" onClick={() => setIsMenuOpen(false)}>Connexion</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/connexion?mode=inscription" onClick={() => setIsMenuOpen(false)}>Inscription</Link>
              </Button>
              <Button className="w-full bg-primary text-primary-foreground" asChild>
                <Link href="/booking" onClick={() => setIsMenuOpen(false)}>Organiser mon evenement</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
