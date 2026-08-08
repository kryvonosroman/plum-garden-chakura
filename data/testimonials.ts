export type Testimonial = {
  id: string;
  quote: string;
  author: string;
};

// TODO: replace every quote below with real Google/Yelp reviews once the
// client provides them. These are realistic-sounding placeholders only.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The chicken katsu sandwich is unreal — crispy every time, and the brown sugar pearl milk tea is the best I've had near campus.",
    author: "Placeholder review — TODO replace",
  },
  {
    id: "t2",
    quote:
      "Perfect spot between classes. Ordered the karage don on Uber Eats and it showed up hot and fast.",
    author: "Placeholder review — TODO replace",
  },
  {
    id: "t3",
    quote:
      "Hotpot night with friends here was great — good portions and the tea bar means everyone finds something they like.",
    author: "Placeholder review — TODO replace",
  },
];
