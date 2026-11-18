import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden flex items-center justify-center text-center">
      <Image
        src="/images/exterior-palms.jpg"
        alt="Milla Walawwa exterior framed by palm trees at golden hour"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/60" />
      <Reveal className="relative px-6">
        <p className="eyebrow text-ochre-light mb-5">Pay Online or at the Property</p>
        <h2 className="font-display text-4xl md:text-6xl text-ivory max-w-2xl mx-auto leading-tight">
          Four rooms. One booking that takes a minute.
        </h2>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/reservation" className="btn-primary">
            Reserve Your Stay
          </Link>
          <Link href="/packages" className="btn-outline-light">
            See Travel Packages
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
