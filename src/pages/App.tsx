import Header from "../universal/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import AboutUs from "./about_us/AboutUs";
import Contact from "./contact/Contact";
import Press from "./press/Press";
import Faq from "./faq/Faq";
import Download from "./download/Download";
import NotFound from "./404/NotFound";
import LegalTemplate from "./legal_template/LegalTemplate";
import Popup from "../universal/organisms/Popup";
import { useEffect, useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let pop_status = localStorage.getItem("pop_status");
    if (pop_status != "1") {
      setVisible(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={visible ? <Popup setVisible={setVisible} /> : <Header />}
        >
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="press" element={<Press />} />
          <Route path="faq" element={<Faq />} />
          <Route path="download" element={<Download />} />
          <Route path="imprint" element={<LegalTemplate type="imprint" />} />
          <Route path="privacy" element={<LegalTemplate type="privacy" />} />
          <Route path="terms" element={<LegalTemplate type="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
