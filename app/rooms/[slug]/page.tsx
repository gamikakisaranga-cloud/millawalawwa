import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { rooms } from "@/lib/data";

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const room = rooms.find((r) => r.slug === params.slug);
  return { title: room ? `${room.name} | Milla Walawwa Retreat` : "Room Not Found" };
}

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) notFound();

  const others = rooms.filter((r) => r.slug !== room.slug).slice(0, 3);

  return (
    <main>
      <section className="relative h-[64vh] min-h-[440px] overflow-hidden flex items-end">
        <Image src={room.image} alt={room.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />
        <div className="relative max-w-content mx-auto w-full px-6 md:px-10 pb-14 pt-32">
          <Link href="/rooms" className="eyebrow text-ivory/60 link-underline mb-6 inline-block">
            &larr; All Rooms
          </Link>
          <p className="eyebrow text-ochre-light mb-4">{room.occupancy}</p>
          <h1 className="font-display text-4xl md:text-6xl text-ivory max-w-2xl">{room.name}</h1>
          <p className="mt-3 text-ivory/70">{room.tagline}</p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-14">
          <div className="md:col-span-2">
            <Reveal>
              <p className="eyebrow text-terracotta mb-4">About This Room</p>
              <p className="text-lg md:text-xl leading-relaxed text-ink/80 mb-10">
                {room.description}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {room.gallery.map((img) => (
                  <div key={img} className="relative aspect-[4/3] overflow-hidden">
                    <Image src={img} alt={room.name} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="hairline my-12" />
              <p className="eyebrow text-terracotta mb-5">Room Features</p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {room.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-ink/70">
                    <Check size={16} className="text-terracotta shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="border border-ink/10 p-8 sticky top-28">
              <p className="eyebrow text-ink/40 mb-2">Rate</p>
              <p className="font-display text-3xl mb-6">{room.rate}</p>
              <div className="hairline-solid mb-6" />
              <dl className="space-y-3 text-sm mb-8">
                <div className="flex justify-between">
                  <dt className="text-ink/50">Occupancy</dt>
                  <dd>{room.occupancy}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink/50">Payment</dt>
                  <dd>Online or pay at hotel</dd>
                </div>
              </dl>
              <Link
                href={`/reservation?room=${room.slug}`}
                className="btn-primary w-full justify-center"
              >
                Reserve This Room
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-limewash py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <p className="eyebrow text-terracotta mb-10">Other Rooms</p>
          <div className="grid md:grid-cols-3 gap-8">
            {others.map((r) => (
              <Link key={r.slug} href={`/rooms/${r.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl mt-4">{r.name}</h3>
                <p className="text-sm text-ink/50">{r.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
