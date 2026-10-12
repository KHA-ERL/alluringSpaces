"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsBand({ stats }) {
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="grid grid-cols-2 gap-px border-y border-black/15 bg-black/15 lg:grid-cols-4" aria-label="Studio highlights">
      {stats.map(([value, label]) => (
        <div className="grid min-h-28 place-items-center bg-[#f7f0ac] text-center text-ink sm:min-h-[138px]" key={label}>
          <AnimatedNumber value={Number(value || 0)} start={hasStarted} />
          <span className="font-mono text-[0.72rem] uppercase text-[#6e4630]">{label}</span>
        </div>
      ))}
    </section>
  );
}

function AnimatedNumber({ value, start }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    let animationFrame;
    const duration = 1300;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    }

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, value]);

  return <strong className="font-serif text-5xl leading-none">{formatStat(displayValue)}</strong>;
}

function formatStat(value) {
  const number = Number(value || 0);
  return number < 10 ? String(number).padStart(2, "0") : String(number);
}
