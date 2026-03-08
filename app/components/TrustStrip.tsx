"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years in the Trade", detail: "Est. 2009" },
  { value: 2500, suffix: "+", label: "Jobs Completed", detail: "And counting" },
  { value: 98, suffix: "%", label: "Customer Satisfaction", detail: "Based on reviews" },
  { value: 2, suffix: "hr", label: "Avg. Emergency Response", detail: "Across Nottingham" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 40;
          const inc = target / steps;
          let cur = 0;
          const timer = setInterval(() => {
            cur += inc;
            if (cur >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(cur));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-navy-900">
      {count.toLocaleString()}<span className="text-teal-500">{suffix}</span>
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-steel-200">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:px-8">
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-steel-700 font-semibold text-sm mt-2">{s.label}</p>
              <p className="text-steel-400 text-xs mt-0.5">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
