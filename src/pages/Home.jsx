import Carousels from "./Carousels";
import Categories from "./Categories";
import HotProd from "./HotProd";
import NewProd from "./NewProd";
import TopProd from "./TopProd";
import BestSellingProd from "./BestSellingProd";
import MetaDate from "../lib/metaDate";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const Home = () => {
  const { loading, data, errors } = useSelector((state) => state.home);

  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <>
      <div className="flex flex-col p-4 mt-20 flex-1 ">
        <MetaDate ttl="Home" disc="home page" />
        <Carousels />
        {/* Category */}
        <Categories />
        {/* Products */}
        <NewProd data={data.newProd} ttl="New Products"/>
        <NewProd data={data.hotProd} ttl="Hot Products"/>
        <NewProd data={data.bestSellingProd} ttl="Best Products"/>
        <NewProd data={data.topProd} ttl="Top Products"/>
      
      </div>
    </>
  );
};

export default Home;
