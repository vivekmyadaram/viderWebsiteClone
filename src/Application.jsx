import React from "react";
import ReactNavbar from "./ReactNavbar";
import AAA from "./Vider/AAA";
import Banner from "./Vider/Banner";
import BenefitsOfVider from "./Vider/BenefitsOfVider";
import Footer from "./Vider/Footer";
import OurProducts from "./Vider/OurProducts";
import { ReactSwiper } from "./Vider/ReactSwiper";
import Services from "./Vider/Services";
import ServicesTabs from "./Vider/ServicesTabs";
import SmartPlugs from "./Vider/SmartPlugs";
import StandOutUnique from "./Vider/StandOutUnique";
import ViderCaFirms from "./Vider/ViderCaForms";
import VisionMission from "./Vider/VisionMission";
import UseEffectDemo from "./UseEffectDemo";

const Application = () => {
  return (
    <div>
      <UseEffectDemo />
      <ReactNavbar />
      <Banner />
      <VisionMission />
      <OurProducts />
      <SmartPlugs />
      <BenefitsOfVider />
      <ReactSwiper />
      <ViderCaFirms />
      <Services />
      <ServicesTabs />
      <StandOutUnique />
      <AAA />
      <Footer />
    </div>
  );
};

export default Application;
