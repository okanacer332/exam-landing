import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { SiteContent } from "@/types/content";

const fallbackContent: SiteContent = {
  brand: {
    name: "Papirus AI",
    shortDescription: "SÄ±nav kaÄŸÄ±dÄ± okuma ve deÄŸerlendirme asistanÄ±",
  },
  hero: {
    eyebrow: "Hocalar ve asistanlar iÃ§in sÄ±nav okuma motoru",
    title: "SÄ±nav kaÄŸÄ±tlarÄ±nÄ± okunabilir veriye Ã§evirin.",
    accent: "Referans kaÄŸÄ±dÄ±, Ã¶ÄŸrenci teslimleri ve puanlama tek akÄ±ÅŸta.",
    description:
      "Ã–ÄŸretmen cevap kaÄŸÄ±dÄ±nÄ± yÃ¼kleyin; sistem sorularÄ±, puanlarÄ± ve metinleri anlamlÄ± bloklara ayÄ±rsÄ±n.",
    primaryCta: "Demo akÄ±ÅŸÄ±nÄ± incele",
    secondaryCta: "Admin paneline git",
  },
  metrics: [],
  audiences: [],
  workflow: [],
  features: [],
  documents: [],
  video: {
    title: "Demo konsepti",
    description: "Referans kaÄŸÄ±dÄ±ndan rapora uzanan kÄ±sa Ã¼rÃ¼n videosu.",
    duration: "03:00",
    url: "",
    posterHint: "SÄ±nav kaÄŸÄ±tlarÄ± ve OCR bloklarÄ±.",
  },
  adminPitch: [],
  faq: [],
};

const contentDirectory = path.join(process.cwd(), "data");
const contentFilePath = path.join(contentDirectory, "site-content.json");

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function normalizeSiteContent(value: unknown): SiteContent {
  if (!isObject(value)) {
    throw new Error("Ä°Ã§erik nesnesi geÃ§ersiz.");
  }

  const content = value as Partial<SiteContent>;

  if (!isObject(content.brand) || !isObject(content.hero) || !isObject(content.video)) {
    throw new Error("Brand, hero ve video alanlarÄ± zorunludur.");
  }

  return {
    brand: {
      ...fallbackContent.brand,
      ...content.brand,
    },
    hero: {
      ...fallbackContent.hero,
      ...content.hero,
    },
    metrics: Array.isArray(content.metrics) ? content.metrics : [],
    audiences: Array.isArray(content.audiences) ? content.audiences : [],
    workflow: Array.isArray(content.workflow) ? content.workflow : [],
    features: Array.isArray(content.features) ? content.features : [],
    documents: Array.isArray(content.documents) ? content.documents : [],
    video: {
      ...fallbackContent.video,
      ...content.video,
    },
    adminPitch: Array.isArray(content.adminPitch) ? content.adminPitch : [],
    faq: Array.isArray(content.faq) ? content.faq : [],
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const raw = await readFile(contentFilePath, "utf8");
    return normalizeSiteContent(JSON.parse(raw));
  } catch {
    return fallbackContent;
  }
}

export async function saveSiteContent(content: SiteContent) {
  const normalized = normalizeSiteContent(content);

  await mkdir(contentDirectory, { recursive: true });
  await writeFile(contentFilePath, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");

  return normalized;
}
