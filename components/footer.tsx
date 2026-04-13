import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="block">
              <span className="font-serif text-3xl font-semibold text-background">S3 Events</span>
            </Link>
            <p className="mt-4 text-background/70 text-sm leading-relaxed">
              On s&apos;occupe de tout pour rendre votre événement inoubliable.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">Couture</Link></li>
              <li><Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">Photographe</Link></li>
              <li><Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">Maquillage</Link></li>
              <li><Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">Décoration</Link></li>
              <li><Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">Traiteur</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">Événements</h4>
            <ul className="space-y-3">
              <li><Link href="/booking" className="text-background/70 hover:text-background transition-colors text-sm">Mariage</Link></li>
              <li><Link href="/booking" className="text-background/70 hover:text-background transition-colors text-sm">Baptême</Link></li>
              <li><Link href="/booking" className="text-background/70 hover:text-background transition-colors text-sm">Anniversaire</Link></li>
              <li><Link href="/booking" className="text-background/70 hover:text-background transition-colors text-sm">Événement Corporate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-background/70 text-sm">Dakar, Sénégal</li>
              <li className="text-background/70 text-sm">+221 77 123 45 67</li>
              <li><a href="mailto:contact@s3events.sn" className="text-background/70 hover:text-background transition-colors text-sm">contact@s3events.sn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 S3 Events. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-background/50 hover:text-background transition-colors text-sm">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-background/50 hover:text-background transition-colors text-sm">
              Conditions générales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
