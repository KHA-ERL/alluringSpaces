import BackButton from "./BackButton";

export default function PageHero({ eyebrow, title, children, tone = "dark" }) {
  const dark = tone === "dark";
  const moodWords = dark ? ["Atmosphere", "Texture", "Memory"] : ["Human", "Tactile", "Lived-in"];

  return (
    <section className={`px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-10 lg:pb-20 lg:pt-40 ${dark ? "bg-[#2e1708] text-[#f7f0ac]" : "bg-paper text-ink"}`}>
      <div className="mx-auto max-w-[1180px]">
        <BackButton />
        <p className={`eyebrow ${dark ? "text-[#f7f0ac]/75" : "text-[#6e4630]"}`}>{eyebrow}</p>
        <h1 className="max-w-[980px] font-serif text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.9]">{title}</h1>
        {children && <div className={`mt-6 max-w-[700px] font-mono text-base leading-7 ${dark ? "text-[#f7f0ac]/75" : "text-[#4f392d]"}`}>{children}</div>}
        <div className={`mt-8 flex flex-wrap gap-4 font-mono text-[0.68rem] font-bold uppercase ${dark ? "text-[#f7f0ac]/60" : "text-[#6e4630]"}`}>
          {moodWords.map((word) => (
            <span className={`border-l pl-3 ${dark ? "border-[#f7f0ac]/40" : "border-clay"}`} key={word}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
