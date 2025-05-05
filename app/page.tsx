import Header from "./_components/header";
import LandingPage from "./_components/landing-page";
import Features from "./_components/features/Features";
import AboutUs from "./_components/about-us";
import Agent from "./_components/agent/Agent";
import ContactUs from "./_components/contact-us";
import Footer from "./_components/footer";
import Float from "./_components/float/flot";
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
      <Float/>
    </div>
  );
}
