import Header from "./header";
import LandingPage from "./landing-page";
import Features from "./features/Features";
import AboutUs from "./about-us";
import Agent from "./agent/Agent";
import ContactUs from "./contact-us";
import Footer from "./footer";
export default function Home() {
  return (
    <div>
      <Header/>
      <LandingPage/>
      <Features/>
      <AboutUs/>
      <Agent/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
