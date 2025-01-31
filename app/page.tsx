import Header from "./header";
import LandingPage from "./landing-page";
import Features from "./features/Features";
import AboutUs from "./about-us";
import Agent from "./agent/Agent";

export default function Home() {
  return (
    <div>
      <Header/>
      <LandingPage/>
      <Features/>
      <AboutUs/>
      <Agent/>
    </div>
  );
}
