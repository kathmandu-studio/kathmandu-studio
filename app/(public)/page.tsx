import {
  CertifiedPartners,
  Hero,
  Partners,
  Insights,
  Thumbnails,
} from "components/pages/home";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-24 py-8 sm:py-12">
      <Hero />
      <Insights />
      <Thumbnails />
      <Partners />
      <CertifiedPartners />
    </div>
  );
}
