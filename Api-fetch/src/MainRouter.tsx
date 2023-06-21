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
import Detail from "./pages/Detail";
import SharedLayout from "./pages/SharedLayout";

function MainRouter() {
  return (
    <BrowserRouter>
      {/* header */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<App />} />
        <Route path="about-us" element={<About />} />
        <Route path="about-us/:userId" element={<Detail />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
