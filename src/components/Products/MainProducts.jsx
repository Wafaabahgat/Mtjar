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
    <div className="p-4 mt-20 flex-l">
      <MetaDate ttl="All Products" disc="Products page" />
      <Breadcamp isDash={false} ttl="All Products" links={links} />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
        <Filter />
        {/* ProductCard */}
        <div className="flex flex-col items-center justify-center col-span-2 mt-10 md:col-span-2 lg:col-span-3">
          <Search />
          <div className="flex mt-2">
            <div className="px-4 py-8 border-t border-l rounded-md shadow-2xl ">
              <div className="grid w-full grid-cols-1 gap-4 p-2 sm:grid-cols-2 lg:grid-cols-3">
                {data?.data?.map((e) => {
                  return <ProductCard product={e} key={e.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-6 my-5">
        <Pagination data={data} />
      </div>
    </div>
  );
};

export default MainProducts;
