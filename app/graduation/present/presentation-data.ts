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
    label: "Opening",
    title: "Strong growth needs stronger systems.",
    shortcut: "1",
  },
  {
    id: "follow-live",
    number: "02",
    label: "Follow Live",
    title: "Everything being presented connects to something live.",
    shortcut: "2",
  },
  {
    id: "problem",
    number: "03",
    label: "Business Reality",
    title: "Ordinary operational gaps eventually become financial problems.",
    shortcut: "3",
  },
  {
    id: "gid-model",
    number: "04",
    label: "How GID Operates",
    title: "Business Solutions and GID-owned products.",
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
    title: "A reusable business foundation for different organisations.",
    shortcut: "6",
  },
  {
    id: "gid-business-ai",
    number: "07",
    label: "GID Business AI",
    title: "From business information to executive intelligence.",
    shortcut: "7",
  },
  {
    id: "papertalk-proof",
    number: "08",
    label: "PaperTalk",
    title: "Documents transformed into readable and audible information.",
    shortcut: "8",
  },
  {
    id: "gid-pulse",
    number: "09",
    label: "Work With GID",
    title: "Choose the problem, opportunity or conversation that fits.",
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
