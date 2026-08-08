import { siteConfig } from "@/lib/siteConfig";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-plum/10">
      <iframe
        title="Map showing Plum Garden & CHAKURA's location on Cornerstone Mews, Burnaby, BC"
        src={siteConfig.mapEmbedSrc}
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
