import Carousels from "./Carousels";
import Categories from "./Categories";
import NewProd from "../components/Products/NewProd";
import MetaDate from "../lib/metaDate";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const Home = () => {
  const { loading, data } = useSelector((state) => state.home);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex flex-col flex-1 p-4 mt-20">
        <MetaDate ttl="Home" disc="home page" />
        <Carousels />
        {/* Category */}
        <Categories />
        {/* Products */}

        <NewProd data={data.newProd} ttl="New Products" />
        <NewProd data={data.topProd} ttl="Top Products" />
        <NewProd data={data.hotProd} ttl="Hot Products" />
        <NewProd data={data.bestSellingProd} ttl="Best Products" />
      </div>
    </>
  );
};

export default Home;
