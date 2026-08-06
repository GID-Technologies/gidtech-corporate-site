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
    title:
      "Growth becomes difficult when the systems behind the business are weak.",
    shortcut: "1",
  },
  {
    id: "problem",
    number: "02",
    label: "Business Reality",
    title: "Many businesses lose money through problems that look ordinary.",
  },
  {
    id: "gid-model",
    number: "03",
    label: "How GID Operates",
    title: "Solve immediate problems. Build long-term products.",
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
    label: "Product Roadmap",
    title:
      "What GID plans to build next across movement, communication, intelligence and integration.",
    shortcut: "6",
  },
  {
    id: "company-position",
    number: "08",
    label: "Hire GID",
    title: "Match the organisation’s problem with the right GID solution.",
    shortcut: "7",
  },
  {
    id: "gid-pulse",
    number: "09",
    label: "GID Pulse",
    title: "Scan once, choose the problem and start the right conversation.",
    shortcut: "8",
  },
  {
    id: "closing",
    number: "10",
    label: "Closing",
    title:
      "Bring GID one problem worth solving and start the right conversation.",
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
    timing: "5–6 minutes",
    description:
      "A focused commercial overview covering GID’s operating model, strongest proof, business platform and immediate service opportunities.",
  },
  recommended: {
    label: "Recommended",
    timing: "9–11 minutes",
    description:
      "The rehearsed graduation route with business problems, company capabilities, products, platform opportunities and audience conversion.",
  },
  extended: {
    label: "Extended",
    timing: "13–16 minutes",
    description:
      "The complete commercial presentation with additional product detail, integration direction and selected technical foundation.",
  },
};
