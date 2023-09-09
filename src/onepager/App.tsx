import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import AboutUs from "./about_us/AboutUs";
import Contact from "./contact/Contact";
import Press from "./press/Press";
import Faq from "./faq/Faq";
import Download from "./download/Download";
import VOV from "./404/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="press" element={<Press />} />
          <Route path="faq" element={<Faq />} />
          <Route path="download" element={<Download />} />
          <Route path="*" element={<VOV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
