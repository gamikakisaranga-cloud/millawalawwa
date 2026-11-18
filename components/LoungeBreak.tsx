import Image from "next/image";
import Reveal from "./Reveal";

export default function LoungeBreak() {
  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
      <Image
        src="/images/interior-lounge.jpg"
        alt="Warm-lit lounge and dining room inside the walawwa with teak antique furniture"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative h-full max-w-content mx-auto px-6 md:px-10 flex items-center">
        <Reveal>
          <p className="eyebrow text-ochre-light mb-5">Inside the House</p>
          <p className="font-display text-3xl md:text-5xl text-ivory max-w-2xl leading-snug">
            Antique teak, low lamplight, and a dining table set for guests
            who&rsquo;d rather talk than rush.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
