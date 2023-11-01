import Carousels from "../components/Form/carousels";
import Title from "../components/Ui/Title";

const Home = () => {
  return (
    <>
      <div className="flex flex-col p-4 mt-20 flex-1 ">
        <Carousels />
        {/* Category */}
        <div className="flex flex-col items-center justify-center mt-10">
          <Title
            ttl="Categories"
            className="bg-green-100 w-[500px] p-2 font-semibold text-xl"
          />
          <div className="flex flex-col p-4 mt-2 flex-1  ">
            <div className="w-[1100px] h-[300px] mx-auto bg-green-400 rounded-md py-8 px-4 flex gap-2 items-center justify-center">
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Products */}
        {/* newProd */}
        <div className="flex flex-col items-center justify-center mt-10">
          <Title
            ttl="newProd"
            className="bg-green-100 w-[500px] p-2 font-semibold text-xl"
          />
          <div className="flex flex-col p-4 mt-2 flex-1  ">
            <div className="w-[1100px] h-[300px] mx-auto bg-green-400 rounded-md py-8 px-4 flex gap-2 items-center justify-center">
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
            </div>
          </div>
        </div>

        {/* hotProd */}
        <div className="flex flex-col items-center justify-center mt-10">
          <Title
            ttl="hotProd"
            className="bg-green-100 w-[500px] p-2 font-semibold text-xl"
          />
          <div className="flex flex-col p-4 mt-2 flex-1  ">
            <div className="w-[1100px] h-[300px] mx-auto bg-green-400 rounded-md py-8 px-4 flex gap-2 items-center justify-center">
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white   rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white  rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white  rounded-md "></div>
            </div>
          </div>
        </div>

        {/* topProd */}
        <div className="flex flex-col items-center justify-center mt-10">
          <Title
            ttl="topProd"
            className="bg-green-100 w-[500px] p-2 font-semibold text-xl"
          />
          <div className="flex flex-col p-4 mt-2 flex-1  ">
            <div className="w-[1100px] h-[300px] mx-auto bg-green-400 rounded-md py-8 px-4 flex gap-2 items-center justify-center">
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
              <div className="w-[200px] h-[200px] bg-white rounded-md "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
