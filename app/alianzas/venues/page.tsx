import type { Metadata } from "next";
import AlianzasLanding from "../components/AlianzasLanding";
import { getAlianzasMetadata } from "../content";

export const metadata: Metadata = getAlianzasMetadata("venues");

export default function AlianzasVenuesPage() {
  return <AlianzasLanding variant="venues" />;
}
