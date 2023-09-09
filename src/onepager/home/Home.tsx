import Download from "../Download";
import Banner from "./Banner";
import Explore from "./Explore";
import Infos from "./Infos";
import Referals from "./Referals";

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
    </>
  );
}

export default Home;
