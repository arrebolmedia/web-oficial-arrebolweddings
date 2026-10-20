import type { Metadata } from "next";
import AlianzasLanding from "../components/AlianzasLanding";
import { getAlianzasMetadata } from "../content";

export const metadata: Metadata = getAlianzasMetadata("planners");

export default function AlianzasPlannersPage() {
  return <AlianzasLanding variant="planners" />;
}
