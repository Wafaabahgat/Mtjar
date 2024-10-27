import MetaDate from "../../lib/metaDate";

const Checkout = () => {
  return (
    <div className="flex flex-col mt-24">
      <MetaDate ttl="checkout - page" disc="The Cart page" />

      <div>
        <h2 className="my-14 text-2xl font-bold text-main md:text-4xl text-start px-5">
          Checkout
        </h2>
        <p>Thank you for your order</p>
        <div className="flex-1 max-w-lg bg-slate-200/35 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Shipping Address
          </h3>
          <div className="mt-4 space-y-2">
            <p>
              <span className="font-semibold">Name:</span>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>
            </p>
            <p>
              <span className="font-semibold">Address:</span>
            </p>
            <p>
              <span className="font-semibold">Country:</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
