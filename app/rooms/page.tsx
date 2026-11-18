import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { rooms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rooms | Milla Walawwa Retreat by Maara",
};

export default function RoomsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Four Rooms Only"
        title="Rooms & Availability"
        subtitle="Every room sits beneath the same tiled roofline, furnished in teak and cane, and named for the one thing that makes it different."
        image="/images/exterior-wide-trees.jpg"
      />

      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col gap-20 md:gap-28">
          {rooms.map((room, i) => (
            <Reveal key={room.slug}>
              <div
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3]">
                  <Image src={room.image} alt={room.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="eyebrow text-terracotta mb-3">
                    {room.occupancy} &middot; {room.rate}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl mb-4">{room.name}</h2>
                  <p className="text-ink/70 leading-relaxed mb-6">{room.description}</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8 text-sm text-ink/60">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-terracotta rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Link href={`/rooms/${room.slug}`} className="btn-primary">
                      Room Details
                    </Link>
                    <Link
                      href={`/reservation?room=${room.slug}`}
                      className="btn-outline"
                    >
                      Reserve
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
