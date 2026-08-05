export type PresentationMode = "core" | "recommended" | "extended";

export type PresentationSceneId =
  | "opening"
  | "problem"
  | "gid-model"
  | "statbet-proof"
  | "gid-platform-core"
  | "papertalk-proof"
  | "platform-roadmap"
  | "company-position"
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
    label: "Opening",
    title: "What are we building with what we learned?",
    shortcut: "1",
  },
  {
    id: "problem",
    number: "02",
    label: "Problem Space",
    title: "Value exists. Systems are missing.",
  },
  {
    id: "gid-model",
    number: "03",
    label: "GID Model",
    title: "One company. Two connected operating arms.",
    shortcut: "2",
  },
  {
    id: "statbet-proof",
    number: "04",
    label: "Proof 001",
    title: "StatBet — from idea to live public product.",
    shortcut: "3",
  },
  {
    id: "gid-platform-core",
    number: "05",
    label: "Business Infrastructure",
    title:
      "GID Platform — direct applications, configured systems and embedded services.",
    shortcut: "4",
  },

  {
    id: "papertalk-proof",
    number: "06",
    label: "Proof 003",
    title: "PaperTalk — printed information, made audible.",
    shortcut: "5",
  },
  {
    id: "platform-roadmap",
    number: "07",
    label: "Platform Roadmap",
    title: "Build the core once. Extend it carefully.",
    shortcut: "6",
  },
  {
    id: "company-position",
    number: "08",
    label: "Company Position",
    title: "Where GID Technologies stands today.",
    shortcut: "7",
  },
  {
    id: "gid-pulse",
    number: "09",
    label: "Proof 004",
    title: "GID Pulse — where do you fit?",
    shortcut: "8",
  },
  {
    id: "closing",
    number: "10",
    label: "Closing",
    title: "A startup that has started proving itself.",
    shortcut: "9",
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
    label: "Core",
    timing: "5 minutes",
    description:
      "The complete company story with compressed product and engineering proof.",
  },
  recommended: {
    label: "Recommended",
    timing: "8–10 minutes",
    description:
      "The rehearsed route with controlled StatBet, GID Platform and PaperTalk proof.",
  },
  extended: {
    label: "Extended",
    timing: "12–15 minutes",
    description:
      "The complete route with selected technical and product branches.",
  },
};
