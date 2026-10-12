import Studio from "@/components/Studio";
import { isSanityConfigured } from "@/sanity/env";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="grid min-h-screen place-items-center bg-ink p-6 text-cream">
        <div className="max-w-xl rounded-lg border border-white/10 bg-white/5 p-8">
          <p className="eyebrow">Sanity Studio</p>
          <h1 className="font-serif text-4xl">Connect your Sanity project to enable editing.</h1>
          <p className="mt-4 leading-7 text-cream/70">
            Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`
            to `.env.local`, then restart the dev server. The studio will appear
            here at `/studio`.
          </p>
        </div>
      </main>
    );
  }

  return <Studio />;
}
