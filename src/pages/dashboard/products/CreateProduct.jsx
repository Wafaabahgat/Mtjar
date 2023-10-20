import FormInputDash from "../../../components/Form/FormInputDash";
import InputFile from "../../../components/Form/InputFile";
import Button from "../../../components/Ui/Button";
import DashboardContainer from "../../../components/Ui/DashboardContainer";
import InputSelect from "../../../components/Ui/InputSelect";

const CreateProduct = () => {
  return (
    <DashboardContainer ttl="Product">
      <div className="border m-auto px-6 border-slate-300 rounded-lg max-w-[800px] w-full min-w-[300px] py-4">
        {/* <DashboardContainer ttl="Create New Store" /> */}
        <h3 className="font-semibold text-xl pb-2">Create New Product</h3>
        <form className="flex flex-col justify-start items-start w-[750px]">
          <FormInputDash placeholder="Store Name..." ttl="Name" type="text" />
          <FormInputDash placeholder="Store Disc..." ttl="Disc" type="text" />
          <FormInputDash placeholder="Store Price..." ttl="Price" type="text" />
          <FormInputDash
            placeholder="Compare-Price..."
            ttl="Compare-Price"
            type="text"
          />
          <InputSelect
            label="Category"
            name="Category"
            options={[
              { name: "Active", val: "active" },
              { name: "disactive", val: "disactive" },
            ]}
          />
          <InputSelect
            label="Store"
            name="Store"
            options={[
              { name: "Active", val: "active" },
              { name: "disactive", val: "disactive" },
            ]}
          />
          <InputFile label="Select Store Img" name="jj" />

          <InputSelect
            label="new"
            name="Type"
            options={[
              { name: "Active", val: "active" },
              { name: "disactive", val: "disactive" },
            ]}
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

export default CreateProduct;
