import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/lib/data";
import Reveal from "./Reveal";

export default function RoomsPreview() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-terracotta mb-4">The Rooms</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-lg">
              Four rooms, each named for what it is.
            </h2>
          </div>
          <Link href="/rooms" className="btn-outline w-fit">
            View all rooms
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {rooms.map((room, i) => (
            <Reveal key={room.slug} delay={i * 0.08}>
              <Link href={`/rooms/${room.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                  <span className="absolute top-4 left-4 eyebrow text-ivory bg-ink/60 px-3 py-1.5">
                    {room.occupancy}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl">{room.name}</h3>
                    <p className="text-sm text-ink/60 mt-1">{room.tagline}</p>
                  </div>
                  <span className="link-underline eyebrow text-terracotta whitespace-nowrap mt-2">
                    View
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
