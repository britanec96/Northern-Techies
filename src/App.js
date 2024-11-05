import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Wrapper } from "./components/wrapper";
import { Header } from "./components/header";
import { Home } from './pages/Home';
import  About  from "./pages/About";
import { Order } from "./pages/Order";
import  Testimonials  from "./pages/Testimonials";
import  Portfolio  from "./pages/Portfolio";
import  Contact  from "./pages/Contact";
import  Pricing  from "./pages/Pricing";
import { Footer } from "./components/footer";
import WebDev from "./pages/Webdev";
import GraphicDesignPage from "./pages/GraphicDesign";

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
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
          <Route path="/order" element={<Order />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;

