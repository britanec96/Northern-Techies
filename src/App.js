import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Wrapper } from "./components/wrapper";
import { Header } from "./components/header";
import { Home } from './pages/Home';
import  About  from "./pages/About";
import Order  from "./pages/Order";
import  Testimonials  from "./pages/Testimonials";
import  Portfolio   from "./pages/Portfolio";
import  Contact  from "./pages/Contact";
import  Pricing  from "./pages/Pricing";
import { Footer } from "./components/footer";
import WebDev from "./pages/Webdev";
import GraphicDesignPage from "./pages/GraphicDesign";
import AiContentCreation from "./pages/ContentCreation";
import MotionGraphics from "./pages/MotionGraphics";
import ConsultationServices from "./pages/ConsultingServ";
import ScrollToTopButton from "./components/ScrollToTopButton/";
import ScrollToTop from "./components/ScrollToTopPages";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6783c138af5bfec1dbea78dd/1ihdalhk5';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);


  return (
    <Router>
      <Wrapper>
        <Header />
        <ScrollToTopButton />
        <ScrollToTop />
        </Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/web-development" element={<WebDev />} />
          <Route path="/graphic-design" element={<GraphicDesignPage />} />
          <Route path="/ai-content-creation" element={<AiContentCreation />} />
          <Route path="/motion-graphics" element={<MotionGraphics />} />
          <Route path="/consultationservices" element={<ConsultationServices />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;

