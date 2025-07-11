import { useRef } from "react";
import Background from "../../components/Background/Background";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LanguageIcons from "../../components/LanguageIcons/LanguageIcons";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioExam from "../../components/PortfolioExam/PortfolioExam";
import Services from "../../components/Services/Services";

function Home() {
  const MainRef = useRef<HTMLDivElement | null>(null);
  const scrollToMain = () =>
    MainRef.current?.scrollIntoView({ behavior: "smooth" });

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const scrollToServices = () =>
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });

  const PortfolioRef = useRef<HTMLDivElement | null>(null);
  const scrollToPortfolio = () =>
    PortfolioRef.current?.scrollIntoView({ behavior: "smooth" });

  const ContactUsRef = useRef<HTMLDivElement | null>(null);
  const scrollToContactUs = () =>
    ContactUsRef.current?.scrollIntoView({ behavior: "smooth" });

  const AboutUsRef = useRef<HTMLDivElement | null>(null);
  const scrollToAboutUs = () =>
    AboutUsRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative">
      <div className="absolute z-0">
        <Background />
      </div>
      <div className="absolute z-10 flex flex-col h-[206px] sm:h-auto">
        <div ref={MainRef}></div>
        <div className="relative bottom-5 z-20">
          <Navbar
            onServicesClick={scrollToServices}
            onPortfolioClick={scrollToPortfolio}
            onContactUsClick={scrollToContactUs}
            onMainClick={scrollToMain}
            onAboutUsClick={scrollToAboutUs}
          />
        </div>

        <Header />

        <LanguageIcons />
        <div
          ref={servicesRef}
          className="relative bottom-10 sm:bottom-10"
        ></div>
        <Services />

        <div
          ref={PortfolioRef}
          className="relative bottomمحمدمِهدی-0 sm:bottom-10"
        ></div>
        <PortfolioExam />

        <div
          ref={ContactUsRef}
          className="relative top-[-650px] sm:top-5"
        ></div>
        <ContactUs />

        <div ref={AboutUsRef} className="relative top-80"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
