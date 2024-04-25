import Brands from "../Components/BusinessPage/Brands";
import BusinessHero from "../Components/BusinessPage/BusinessHero";
import CompaniesInfo from "../Components/BusinessPage/CompaniesInfo";
import Learnmore from "../Components/BusinessPage/Learnmore";

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <CompaniesInfo />
      <Brands />
      <Learnmore />
    </>
  );
}
