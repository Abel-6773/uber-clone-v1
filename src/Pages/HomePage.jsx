// import Footer from "../Components/Footer/Footer";
import AboutUs from "../Components/HomePage/AboutUs";
import AppSection from "../Components/HomePage/AppSection";
import Hero from "../Components/HomePage/Hero";
import HamMenuContext from "../Services/Context/HamMenuContext";
import { useContext } from "react";
// import Input from "../Components/HomePage/Input";
// import ToTopBtn from "../Components/HomePage/ToTopBtn";

export default function HomePage() {
  const { HamMenuActive } = useContext(HamMenuContext);

  return (
    <main>
      <Hero />
      {/* <ToTopBtn /> */}
      <AboutUs />
      <AppSection />
    </main>
    // !HamMenuActive && (

    // )
  );
}
