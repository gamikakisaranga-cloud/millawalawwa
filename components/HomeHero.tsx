"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeHero() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(
          ".hero-image",
          { scale: 1.18, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" }
        )
          .fromTo(
            ".hero-eyebrow",
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=1.1"
          )
          .fromTo(
            ".hero-line",
            { yPercent: 120, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.12 },
            "-=0.5"
          )
          .fromTo(
            ".hero-sub",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.5"
          )
          .fromTo(
            ".hero-cta",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
            "-=0.4"
          )
          .fromTo(
            ".hero-scroll",
            { opacity: 0 },
            { opacity: 1, duration: 0.6 },
            "-=0.2"
          );

        gsap.to(".hero-image", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[100svh] min-h-[620px] overflow-hidden flex items-end">
      <div className="hero-image absolute inset-0">
        <Image
          src="/images/exterior-hero.jpg"
          alt="Milla Walawwa Retreat, colonial-era manor house facade beneath a canopy of trees"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/50" />
      </div>

      <div className="relative max-w-content w-full mx-auto px-6 md:px-10 pb-20 md:pb-24">
        <p className="hero-eyebrow eyebrow text-ochre-light mb-6">
          Matale &middot; Sri Lanka
        </p>
        <h1 className="font-display text-ivory text-[13vw] leading-[0.98] md:text-[6.2vw] md:leading-[0.96] max-w-4xl">
          <span className="block overflow-hidden">
            <span className="hero-line block">One restored walawwa.</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">Four rooms.</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block italic text-ochre-light">Nothing hurried.</span>
          </span>
        </h1>
        <p className="hero-sub mt-8 max-w-md text-ivory/70 text-sm md:text-base leading-relaxed">
          A colonial-era manor house on the edge of the ancient city, given a
          quiet second life as a four-room retreat — terracotta roofline,
          teak floors, and a veranda built for slow mornings.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/rooms" className="hero-cta btn-primary">
            Explore the Rooms
          </Link>
          <Link href="/reservation" className="hero-cta btn-outline-light">
            Reserve a Stay
          </Link>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 right-6 md:right-10 hidden sm:flex flex-col items-center gap-2 text-ivory/60">
        <span className="eyebrow" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
