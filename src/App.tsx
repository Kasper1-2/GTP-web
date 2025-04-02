import Navbar from "./components/layouts/navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import DriversSection from "./components/sections/DriverSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DriversSection />
    </div>
  );
}

export default App;
