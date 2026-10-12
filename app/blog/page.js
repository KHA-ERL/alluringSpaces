import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { fallbackPosts } from "@/data/fallback";
import { sanityFetch } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await sanityFetch({ query: postsQuery, fallback: fallbackPosts });

  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Blog" title="Design notes for calmer, richer rooms.">
          <p>Short essays on materials, lighting, proportion, and the small details that make interiors feel resolved.</p>
        </PageHero>
        <section className="section bg-paper pt-0 text-ink">
          <div className="mx-auto grid max-w-[1180px] gap-px border border-black/15 bg-black/15 md:grid-cols-3">
            {posts.map((post) => (
              <article className="min-h-[300px] bg-[#fffceb] p-7 transition duration-300 hover:bg-[#f7f0ac]" key={post._id}>
                <span className="meta">{post.category}</span>
                <h2 className="my-5 font-serif text-[clamp(1.8rem,3vw,3rem)] uppercase leading-none">{post.title}</h2>
                <p className="font-mono text-sm leading-6 text-[#4f392d]">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
