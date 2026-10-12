import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SanityImage from "@/components/SanityImage";
import StatsBand from "@/components/StatsBand";
import { fallbackEnvironment, fallbackPosts, fallbackProjects, services } from "@/data/fallback";
import { sanityFetch } from "@/sanity/lib/client";
import { environmentQuery, postsQuery, projectsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function HomePage() {
  const projects = await sanityFetch({ query: projectsQuery, fallback: fallbackProjects });
  const posts = await sanityFetch({ query: postsQuery, fallback: fallbackPosts });
  const environment = await sanityFetch({ query: environmentQuery, fallback: fallbackEnvironment });
  const [featured, ...moreProjects] = projects;
  const stats = [
    [environment?.completedSpaces ?? fallbackEnvironment.completedSpaces, "Completed spaces"],
    [environment?.designAwards ?? fallbackEnvironment.designAwards, "Design awards"],
    [environment?.trustedArtisans ?? fallbackEnvironment.trustedArtisans, "Trusted artisans"],
    [environment?.citiesServed ?? fallbackEnvironment.citiesServed, "Cities served"],
  ];

  return (
    <>
      <Header />
      <main>
        <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-ink pt-20 text-[#f7f0ac]">
          <SanityImage
            image={featured?.coverImage || "/assets/auren-hero.png"}
            alt={featured?.title || "Warm contemporary living room with sculptural furniture"}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,8,0.42),rgba(4,10,8,0.2)_45%,rgba(4,10,8,0.82)),radial-gradient(circle_at_50%_62%,rgba(247,240,172,0.16),transparent_38%)]" />
          <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-[1180px] place-items-center px-4 py-16 text-center sm:px-6 lg:px-0">
            <div className="soft-reveal">
              <p className="mb-8 font-mono text-[0.78rem] font-bold uppercase text-[#f7f0ac]">Residential interiors. Material stories. Rooms that breathe.</p>
              <h1 className="mx-auto max-w-[940px] font-serif text-[clamp(2.8rem,5.7vw,5.8rem)] leading-[0.95]">
                Interiors composed with warmth, restraint, <em className="font-serif italic">and feeling.</em>
              </h1>
              <p className="mx-auto mt-7 max-w-[620px] font-mono text-[0.98rem] leading-7 text-[#f7f0ac]/85">
                Alluring Spaces by Charlotte designs material-rich homes where architectural calm, sculptural furniture, and everyday comfort meet.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link className="button border-[#f7f0ac] bg-[#f7f0ac] text-ink hover:bg-paper" href="/projects">
                  View projects
                </Link>
                <Link className="button border-[#f7f0ac]/70 bg-transparent text-[#f7f0ac]" href="/about">
                  Meet the studio
                </Link>
              </div>
            </div>
            <div className="absolute bottom-8 left-4 right-4 grid gap-2 font-mono text-[0.68rem] uppercase text-[#f7f0ac]/75 sm:left-6 sm:right-6 sm:grid-cols-3 lg:left-10 lg:right-10">
              <span>Refined details</span>
              <span>Timeless style</span>
              <span>Subtle luxury</span>
            </div>
          </div>
        </section>

        <section className="section bg-paper text-ink">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <p className="font-serif text-[clamp(2.2rem,5vw,5rem)] leading-none">
              A room should soften your shoulders before you notice the furniture.
            </p>
            <div className="grid gap-8">
              <p className="max-w-[560px] font-mono text-base leading-7 text-[#4f392d]">
                We keep the process tactile and clear: mood, proportion, materials, then the finishing details that make a home feel settled.
              </p>
              <div className="grid border-y border-black/15 py-5 font-mono text-[0.72rem] uppercase text-[#6e4630] sm:grid-cols-3">
                {["Walnut", "Linen", "Stone"].map((material) => (
                  <span className="py-2" key={material}>{material}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <StatsBand stats={stats} />

        <section className="section bg-[#fffceb] text-ink">
          <SectionHeading eyebrow="Selected projects" title="Spaces shaped for modern living." href="/projects" link="All projects" />
          <div className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <ProjectFeature project={featured} />
            <div className="grid gap-6">
              {moreProjects.slice(0, 2).map((project) => (
                <ProjectRow project={project} key={project._id} />
              ))}
            </div>
          </div>
        </section>

        <section className="section grid gap-12 bg-[#98b7bd] text-[#260f08] lg:grid-cols-[0.95fr_0.75fr] lg:items-center">
          <div className="max-w-[760px] lg:ml-auto">
            <p className="eyebrow text-[#260f08]">About the designer</p>
            <h2 className="font-serif text-[clamp(2.5rem,5.2vw,5.4rem)] leading-[0.92] uppercase">A measured eye for homes that breathe.</h2>
            <p className="mt-6 max-w-[620px] font-mono text-base leading-7">
              Led by interior designer Charlotte Basil, Alluring Spaces by Charlotte balances proportion,
              texture, and light so each space feels personal without losing its calm.
            </p>
            <Link className="button mt-8 border-[#260f08] text-[#260f08]" href="/about">
              Read about Charlotte
            </Link>
          </div>
          <div className="grid gap-px border border-[#260f08]/20 bg-[#260f08]/20">
            {services.map(([title, text], index) => (
              <div className="bg-[#f4efe7] p-6 sm:p-8" key={title}>
                <span className="meta">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="my-3 font-serif text-[clamp(1.7rem,3vw,2.8rem)] uppercase leading-none">{title}</h3>
                <p className="mb-0 font-mono text-sm leading-6 text-[#4f392d]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section bg-[#2e1708] text-[#f7f0ac]">
          <SectionHeading eyebrow="Design journal" title="Notes on materials, mood, and making rooms last." href="/blog" link="Read journal" />
          <div className="mx-auto grid max-w-[1180px] gap-px border border-[#f7f0ac]/20 bg-[#f7f0ac]/20 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <article className="min-h-[300px] bg-[#2e1708] p-7 transition duration-300 hover:bg-[#381f11]" key={post._id}>
                <span className="font-mono text-[0.72rem] font-bold uppercase text-[#f7f0ac]/70">{post.category}</span>
                <h3 className="my-5 font-serif text-[clamp(1.7rem,2.6vw,3rem)] uppercase leading-none">{post.title}</h3>
                <p className="font-mono text-sm leading-6 text-[#f7f0ac]/75">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section bg-paper text-ink">
          <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-[#6e4630]">Contact</p>
              <h2 className="max-w-[900px] font-serif text-[clamp(2.5rem,5.2vw,5.4rem)] uppercase leading-[0.92]">
                Tell us about the space you want to transform.
              </h2>
            </div>
            <Link className="button border-ink bg-ink text-paper" href="/contact">
              Start an inquiry
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProjectFeature({ project }) {
  if (!project) return null;

  return (
    <Link className="group grid gap-5" href={`/projects/${project.slug}`}>
      <span className="image-panel block">
        <SanityImage image={project.coverImage} alt={project.title} className="aspect-[1.08] w-full object-cover transition duration-700 group-hover:scale-[1.035]" sizes="(min-width: 1024px) 58vw, 100vw" />
      </span>
      <div className="grid gap-4 border-t border-black/15 pt-5 sm:grid-cols-[1fr_auto]">
        <div>
          <span className="meta">{project.category} / {project.year}</span>
          <h3 className="mt-2 font-serif text-[clamp(2rem,4vw,4rem)] uppercase leading-none">{project.title}</h3>
        </div>
        <p className="max-w-[420px] font-mono text-sm leading-6 text-[#4f392d]">{project.summary}</p>
      </div>
    </Link>
  );
}

function ProjectRow({ project }) {
  return (
    <Link className="group grid gap-4 border-t border-black/15 pt-5 sm:grid-cols-[0.95fr_1fr]" href={`/projects/${project.slug}`}>
      <span className="image-panel block">
        <SanityImage image={project.coverImage} alt={project.title} className="aspect-[1.2] w-full object-cover transition duration-700 group-hover:scale-[1.04]" sizes="(min-width: 1024px) 30vw, 100vw" />
      </span>
      <div className="self-end">
        <span className="meta">{project.category}</span>
        <h3 className="mt-2 font-serif text-[clamp(1.7rem,3vw,2.8rem)] uppercase leading-none">{project.title}</h3>
        <p className="mt-4 line-clamp-3 font-mono text-sm leading-6 text-[#4f392d]">{project.summary}</p>
      </div>
    </Link>
  );
}

function SectionHeading({ eyebrow, title, href, link }) {
  return (
    <div className="mx-auto mb-10 grid max-w-[1180px] items-end gap-7 border-t border-current/15 pt-5 sm:grid-cols-[minmax(0,1fr)_auto]">
      <p className="eyebrow mb-[-12px] sm:col-span-2">{eyebrow}</p>
      <h2 className="max-w-[900px] font-serif text-[clamp(2.5rem,5.2vw,5.4rem)] uppercase leading-[0.92]">{title}</h2>
      <Link className="font-mono text-[0.78rem] font-bold uppercase underline underline-offset-4 transition hover:text-clay" href={href}>
        {link}
      </Link>
    </div>
  );
}
