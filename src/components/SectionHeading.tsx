type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({ eyebrow, title, description, align = "left", tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl`}>
      {eyebrow && (
        <p className={`uppercase tracking-wider2 text-xs mb-3 ${dark ? "text-bronze" : "text-bronze"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl leading-tight ${
          dark ? "text-ivory" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-ivory/80" : "text-charcoal/80"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
