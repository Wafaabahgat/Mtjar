/* eslint-disable react/prop-types */

import Title from "../Ui/Title";
import Container from "../Ui/Container";
import ProductCard from "./ProductCard";

const NewProd = ({ data = [], ttl }) => {
  return (
    <Container className="mt-10">
      <Title
        ttl={ttl}
        className="text-main py-2 font-semibold md:text-2xl text-xl text-start"
      />

      <div className="lg:px-12 md:px-10 sm:px-8 px-6 mt-4 grid grid-cols-plog gap-4">
        {data?.map((e) => {
          return <ProductCard product={e} key={e.id} />;
        })}
      </div>
    </Container>
  );
};

export default NewProd;
