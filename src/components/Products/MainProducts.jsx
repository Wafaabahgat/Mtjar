import MetaDate from "../../lib/metaDate";
import ProductCard from "./ProductCard";
import Pagination from "../Ui/Pagination";
import Filter from "./Filter";

const MainProducts = ({data}) => {
  return (
    <>
      <div className="flex-l p-4 mt-20">
        <MetaDate ttl="Products" disc="Products page" />
        <div className="flex gap-4">
          <Filter/>
          <ProductCard />
        </div>

        <div className="my-5 mx-6">
          <Pagination data={data} />
        </div>
      </div>
    </>
  );
};

export default MainProducts;
