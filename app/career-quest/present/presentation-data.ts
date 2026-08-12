export type PresentationMode = "core" | "recommended" | "extended";

export type PresentationSceneId =
  | "opening"
  | "follow-live"
  | "problem"
  | "gid-model"
  | "statbet-proof"
  | "gid-platform-core"
  | "gid-business-ai"
  | "papertalk-proof"
  | "gid-pulse"
  | "closing";

export type PresentationScene = {
  id: PresentationSceneId;
  number: string;
  label: string;
  title: string;
  shortcut?: string;
};

export const presentationScenes: PresentationScene[] = [
  {
    id: "opening",
    number: "01",
    label: "GID Technologies",
    title: "Technology should change what a business can do.",
    shortcut: "1",
  },
  {
    id: "follow-live",
    number: "02",
    label: "Live Experience",
    title: "Do not just watch GID. Explore it while we speak.",
    shortcut: "2",
  },
  {
    id: "problem",
    number: "03",
    label: "Business Reality",
    title: "Small operational gaps become expensive business problems.",
    shortcut: "3",
  },
  {
    id: "gid-model",
    number: "04",
    label: "How GID Operates",
    title: "Solve immediate problems. Build solutions for wider markets.",
    shortcut: "4",
  },
  {
    id: "statbet-proof",
    number: "05",
    label: "StatBet",
    title: "From an idea to a live public product.",
    shortcut: "5",
  },
  {
    id: "gid-platform-core",
    number: "06",
    label: "GID Platform",
    title: "Turn scattered operations into connected business systems.",
    shortcut: "6",
  },
  {
    id: "gid-business-ai",
    number: "07",
    label: "GID Business AI",
    title: "Turn business information into decisions.",
    shortcut: "7",
  },
  {
    id: "papertalk-proof",
    number: "08",
    label: "PaperTalk",
    title: "Make important information easier to access.",
    shortcut: "8",
  },
  {
    id: "gid-pulse",
    number: "09",
    label: "Work With GID",
    title: "You do not need to know the software. Bring us the problem.",
    shortcut: "9",
  },
  {
    id: "closing",
    number: "10",
    label: "Closing",
    title: "Bring GID one problem worth solving.",
    shortcut: "0",
  },
];

export const presentationModeDetails: Record<
  PresentationMode,
  {
    label: string;
    timing: string;
    description: string;
  }
> = {
  core: {
    label: "Compressed",
    timing: "4–5 minutes",
    description:
      "Emergency or shortened Career Quest route covering the central business problem, GID transformation, strongest proof and commercial close.",
  },

  recommended: {
    label: "Career Quest",
    timing: "7–8 minutes",
    description:
      "The primary Career Quest route built around business transformation, proof, business systems, intelligence, accessibility and opportunity conversion.",
  },

  extended: {
    label: "Extended",
    timing: "10–12 minutes",
    description:
      "A longer route for situations where additional time is available for examples, product context and deeper business discussion.",
  },
};
