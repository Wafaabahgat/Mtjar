import Carousels from "./Carousels";
import Categories from "./Categories";
import HotProd from "./HotProd";
import Title from "../components/Ui/Title";
import NewProd from "./NewProd";
import TopProd from "./TopProd";
import BestSellingProd from "./BestSellingProd";

const Home = () => {
  return (
    <>
      <div className="flex flex-col p-4 mt-20 flex-1 ">
        <Carousels />
        {/* Category */}
        <Categories />

        {/* Products */}
        <NewProd />

        {/* hotProd */}
        <HotProd />

        {/* topProd */}
        <TopProd />
        <BestSellingProd/>
      </div>
    </>
  );
};

export default Home;
