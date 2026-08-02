import type { Metadata } from "next";
import PresentationExperience from "./PresentationExperience";
import type { PresentationMode } from "./presentation-data";

export const metadata: Metadata = {
  title: "GID Technologies Live Experience",
  description:
    "The GID Technologies interactive graduation presentation experience.",
  robots: {
    index: false,
    follow: false,
  },
};

type PresentationSearchParams = Record<string, string | string[] | undefined>;

function getFirstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function resolveMode(value: string | undefined): PresentationMode {
  if (value === "core" || value === "recommended" || value === "extended") {
    return value;
  }

  return "recommended";
}

export default async function PresentationPage({
  searchParams,
}: {
  searchParams: Promise<PresentationSearchParams>;
}) {
  const params = await searchParams;

  const initialMode = resolveMode(getFirstValue(params.mode));

  return <PresentationExperience initialMode={initialMode} />;
}
