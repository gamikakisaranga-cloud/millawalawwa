import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden">
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="relative max-w-content mx-auto w-full px-6 md:px-10 pb-14 pt-32">
        <p className="eyebrow text-ochre-light mb-4">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-6xl text-ivory max-w-2xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-ivory/70 text-sm md:text-base leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
