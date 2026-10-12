import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { fallbackEnvironment } from "@/data/fallback";
import { sanityFetch } from "@/sanity/lib/client";
import { environmentQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function ContactPage() {
  const environment = await sanityFetch({ query: environmentQuery, fallback: fallbackEnvironment });

  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Contact" title="Tell us about the space you want to transform.">
          <p>Share a few details and the studio will follow up with availability, scope, and the next steps for a consultation.</p>
        </PageHero>
        <section className="section bg-paper pt-0 text-ink">
          <div className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-[0.85fr_0.75fr]">
            <div className="min-h-[280px] border-t border-black/15 bg-[#fffceb] p-7">
              <span className="meta">Availability</span>
              <h2 className="my-4 font-serif text-[clamp(2rem,4vw,4rem)] uppercase leading-none">A few thoughtful projects, carefully held.</h2>
              <p className="font-mono text-base leading-7 text-[#4f392d]">
                Charlotte takes on a limited number of interior design, styling, and full-home projects each quarter.
              </p>
              <div className="mt-8 grid gap-3 font-mono text-sm font-bold text-ink">
                <a className="transition hover:text-clay" href="mailto:alluringspacesbycharlotte@gmail.com">
                  alluringspacesbycharlotte@gmail.com
                </a>
                <a className="transition hover:text-clay" href="tel:+2349071927268">
                  +234 907 192 7268
                </a>
              </div>
            </div>
            <ContactForm whatsappNumber={environment?.whatsappNumber || fallbackEnvironment.whatsappNumber} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
