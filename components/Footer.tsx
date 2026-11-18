import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/80">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-ivory">Milla Walawwa</div>
          <div className="eyebrow text-ochre-light mt-1" style={{ fontSize: "0.62rem" }}>
            Retreat by Maara
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
            A restored colonial-era walawwa on the edge of Matale — four
            rooms, a tiled veranda, and a slower pace of travel through
            Sri Lanka&rsquo;s Cultural Triangle.
          </p>
        </div>
        <div>
          <div className="eyebrow text-ivory/40 mb-4">Explore</div>
          <ul className="space-y-3 text-sm">
            <li><Link href="/rooms" className="link-underline">Rooms</Link></li>
            <li><Link href="/packages" className="link-underline">Travel Packages</Link></li>
            <li><Link href="/reservation" className="link-underline">Reserve a Stay</Link></li>
            <li><Link href="/login" className="link-underline">Guest Login</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-ivory/40 mb-4">Visit</div>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li>Matale, Sri Lanka</li>
            <li>Central Province, Sri Lanka</li>
            <li className="pt-2">reservations@millawalawwa.com</li>
            <li>+94 71 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="hairline-solid opacity-20" />
      <div className="max-w-content mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-ivory/40">
        <span>&copy; {new Date().getFullYear()} Milla Walawwa Retreat by Maara. All rights reserved.</span>
        <span>Site by iFeX International</span>
      </div>
    </footer>
  );
}
