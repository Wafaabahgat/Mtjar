import { FaStar } from "react-icons/fa6";
import Title from "../Ui/Title";
import CartIcon from "../cart/CartIcon";
import notFound from "../../assets/notFound.png";
import Container from "../Ui/Container";

const NewProd = ({ data = [], ttl }) => {
  return (
    <Container className="mt-10">
      <Title
        ttl={ttl}
        className="text-main py-2 font-semibold md:text-2xl text-xl text-start"
      />

      <div className="lg:px-12 md:px-10 sm:px-8 px-6 mt-4 grid grid-cols-plog gap-4">
        {data?.map((e) => (
          <div
            key={e.id}
            className="w-full border px-2 py-2 hover:border-main rounded-md "
          >
            <img
              className="object-contain w-full max-h-[120px] mb-4"
              src={e?.image_url ? e.image_url : notFound}
              alt=""
            />
            <div className="text-start px-3">
              <h2 className="text-[12px] text-gray-400 py-2">{e.name}</h2>
              <p className="md:text-lg text-[15px] line-clamp-3 text-black">{e.disc}</p>

              <div className="flex my-2 gap-2">
                <div className="flex items-center text-yellow-400 text-lg">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="mt-1 text-lg text-gray-400">{e.rating}</p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="md:text-lg text-[15px] font-semibold">{e.price}$</h3>
                <CartIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default NewProd;
