import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import MainNavbar from "./components/navbar/MainNavbar";

const App = () => {
  return (
    <div className="md:px-[100px] px-[20px]">
      <MainNavbar />
      <HeroSection />
      <Skills />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
