import Link from "next/link";
import { changelog, formatChangelogDate } from "@/data/changelog";

export default function LatestVersionCard() {
  const latest = changelog[0];
  if (!latest) return null;

  return (
    <Link
      href="/docs/changelog"
      className="block rounded-2xl border border-white/[0.06] bg-[#0f141c]/80 p-8 hover:border-white/[0.12] transition-all duration-300 group"
    >
      <div className="flex flex-wrap items-baseline gap-3 mb-5">
        <span className="text-xs uppercase tracking-wider text-[#38e0c4] font-medium">
          Latest release
        </span>
        <span className="text-lg text-[#eef2f7]">v{latest.version}</span>
        <span className="text-sm text-[#9ba6b3]">
          {formatChangelogDate(latest.date)}
        </span>
      </div>

      <ul className="space-y-2 list-disc list-inside mb-6">
        {latest.changes.map((change, i) => (
          <li key={i} className="text-sm text-[#9ba6b3] leading-relaxed">
            {change}
          </li>
        ))}
      </ul>

      <span className="text-sm text-[#38e0c4] group-hover:underline">
        View full changelog →
      </span>
    </Link>
  );
}
