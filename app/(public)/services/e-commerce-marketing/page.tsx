import {
  Approach,
  Expectations,
  FAQs,
  Hero,
  Insights,
  StartProject,
} from "components/pages/services";
import { SITE } from "config/constants";
import data from "data/services.json";

export const metadata = {
  title: `E-commerce Marketing | ${SITE.name}`,
  description: data.eCommerceMarketing.hero.h1,
};

export default function ECommerceMarketing() {
  const { hero, approach, insights, expectations, faqs, startProject } =
    data.eCommerceMarketing;

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
