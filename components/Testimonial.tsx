import type { Testimonial as TestimonialType } from "@/data/testimonials";

export default function Testimonial({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <figure className="flex h-full flex-col justify-between gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-plum/10">
      <blockquote className="text-ink/80">
        <span className="font-display text-3xl leading-none text-honey-dark">&ldquo;</span>
        {testimonial.quote}
      </blockquote>
      <figcaption className="text-sm font-semibold text-plum">
        {testimonial.author}
      </figcaption>
    </figure>
  );
}
