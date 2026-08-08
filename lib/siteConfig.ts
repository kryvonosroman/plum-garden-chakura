export type DayHours = {
  day: string;
  hours: string;
};

// Sourced from third-party listings (Restaurant Guru, Restaurantji) which
// independently agree on these hours as of Aug 2026. Not confirmed directly
// with the restaurant — worth a quick call/Instagram DM before publishing,
// since holiday hours and recent changes won't show up in aggregator data.
export const hours: DayHours[] = [
  { day: "Monday", hours: "10:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "10:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "10:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "10:00 AM – 8:00 PM" },
  { day: "Friday", hours: "10:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "11:30 AM – 4:00 PM" },
  { day: "Sunday", hours: "11:30 AM – 4:00 PM" },
];

export const siteConfig = {
  name: "Plum Garden & CHAKURA",
  shortName: "Plum Garden",
  tagline: "Japanese-style comfort food meets a modern tea bar",
  description:
    "Asian fusion restaurant and tea café near SFU in Burnaby, BC — crispy chicken katsu, rice bowls, noodle dishes, hotpot, and a full bubble tea & fresh fruit tea bar.",
  phone: "(604) 299-9813",
  phoneHref: "tel:+16042999813",
  // No public contact email found (not listed on Google, Yelp, Instagram, or
  // delivery platforms) — this business appears to run on phone + Instagram
  // DM + delivery-platform messaging only. Add one here if the client has it.
  email: "",
  address: {
    line1: "8939–8951 Cornerstone Mews",
    city: "Burnaby",
    region: "BC",
    postalCode: "V5A 4Y6",
    country: "CA",
    full: "8939–8951 Cornerstone Mews, Burnaby, BC V5A 4Y6",
  },
  serviceOptions: ["Dine-in", "Takeout", "Delivery", "Curbside pickup"],
  accessibility: "Wheelchair-accessible entrance and wheelchair-accessible parking lot.",
  parkingNote:
    "Street and visitor parking is limited around Cornerstone Mews. The SFU East Parkade lot is close by but requires a paid parking pass/ticket — budget a few extra minutes if you're driving over from campus.",
  mapEmbedSrc:
    "https://www.google.com/maps?q=8939+Cornerstone+Mews,+Burnaby,+BC+V5A+4Y6&output=embed",
  mapLinkHref:
    "https://www.google.com/maps/search/?api=1&query=8939+Cornerstone+Mews+Burnaby+BC+V5A+4Y6",
  // Instagram confirmed via the account's own bio (address + hours match).
  // No Facebook or TikTok account could be found publicly — leave blank
  // rather than guess; add if the client has one.
  social: {
    instagram: "https://www.instagram.com/plumgarden.chakura_sfu/",
    facebook: "",
    tiktok: "",
  },
};

export const orderNote = "We partner with Uber Eats for delivery and pickup ordering.";
