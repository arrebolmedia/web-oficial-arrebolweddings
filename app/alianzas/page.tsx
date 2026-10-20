import type { Metadata } from "next";
import AlianzasLanding from "./components/AlianzasLanding";
import { getAlianzasMetadata } from "./content";

// /alianzas sigue mostrando la landing de planners (hay enlaces ya compartidos).
export const metadata: Metadata = getAlianzasMetadata("planners");

export default function AlianzasPage() {
  return <AlianzasLanding variant="planners" />;
}
