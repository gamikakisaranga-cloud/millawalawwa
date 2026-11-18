"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function LoginPage() {
  return (
    <main className="grid md:grid-cols-2 min-h-screen pt-20">
      <div className="relative hidden md:block">
        <Image
          src="/images/bedroom-canopy.jpg"
          alt="Canopy bed inside a Milla Walawwa room"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute bottom-12 left-10 right-10 text-ivory">
          <p className="eyebrow text-ochre-light mb-3">Guest Portal</p>
          <p className="font-display text-3xl leading-snug max-w-sm">
            Your reservations, saved details, and stay history in one place.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-20">
        <Reveal className="w-full max-w-sm">
          <p className="eyebrow text-terracotta mb-3">Welcome Back</p>
          <h1 className="font-display text-4xl mb-8">Guest Login</h1>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <label className="flex flex-col gap-2">
              <span className="eyebrow text-ink/40">Email</span>
              <input
                type="email"
                required
                className="border border-ink/15 px-4 py-3 focus:outline-none focus:border-terracotta"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="eyebrow text-ink/40">Password</span>
              <input
                type="password"
                required
                className="border border-ink/15 px-4 py-3 focus:outline-none focus:border-terracotta"
              />
            </label>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-ink/60">
                <input type="checkbox" className="accent-terracotta" />
                Remember me
              </label>
              <Link href="#" className="link-underline text-ink/60">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="btn-primary justify-center mt-2">
              Sign In
            </button>
          </form>

          <div className="hairline my-8" />
          <p className="text-sm text-ink/60 text-center">
            New here?{" "}
            <Link href="/reservation" className="link-underline text-terracotta">
              Reserve a stay
            </Link>{" "}
            and an account is created automatically.
          </p>
        </Reveal>
      </div>
    </main>
  );
}
