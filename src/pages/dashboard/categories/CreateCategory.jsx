import FormInputDash from "../../../components/Form/FormInputDash";
import InputFile from "../../../components/Form/InputFile";
import Button from "../../../components/Ui/Button";
import DashboardContainer from "../../../components/Ui/DashboardContainer";

const CreateCategory = () => {
  return (
    <DashboardContainer ttl="Category">
      <div className="border m-auto px-6 border-slate-300 rounded-lg max-w-[800px] w-full min-w-[300px] py-4">
        {/* <DashboardContainer ttl="Create New Store" /> */}
        <h3 className="font-semibold text-xl pb-2">Create New Category</h3>
        <form className="flex flex-col justify-start items-start w-[750px]">
          <FormInputDash placeholder="Category Name..." ttl="Name" type="text" />
          <FormInputDash placeholder="Category Disc..." ttl="Disc" type="text" />

          <InputFile label="Select Category Img" name="jj" />
          <InputFile label="Select Cover Img" name="jj" />

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
