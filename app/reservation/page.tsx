"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { CreditCard, Home as HomeIcon, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { rooms } from "@/lib/data";

function ReservationForm() {
  const params = useSearchParams();
  const preselected = params.get("room");

  const [roomSlug, setRoomSlug] = useState(preselected ?? rooms[0].slug);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [payment, setPayment] = useState<"online" | "hotel">("online");
  const [submitted, setSubmitted] = useState(false);

  const room = useMemo(() => rooms.find((r) => r.slug === roomSlug) ?? rooms[0], [roomSlug]);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const d = (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000;
    return d > 0 ? d : 0;
  }, [checkIn, checkOut]);

  const rateNumber = Number(room.rate.replace(/[^0-9]/g, "")) || 0;
  const total = rateNumber * (nights || 1);

  if (submitted) {
    return (
      <section className="bg-ivory py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <CheckCircle2 size={48} className="text-terracotta mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl mb-4">Reservation received</h1>
            <p className="text-ink/60 max-w-md mx-auto leading-relaxed">
              This is a demo confirmation — {room.name} for {nights || 1} night
              {(nights || 1) > 1 ? "s" : ""}, paying{" "}
              {payment === "online" ? "online now" : "at the property"}. A live
              build would send a confirmation email and hold the room in the
              admin panel.
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 grid lg:grid-cols-3 gap-14">
        <form
          className="lg:col-span-2 flex flex-col gap-14"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {/* Step 1 */}
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="eyebrow bg-terracotta text-ivory w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                1
              </span>
              <h2 className="font-display text-2xl">Stay Details</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <label className="flex flex-col gap-2">
                <span className="eyebrow text-ink/40">Check-in</span>
                <input
                  required
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="border border-ink/15 px-4 py-3 focus:outline-none focus:border-terracotta"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="eyebrow text-ink/40">Check-out</span>
                <input
                  required
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="border border-ink/15 px-4 py-3 focus:outline-none focus:border-terracotta"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 mb-6 max-w-[200px]">
              <span className="eyebrow text-ink/40">Guests</span>
              <input
                type="number"
                min={1}
                max={4}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="border border-ink/15 px-4 py-3 focus:outline-none focus:border-terracotta"
              />
            </label>
            <span className="eyebrow text-ink/40 block mb-3">Select a room</span>
            <div className="grid sm:grid-cols-2 gap-4">
              {rooms.map((r) => (
                <button
                  type="button"
                  key={r.slug}
                  onClick={() => setRoomSlug(r.slug)}
                  className={`flex gap-3 items-center border p-3 text-left transition-colors ${
                    roomSlug === r.slug
                      ? "border-terracotta bg-terracotta/5"
                      : "border-ink/15 hover:border-ink/30"
                  }`}
                >
                  <div className="relative w-16 h-16 shrink-0">
                    <Image src={r.image} alt={r.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-display text-base leading-tight">{r.name}</p>
                    <p className="text-xs text-ink/50 mt-1">{r.rate}</p>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Step 2 */}
          <Reveal delay={0.05}>
            <div className="flex items-center gap-3 mb-8">
              <span className="eyebrow bg-terracotta text-ivory w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                2
              </span>
              <h2 className="font-display text-2xl">Guest Details</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="eyebrow text-ink/40">Full name</span>
                <input required type="text" className="border border-ink/15 px-4 py-3 focus:outline-none focus:border-terracotta" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="eyebrow text-ink/40">Email</span>
                <input required type="email" className="border border-ink/15 px-4 py-3 focus:outline-none focus:border-terracotta" />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="eyebrow text-ink/40">Phone</span>
                <input required type="tel" className="border border-ink/15 px-4 py-3 focus:outline-none focus:border-terracotta" />
              </label>
            </div>
          </Reveal>

          {/* Step 3 */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <span className="eyebrow bg-terracotta text-ivory w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                3
              </span>
              <h2 className="font-display text-2xl">Payment</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPayment("online")}
                className={`flex items-center gap-3 border p-5 text-left transition-colors ${
                  payment === "online" ? "border-terracotta bg-terracotta/5" : "border-ink/15"
                }`}
              >
                <CreditCard size={20} className="text-terracotta" />
                <div>
                  <p className="font-medium">Pay online now</p>
                  <p className="text-xs text-ink/50">Secure payment gateway</p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setPayment("hotel")}
                className={`flex items-center gap-3 border p-5 text-left transition-colors ${
                  payment === "hotel" ? "border-terracotta bg-terracotta/5" : "border-ink/15"
                }`}
              >
                <HomeIcon size={20} className="text-terracotta" />
                <div>
                  <p className="font-medium">Pay at the property</p>
                  <p className="text-xs text-ink/50">Settle on arrival</p>
                </div>
              </button>
            </div>
          </Reveal>

          <button type="submit" className="btn-primary w-fit">
            Confirm Reservation
          </button>
        </form>

        {/* Summary */}
        <Reveal delay={0.15}>
          <div className="border border-ink/10 p-8 sticky top-28">
            <p className="eyebrow text-ink/40 mb-4">Reservation Summary</p>
            <div className="relative aspect-[4/3] mb-5">
              <Image src={room.image} alt={room.name} fill className="object-cover" />
            </div>
            <h3 className="font-display text-2xl mb-1">{room.name}</h3>
            <p className="text-sm text-ink/50 mb-6">{room.tagline}</p>
            <div className="hairline-solid mb-6" />
            <dl className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <dt className="text-ink/50">Check-in</dt>
                <dd>{checkIn || "—"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50">Check-out</dt>
                <dd>{checkOut || "—"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50">Guests</dt>
                <dd>{guests}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50">Nights</dt>
                <dd>{nights || 1}</dd>
              </div>
            </dl>
            <div className="hairline-solid mb-6" />
            <div className="flex justify-between items-baseline">
              <span className="eyebrow text-ink/40">Estimated total</span>
              <span className="font-display text-2xl text-terracotta">
                LKR {total.toLocaleString()}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ReservationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book Direct"
        title="Reservation & Checkout"
        subtitle="Pick your room, your dates, and how you'd like to pay — online now, or directly at the property on arrival."
        image="/images/exterior-crop.jpg"
      />
      <Suspense fallback={null}>
        <ReservationForm />
      </Suspense>
    </main>
  );
}
