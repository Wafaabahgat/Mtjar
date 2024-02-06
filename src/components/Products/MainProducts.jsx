import MetaDate from "../../lib/metaDate";
import ProductCard from "./ProductCard";
import Pagination from "../Ui/Pagination";
import Filter from "./Filter";
import Breadcamp from "../Ui/Breadcamp";
import Search from "../Ui/Search";
import Title from "../Ui/Title";
import useGet from "../../hooks/useGet";
import { mainProducts } from "../../slice/Home/MainProductsAction";
import Loader from "../Loader";

const links = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/mainProducts" },
];
const MainProducts = () => {
  const { loading, data } = useGet({
    states: "MainProducts",
    allData: mainProducts,
  });

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex-l p-4 mt-20">
        <MetaDate ttl="All Products" disc="Products page" />
        <Breadcamp isDash={false} ttl="Products" links={links} />

        <div className="flex gap-4">
          <Filter />
          {/* ProductCard */}
          <div className="flex flex-col items-center justify-center mt-10">
            <Title
              ttl="All Products"
              className="bg-green-100 w-[500px] p-2 font-semibold text-xl mb-4"
            />
            <Search />
            <div className="flex mt-2">
              <div className="w-[1000px] shadow-2xl border-t border-l rounded-md py-8 px-4">
                <div className="w-full gap-4 p-2 grid grid-cols-3">
                  {data?.data?.map((e) => {
                    return <ProductCard product={e} key={e.id} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 mx-6">
          <Pagination data={data} />
        </div>
      </div>
    </>
  );
};

export default MainProducts;
