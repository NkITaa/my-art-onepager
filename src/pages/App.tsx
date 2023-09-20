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
import Cookies from "../universal/organisms/Cookies";
import { useEffect, useState } from "react";
import { delay } from "framer-motion";

function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let pop_status = localStorage.getItem("pop_status");
    if (pop_status != "1") {
      setVisible(true);
    }
  }, []);

  const [art, setArt] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://www.rijksmuseum.nl/api/nl/collection?key=QVttoz6o&f.dating.period=20&imgonly=true&culture=en&material=olieverf&ps=1&p=${Math.floor(
        Math.random() * 83
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArt(data.artObjects[0].webImage.url);
        delay(function () {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return loading ? (
    <div className="w-screen h-screen bg-white dark:bg-neutral-900  flex flex-col justify-center items-center">
      <div className="w-24 h-24 ">
        <svg
          aria-hidden="true"
          className="w-24 h-24 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white dark:fill-neutral-900 self-center"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </div>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route
          path="my-art-onepager/"
          element={visible ? <Cookies setVisible={setVisible} /> : <Header />}
        >
          <Route path="about" element={<AboutUs art={art} />} />
          <Route path="contact" element={<Contact art={art} />} />
          <Route path="press" element={<Press />} />
          <Route path="faq" element={<Faq />} />
          <Route path="download" element={<Download />} />
          <Route path="imprint" element={<LegalTemplate type="imprint" />} />
          <Route path="privacy" element={<LegalTemplate type="privacy" />} />
          <Route path="terms" element={<LegalTemplate type="terms" />} />
          <Route index element={<Home art={art} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
