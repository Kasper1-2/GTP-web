import Navbar from "./components/layouts/navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import DriversSection from "./components/sections/DriverSection";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DriversSection />
      <Footer />
    </div>
  );
}

export default App;
