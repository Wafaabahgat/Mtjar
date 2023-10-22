import { useEffect, useState } from "react";
import FormInputDash from "../../../components/Form/FormInputDash";
import InputFile from "../../../components/Form/InputFile";
import Button from "../../../components/Ui/Button";
import DashboardContainer from "../../../components/Ui/DashboardContainer";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import useCreate from "../../../hooks/useCreate";

const CreateCategory = () => {
  const { data } = useSelector((state) => state.categories);
  const { loading, errors } = useCreate({
    states: "createCategory",
  });
  const [name, setName] = useState("");
  const [disc, setDisc] = useState("");
  const [image, setImage] = useState();
  const [errs, setErrs] = useState();
  const [parent_id, setparent_id] = useState("");

  const fetchData = (e) => {
    e.preventDefault();
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <DashboardContainer ttl="Category">
      <div className="border m-auto px-6 border-slate-300 rounded-lg max-w-[800px] w-full min-w-[300px] py-4">
        {/* <DashboardContainer ttl="Create New Store" /> */}
        <h3 className="font-semibold text-xl pb-2">Create New Category</h3>
        <form
          className="flex flex-col justify-start items-start w-[750px]"
          onSubmit={fetchData}
        >
          <FormInputDash
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Category Name..."
            ttl="Name"
            type="text"
          />
          <FormInputDash
            value={disc}
            onChange={(e) => setDisc(e.target.value)}
            placeholder="Category Disc..."
            ttl="Disc"
            type="text"
          />
          <InputFile
            label="Select Category Img"
            name="jj"
            onChange={(e) => setImage(e)}
            error={errs?.image}
          />
          <InputFile
            label="Parent category"
            name="parent_id"
            onChange={(e) => setparent_id(e.target.value)}
            error={errs?.parent_id}
          />

          <Button
            type="submit"
            text="Create"
            variant={"default"}
            className="bg-green-500 text-slate-50 w-full rounded-md"
          />
        </form>
      </div>
    </DashboardContainer>
  );
};

export default CreateCategory;
