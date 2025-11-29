import {
  Approach,
  FAQs,
  Hero,
  Insights,
  StartProject,
} from "components/services";
import Expectations from "components/services/Expectations";
import data from "data/services.json";

export default function SocialMediaMarketing() {
  const { hero, approach, insights, expectations, faqs, startProject } =
    data.socialMediaMarketing;

  return (
    <div className="flex flex-col gap-12 md:gap-24 py-8 sm:py-12">
      <Hero data={hero} />
      <Approach data={approach} />
      <Insights data={insights} />
      <Expectations data={expectations} />
      <FAQs data={faqs} />
      <StartProject data={startProject} />
    </div>
  );
}
