import { ExternalLink, MapPin } from 'lucide-react'
import { clinic } from '../content/site'
import { useLanguage } from '../language/useLanguage'
import { Container } from './ui/Container'
import { Stars } from './ui/Stars'

export function TrustStrip() {
  const { t } = useLanguage()
  const rating = Number(clinic.googleRating)

  return (
    <section
      aria-labelledby="trust-heading"
      className="border-y border-line bg-white"
    >
      <Container className="py-7 sm:py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <div>
              <p id="trust-heading" className="eyebrow text-ink-soft">
                {t.trust.eyebrow}
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <Stars value={rating} />
                <p className="text-[12.5px] text-ink-soft">
                  <span className="font-display text-[19px] leading-none text-midnight">
                    {clinic.googleRating}
                  </span>{' '}
                  {t.trust.outOf}
                  <span aria-hidden="true" className="mx-2 text-line">
                    |
                  </span>
                  {clinic.googleReviewCount} {t.trust.reviewsLabel}
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-10 w-px bg-line sm:block"
            />

            <p className="flex items-start gap-2 text-[11.5px] leading-relaxed text-ink-soft">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal"
              />
              {t.contact.locationValue}
            </p>
          </div>

          <div className="flex flex-col gap-1.5 lg:items-end lg:text-end">
            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-teal underline-offset-4 transition-colors hover:text-midnight hover:underline"
            >
              {t.trust.cta}
              <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
            <p className="max-w-[420px] text-[10.5px] leading-relaxed text-ink-soft">
              {t.trust.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
