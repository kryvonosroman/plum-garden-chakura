type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-matcha-dark">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-plum text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg text-ink/70 text-balance">{subtitle}</p>
      )}
    </div>
  );
}
