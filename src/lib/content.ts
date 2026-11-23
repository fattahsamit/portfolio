import { getCollection, getEntry, type CollectionEntry } from "astro:content";

export async function getProfile() {
  const entry = await getEntry("profile", "profile");
  if (!entry) throw new Error("content/profile.yaml is missing or invalid");
  return entry.data;
}

export type Profile = Awaited<ReturnType<typeof getProfile>>;

/** Newest first; current roles (no end date) always on top. */
export async function getExperience() {
  const items = await getCollection("experience");
  return items.sort((a, b) => {
    const aEnd = a.data.end ?? "9999-12";
    const bEnd = b.data.end ?? "9999-12";
    return bEnd.localeCompare(aEnd) || b.data.start.localeCompare(a.data.start);
  });
}

export async function getEducation() {
  const items = await getCollection("education");
  return items.sort((a, b) => b.data.start - a.data.start);
}

export async function getSkills() {
  const items = await getCollection("skills");
  return items.sort((a, b) => a.data.order - b.data.order).map((s) => s.data);
}

export async function getProjects() {
  const items = await getCollection("projects", (p) => p.data.featured);
  const sorted = items.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
  return {
    qa: sorted.filter((p) => p.data.category === "qa"),
    engineering: sorted.filter((p) => p.data.category === "engineering"),
  };
}

const statusRank = { "in-progress": 0, "under-review": 1, published: 2 } as const;

/** Published/under-review newest first. In-progress work is returned separately. */
export async function getPublications() {
  const items = await getCollection("publications");
  const sorted = items.sort(
    (a, b) =>
      b.data.year - a.data.year ||
      statusRank[a.data.status] - statusRank[b.data.status] ||
      a.data.title.localeCompare(b.data.title),
  );
  return {
    papers: sorted.filter((p) => p.data.status !== "in-progress"),
    ongoing: sorted.filter((p) => p.data.status === "in-progress"),
  };
}

/** Published notes, newest first. Drafts are included only in dev. */
export async function getNotes() {
  const items = await getCollection("notes", (n) => import.meta.env.DEV || !n.data.draft);
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export type Note = CollectionEntry<"notes">;
export type Project = CollectionEntry<"projects">;
export type Publication = CollectionEntry<"publications">;
export type Experience = CollectionEntry<"experience">;
