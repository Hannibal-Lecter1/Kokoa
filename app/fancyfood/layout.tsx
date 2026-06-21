import type { Metadata } from "next";
import AnalyticsTracker from "@/components/AnalyticsTracker";

export const metadata: Metadata = {
  title: "LeKokoa at Summer Fancy Food Show 2026 · Booth 3810",
  description:
    "Meet LeKokoa at the Summer Fancy Food Show 2026, Booth 3810. Discover our frozen fruit range and Cacao Superfruit Nectar. Request samples or book a meeting.",
};

export default function FancyFoodLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnalyticsTracker />
      {children}
    </>
  );
}
