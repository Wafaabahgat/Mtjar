import Carousels from "./Carousels";
import Categories from "./Categories";
import HotProd from "./HotProd";
import NewProd from "./NewProd";
import TopProd from "./TopProd";
import BestSellingProd from "./BestSellingProd";
import MetaDate from "../lib/metaDate";
const Home = () => {
  return (
    <>
      <div className="flex flex-col p-4 mt-20 flex-1 ">
        <MetaDate ttl="Home" disc="home page" />
        <Carousels />
        {/* Category */}
        <Categories />
        {/* Products */}
        <NewProd />
        {/* hotProd */}
        <HotProd />
        {/* topProd */}
        <TopProd />
        <BestSellingProd />
      </div>
    </>
  );
};

export default Home;
