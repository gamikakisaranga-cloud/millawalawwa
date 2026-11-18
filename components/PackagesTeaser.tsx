import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { packages } from "@/lib/data";
import Reveal from "./Reveal";

export default function PackagesTeaser() {
  return (
    <section className="bg-teak text-ivory py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-ochre-light mb-4">Travel Packages</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-lg">
              Beyond the veranda, the Cultural Triangle.
            </h2>
          </div>
          <Link href="/packages" className="btn-outline-light w-fit">
            All travel packages
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-ivory/15">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.slug} delay={i * 0.08} className="bg-teak p-8 md:p-10">
              <div className="flex items-start justify-between mb-8">
                <span className="eyebrow text-ochre-light">{pkg.duration}</span>
                <ArrowUpRight size={18} className="text-ivory/40" />
              </div>
              <h3 className="font-display text-2xl mb-3">{pkg.name}</h3>
              <p className="text-sm text-ivory/60 leading-relaxed mb-6">
                {pkg.description}
              </p>
              <p className="eyebrow text-ivory/50">{pkg.price}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
