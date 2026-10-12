import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import SanityImage from "@/components/SanityImage";
import { fallbackProjects } from "@/data/fallback";
import { sanityFetch } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await sanityFetch({ query: projectsQuery, fallback: fallbackProjects });

  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Projects" title="A portfolio of warm, material-rich rooms.">
          <p>Each project is edited around atmosphere, proportion, tactile finishes, and how the room will actually be lived in.</p>
        </PageHero>
        <section className="section bg-paper pt-0 text-ink">
          <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Link className="group grid gap-5 border-t border-black/15 pt-5" href={`/projects/${project.slug}`} key={project._id}>
                <span className="image-panel block">
                  <SanityImage image={project.coverImage} alt={project.title} className="aspect-[1.18] w-full object-cover transition duration-700 group-hover:scale-[1.035]" sizes="(min-width: 768px) 50vw, 100vw" />
                </span>
                <div>
                  <span className="meta">{project.category} / {project.year}</span>
                  <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,4rem)] uppercase leading-none">{project.title}</h2>
                  <p className="mt-4 max-w-[520px] font-mono text-sm leading-6 text-[#4f392d]">{project.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
