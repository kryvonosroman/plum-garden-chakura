import { hours } from "@/lib/siteConfig";

export default function HoursTable() {
  return (
    <table className="w-full overflow-hidden rounded-2xl bg-white text-sm ring-1 ring-plum/10">
      <caption className="sr-only">Restaurant hours by day</caption>
      <tbody>
        {hours.map((h, i) => (
          <tr key={h.day} className={i % 2 === 0 ? "bg-cream-dark/40" : ""}>
            <th
              scope="row"
              className="px-5 py-3 text-left font-medium text-plum"
            >
              {h.day}
            </th>
            <td className="px-5 py-3 text-right text-ink/70">{h.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
