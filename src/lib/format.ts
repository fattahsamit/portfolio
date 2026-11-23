const monthYear = new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" });
const fullDate = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** "2024-09" → "Sep 2024" */
export function formatYearMonth(value: string): string {
  const [y, m] = value.split("-").map(Number);
  return monthYear.format(new Date(Date.UTC(y!, m! - 1, 1)));
}

/** "2023-06", "2024-09" → "Jun 2023 – Sep 2024"; missing end → "… – Present" */
export function formatRange(start: string, end?: string): string {
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : "Present"}`;
}

export function formatDate(date: Date): string {
  return fullDate.format(date);
}

/** ISO date (YYYY-MM-DD) for <time datetime>. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Rough reading time for Markdown bodies. */
export function readingTime(body: string | undefined): string {
  const words = (body ?? "").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
