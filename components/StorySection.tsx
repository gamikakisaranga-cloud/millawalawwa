import Image from "next/image";
import Reveal from "./Reveal";

export default function StorySection() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <Reveal>
          <div className="relative aspect-[4/3] md:aspect-[3/4]">
            <Image
              src="/images/aerial-roof.jpg"
              alt="Aerial view of the walawwa's terracotta tiled roof surrounded by jungle"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-terracotta text-ivory px-6 py-5 hidden md:block">
              <p className="font-display text-3xl leading-none">4</p>
              <p className="eyebrow mt-1" style={{ fontSize: "0.6rem" }}>Rooms only</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow text-terracotta mb-4">The Property</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            A walawwa, kept small on purpose.
          </h2>
          <div className="space-y-5 text-ink/70 leading-relaxed">
            <p>
              Milla Walawwa sits under a single continuous terracotta
              roofline — the shape that gives every walawwa in this part of
              Sri Lanka its silhouette from above. Whitewashed walls,
              cylindrical veranda columns, and a courtyard of coconut and
              jak trees surround it on every side.
            </p>
            <p>
              Rather than expand it, Maara restored it as four rooms only —
              enough for the house to stay a house, not a hotel. Ten
              minutes from Matale town, it is built for
              travelers who want the Cultural Triangle without the
              crowds at breakfast.
            </p>
          </div>
          <div className="hairline mt-10 mb-8" />
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="font-display text-3xl text-terracotta">Colonial-era</p>
              <p className="text-xs text-ink/50 mt-1">Original structure</p>
            </div>
            <div>
              <p className="font-display text-3xl text-terracotta">4</p>
              <p className="text-xs text-ink/50 mt-1">Rooms, no more</p>
            </div>
            <div>
              <p className="font-display text-3xl text-terracotta">Nearby</p>
              <p className="text-xs text-ink/50 mt-1">Matale town</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
