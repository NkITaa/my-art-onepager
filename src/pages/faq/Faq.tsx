import Footer from "../../universal/footer/Footer";
import Presskit from "../../universal/Presskit";
import Questions from "./Questions";

function Faq({ art }: { art: string }) {
  return (
    <>
      <Questions />
      <Presskit art={art} />
      <Footer slate />
    </>
  );
}

export default Faq;
