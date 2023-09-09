import Download from "../Download";
import Footer from "../Footer";
import Banner from "./Banner";
import Explore from "./Explore";
import Infos from "./Infos";
import Referals from "./Referals/Referals";

function Home() {
  return (
    <>
      <Banner />
      <Infos />
      <Infos />
      <Infos />
      <Explore />
      <Referals />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
