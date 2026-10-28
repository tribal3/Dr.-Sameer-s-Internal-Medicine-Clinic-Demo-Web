import { ArrowUpRight, MapPin, Navigation, Phone } from 'lucide-react'
import { clinic } from '../content/site'
import { useLanguage } from '../language/useLanguage'
import { Container } from './ui/Container'
import { LanguageToggle } from './ui/LanguageToggle'
import { Logo } from './ui/Logo'

export function Footer() {
  const { t, lang } = useLanguage()

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#specialty', label: t.nav.specialty },
    { href: '#services', label: t.nav.services },
    { href: '#about', label: t.nav.about },
    { href: '#patients', label: t.nav.patients },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="relative overflow-hidden bg-midnight-deep text-ivory/70">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(199,168,121,0.5),transparent)]"
      />

      <Container className="pt-14 pb-8 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.7fr_0.9fr_1.1fr] lg:gap-12">
          <div>
            <Logo tone="light" href="#home" />
            <p className="mt-5 max-w-[32ch] text-[12px] leading-[1.85] text-ivory/65">
              {t.footer.blurb}
            </p>
            <p
              lang={lang === 'ar' ? 'en' : 'ar'}
              dir={lang === 'ar' ? 'ltr' : 'rtl'}
              className={
                lang === 'ar'
                  ? 'mt-4 font-sans text-[13px] text-mint/85'
                  : 'mt-4 font-arabic text-[15px] text-mint/90'
              }
            >
              {lang === 'ar' ? clinic.nameEn : clinic.nameAr}
            </p>

            <div className="mt-6">
              <p className="micro-label text-ivory/60">
                {t.footer.languageTitle}
              </p>
              <LanguageToggle tone="dark" className="mt-2.5" />
            </div>
          </div>

          <nav aria-label={t.footer.exploreTitle}>
            <h2 className="micro-label text-sand">
              {t.footer.exploreTitle}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[12px] text-ivory/60 transition-colors duration-300 hover:text-mint"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.servicesTitle}>
            <h2 className="micro-label text-sand">
              {t.footer.servicesTitle}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {t.servicesList.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-[12px] leading-snug text-ivory/60 transition-colors duration-300 hover:text-mint"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="micro-label text-sand">
              {t.footer.contactTitle}
            </h2>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sand/80"
                />
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] leading-relaxed text-ivory/60 transition-colors hover:text-mint"
                >
                  {t.contact.locationValue}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 text-sand/80"
                />
                <a
                  href={clinic.phoneHref}
                  dir="ltr"
                  className="text-[12px] text-ivory/60 transition-colors hover:text-mint"
                >
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Navigation
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 text-sand/80"
                />
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[12px] text-ivory/60 transition-colors hover:text-mint"
                >
                  {t.actions.directions}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3 w-3 rtl:-scale-x-100"
                  />
                </a>
              </li>
            </ul>

            <p className="mt-5 max-w-[34ch] text-[10.5px] leading-relaxed text-ivory/55">
              {t.footer.medicalNote}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[10.5px] text-ivory/65">{t.footer.copyright}</p>

          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-sand/25 bg-white/[0.03] px-3 py-1.5 text-[10px] leading-relaxed text-sand/90">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sand" />
            {t.footer.disclaimer}
          </p>

          <p className="text-[10px] text-ivory/60" lang={lang}>
            {t.footer.credit}
          </p>
        </div>
      </Container>
    </footer>
  )
}
