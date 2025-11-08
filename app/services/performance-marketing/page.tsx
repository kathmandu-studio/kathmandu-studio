import {
  Approach,
  Banner,
  FAQs,
  Hero,
  StartProject,
} from "components/services";
import data from "data/services.json";

export default function PerformanceMarketing() {
  const { banner, hero, approach, faqs, startProject } =
    data.performanceMarketing;

  return (
    <div className="flex flex-col gap-12 md:gap-24 py-6 sm:py-12">
      <Banner src={banner.src} alt={banner.alt} />
      <Hero data={hero} />
      <Approach data={approach} />
      <FAQs data={faqs} />
      <StartProject data={startProject} />
    </div>
  );
}
