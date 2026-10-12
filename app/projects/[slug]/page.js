import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SanityImage from "@/components/SanityImage";
import { fallbackProjects } from "@/data/fallback";
import { sanityFetch } from "@/sanity/lib/client";
import { projectBySlugQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export async function generateStaticParams() {
  return fallbackProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const fallback = fallbackProjects.find((project) => project.slug === slug);
  const project = await sanityFetch({
    query: projectBySlugQuery,
    params: { slug },
    fallback,
  });

  if (!project) notFound();

  const gallery = project.gallery?.length ? project.gallery : [project.coverImage];

  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="section pb-10">
          <div className="mx-auto max-w-[1180px]">
            <BackButton />
            <p className="eyebrow">{project.category} / {project.location} / {project.year}</p>
            <h1 className="max-w-[980px] font-serif text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.9]">{project.title}</h1>
            <p className="mt-6 max-w-[700px] font-mono text-base leading-7 text-[#4f392d]">{project.summary}</p>
          </div>
        </section>
        <section className="px-4 pb-20 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1180px]">
            <div className="image-panel">
              <SanityImage image={project.coverImage} alt={project.title} className="aspect-[1.55] w-full object-cover" priority />
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {gallery.map((image, index) => (
                <div className="image-panel" key={image._key || image}>
                  <SanityImage image={image} alt={`${project.title} gallery ${index + 1}`} className="aspect-[1.2] w-full object-cover" />
                </div>
              ))}
            </div>
            {project.externalVideoUrl && (
              <Link className="button mt-8 border-ink bg-ink text-paper" href={project.externalVideoUrl} target="_blank" rel="noreferrer">
                Watch full project
              </Link>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
