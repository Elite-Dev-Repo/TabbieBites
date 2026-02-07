import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

import Footer from "./components/Footer";
import MiniGallery from "./components/MiniGallery";

const App = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <About />
      <Services />
      <MiniGallery />

      <Footer />
    </>
  );
};

export default App;
