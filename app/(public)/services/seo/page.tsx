import { PageTitle } from "components/layout";
import {
  Approach,
  Expectations,
  FAQs,
  Hero,
  Insights,
  StartProject,
} from "components/pages/services";
import data from "data/services.json";

export default function SEO() {
  const { hero, approach, insights, expectations, faqs, startProject } =
    data.seo;

  return (
    <>
      <PageTitle title="SEO" />
      <div className="flex flex-col gap-12 md:gap-24 py-8 sm:py-12">
        <Hero data={hero} />
        <Approach data={approach} />
        <Insights data={insights} />
        <Expectations data={expectations} />
        <FAQs data={faqs} />
        <StartProject data={startProject} />
      </div>
    </>
  );
}
