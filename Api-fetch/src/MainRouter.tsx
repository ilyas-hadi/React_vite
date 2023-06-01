import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Error from "./pages/Error";
import App from "./App";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function MainRouter() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route />
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default MainRouter;
