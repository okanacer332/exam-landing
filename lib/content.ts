import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { SiteContent } from "@/types/content";

const fallbackContent: SiteContent = {
  brand: {
    name: "Papirus AI",
    shortDescription: "Akademisyenler için sınav akışı",
  },
  hero: {
    eyebrow: "Akademisyenler için zaman kazandıran sınav okuma",
    title: "Sınav kağıtlarını daha hızlı ve düzenli inceleyin.",
    accent: "Referans cevap, öğrenci yanıtı ve puanlama aynı akışta.",
    description:
      "Papirus AI, öğretim üyeleri ve asistanların sınav kağıtlarını daha hızlı incelemesi için geliştirilen bir okuma ve kontrol aracıdır.",
    primaryCta: "Demo akışını gör",
    secondaryCta: "Nasıl çalışır?",
  },
  metrics: [],
  audiences: [],
  workflow: [],
  features: [],
  documents: [],
  video: {
    title: "Kısa ürün demosu",
    description: "Referans cevap kağıdından son kontrole uzanan sade ürün demosu.",
    duration: "03:00",
    url: "",
    posterHint: "Sınav kağıtları, ayrılmış soru blokları ve puan kontrol alanı.",
  },
  faq: [],
};

const contentDirectory = path.join(process.cwd(), "data");
const contentFilePath = path.join(contentDirectory, "site-content.json");

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function normalizeSiteContent(value: unknown): SiteContent {
  if (!isObject(value)) {
    throw new Error("İçerik nesnesi geçersiz.");
  }

  const content = value as Partial<SiteContent>;

  if (!isObject(content.brand) || !isObject(content.hero) || !isObject(content.video)) {
    throw new Error("Brand, hero ve video alanları zorunludur.");
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
