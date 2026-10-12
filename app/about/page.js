import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { services } from "@/data/fallback";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="About" title="A studio for rooms with memory, material, and restraint." tone="light">
          <p>Alluring Spaces by Charlotte is led by Charlotte Basil, an interior designer focused on warm contemporary homes, quiet luxury, and the emotional rhythm of daily life.</p>
        </PageHero>
        <section className="section grid gap-10 bg-paper pt-0 text-ink lg:grid-cols-[0.85fr_1fr]">
          <div className="bg-[#2e1708] p-8 text-[#f7f0ac] sm:p-10">
            <p className="eyebrow text-[#f7f0ac]/75">Approach</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,4.5rem)] uppercase leading-none">Designed slowly enough to feel inevitable.</h2>
          </div>
          <div className="grid gap-px border border-black/15 bg-black/15">
            {services.map(([title, text], index) => (
              <article className="bg-[#fffceb] p-6 sm:p-8" key={title}>
                <span className="meta">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="my-3 font-serif text-[clamp(1.7rem,3vw,2.8rem)] uppercase leading-none">{title}</h3>
                <p className="font-mono text-sm leading-6 text-[#4f392d]">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
