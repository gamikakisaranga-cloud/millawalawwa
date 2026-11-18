import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Travel Packages | Milla Walawwa Retreat by Maara",
};

export default function PackagesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Beyond the Veranda"
        title="Travel Packages"
        subtitle="Curated routes through the Cultural Triangle, arranged around your stay — private transport, guides, and entry included."
        image="/images/aerial-roof.jpg"
      />

      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col gap-px bg-ink/10">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.slug} delay={i * 0.06}>
              <div className="bg-ivory py-10 md:py-12 grid md:grid-cols-[1fr_auto] gap-8 items-start">
                <div>
                  <p className="eyebrow text-terracotta mb-3">{pkg.duration}</p>
                  <h2 className="font-display text-3xl md:text-4xl mb-4">{pkg.name}</h2>
                  <p className="text-ink/70 leading-relaxed max-w-2xl mb-6">
                    {pkg.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {pkg.inclusions.map((inc) => (
                      <li key={inc} className="flex items-center gap-3 text-sm text-ink/60">
                        <Check size={14} className="text-terracotta shrink-0" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex md:flex-col md:items-end justify-between md:justify-start gap-4 md:text-right shrink-0 md:w-56">
                  <p className="font-display text-2xl text-terracotta">{pkg.price}</p>
                  <Link
                    href={`/reservation?package=${pkg.slug}`}
                    className="btn-outline whitespace-nowrap flex items-center gap-2"
                  >
                    Enquire <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-teak text-ivory py-20 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="eyebrow text-ochre-light mb-4">Not Seeing What You Need?</p>
            <h2 className="font-display text-3xl md:text-4xl mb-8 max-w-xl mx-auto">
              Every package can be adjusted to your dates and pace.
            </h2>
            <Link href="/reservation" className="btn-outline-light">
              Talk to the Retreat
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
