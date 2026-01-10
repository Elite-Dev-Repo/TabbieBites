import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

import Contact from "./components/Contact";
import MiniGallery from "./components/MiniGallery";

const App = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <About />
      <Services />
      <Contact />
      <MiniGallery />
    </>
  );
};

export default App;
