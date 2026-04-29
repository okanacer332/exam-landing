export type Metric = {
  value: string;
  label: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type WorkflowStep = {
  step: string;
  title: string;
  description: string;
};

export type DocumentConcept = {
  title: string;
  tag: string;
  description: string;
};

export type VideoConcept = {
  title: string;
  description: string;
  duration: string;
  url: string;
  posterHint: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteContent = {
  brand: {
    name: string;
    shortDescription: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  metrics: Metric[];
  audiences: Feature[];
  workflow: WorkflowStep[];
  features: Feature[];
  documents: DocumentConcept[];
  video: VideoConcept;
  adminPitch: Feature[];
  faq: FaqItem[];
};
