import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { parse } from "yaml";

/** "YYYY-MM" string, e.g. "2024-09". */
const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Use "YYYY-MM"');
/** Optional URL; empty strings are treated as "not set". */
const optionalUrl = z
  .union([z.url(), z.string().startsWith("/"), z.literal("")])
  .optional()
  .transform((v) => (v ? v : undefined));

/* ---------- single-file data ---------- */

const profile = defineCollection({
  loader: file("content/profile.yaml", {
    parser: (text) => ({ profile: parse(text) as Record<string, unknown> }),
  }),
  schema: z.object({
    name: z.string(),
    shortName: z.string(),
    location: z.string(),
    tagline: z.string(),
    intro: z.string(),
    bio: z.string(),
    currentRole: z.string(),
    interests: z.array(z.string()),
    researchInterests: z.array(
      z.object({ title: z.string(), description: z.string() }),
    ),
    email: z.email(),
    links: z.object({
      github: optionalUrl,
      linkedin: optionalUrl,
      scholar: optionalUrl,
      orcid: optionalUrl,
    }),
    resume: optionalUrl,
  }),
});

const skills = defineCollection({
  loader: file("content/skills.yaml", {
    parser: (text) =>
      (parse(text) as Array<Record<string, unknown>>).map((group, i) => ({
        id: String(i).padStart(2, "0"),
        order: i,
        ...group,
      })),
  }),
  schema: z.object({
    group: z.string(),
    order: z.number(),
    items: z.array(z.string()).min(1),
  }),
});

/* ---------- one entry per Markdown file ---------- */

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/experience" }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    companyUrl: optionalUrl,
    location: z.string().optional(),
    start: yearMonth,
    /** Omit for a current role. */
    end: yearMonth.optional(),
    summary: z.string().optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/education" }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    start: z.number().int(),
    end: z.number().int().optional(),
    grade: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/projects" }),
  schema: z.object({
    title: z.string(),
    /** "qa" = Testing & QA, "engineering" = things you built. */
    category: z.enum(["qa", "engineering"]),
    summary: z.string().max(280),
    tags: z.array(z.string()).default([]),
    github: optionalUrl,
    live: optionalUrl,
    featured: z.boolean().default(true),
    order: z.number().default(100),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/publications" }),
  schema: z.object({
    title: z.string(),
    /** Author names in order. Your own name is highlighted automatically. */
    authors: z.array(z.string()).min(1),
    venue: z.string(),
    year: z.number().int(),
    type: z.enum(["journal", "conference", "preprint", "thesis", "report", "workshop"]),
    status: z.enum(["published", "under-review", "in-progress"]).default("published"),
    summary: z.string().optional(),
    links: z
      .object({
        pdf: optionalUrl,
        doi: optionalUrl,
        url: optionalUrl,
        code: optionalUrl,
        slides: optionalUrl,
      })
      .default({}),
    tags: z.array(z.string()).default([]),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Drafts are visible in `npm run dev` only. */
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  profile,
  skills,
  experience,
  education,
  projects,
  publications,
  notes,
};
