import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import RecentWork from "./components/RecentWork";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <RecentWork />
      <Team />
      <Footer />
    </div>
  );
}