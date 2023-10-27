import DashboardContainer from "../../../components/Ui/DashboardContainer";
import FormInputDash from "../../../components/Form/FormInputDash";
import InputFile from "../../../components/Form/InputFile";
import Button from "../../../components/Ui/Button";
import InputSelect from "../../../components/Ui/InputSelect";
import useUpdate from "../../../hooks/useUpdate ";
import Loader from "../../../components/Loader";
import {
  clearErrors,
  singleStore,
  updateStore,
} from "../../../slice/store/storeAction";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSingle from "../../../hooks/useSingle";

const links = [
  {
    name: "stores",
    link: "stores",
  },
  {
    name: "update",
  },
];

const UpdateStore = () => {
  const { id } = useParams();
  const { loading: updateLD, data } = useSingle({
    states: "singleStore",
    callfun: singleStore,
  });

  const { loading, handelUpdate, errors } = useUpdate({
    states: "updateStore",
    updateFn: updateStore,
    clearFn: clearErrors(),
  });

  const [name, setName] = useState("");
  const [disc, setDisc] = useState("");
  const [status, setStatus] = useState("");
  const [errs, setErrs] = useState();

  const fetchData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    name && formData.append("name", name);
    disc && formData.append("disc", disc);
    status && formData.append("status", status);
    formData.append("_method", "put");
    handelUpdate({ id, dat: formData });
  };

  useEffect(() => {
    if (data?.name) {
      setName(data?.name);
      setDisc(data?.disc);
      setStatus(data?.status);
    }
  }, [data]);
  console.log(data);

  if (loading || updateLD) {
    return <Loader />;
  }
  return (
    <DashboardContainer ttl="Update Store" links={links}>
      <div className="border m-auto px-6 border-slate-300 rounded-lg max-w-[800px] w-full min-w-[300px] py-4">
        <h3 className="font-semibold text-xl pb-2">Update </h3>
        <form
          className="flex flex-col justify-start items-start w-[750px]"
          onSubmit={fetchData}
        >
          <FormInputDash
            placeholder="Store Name..."
            ttl="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            error={errors?.name}
          />
          <FormInputDash
            placeholder="Store Disc..."
            ttl="Disc"
            type="text"
            onChange={(e) => setDisc(e.target.value)}
            error={errors?.disc}
          />

          <InputFile name="logo" label="Selcet Logo img" error={errs?.logo} />
          <InputFile
            name="cover"
            label="Select Cover img"
            error={errs?.cover}
          />
          <InputSelect
            label="Status"
            name="status"
            options={[
              { name: "Active", val: "active" },
              { name: "disactive", val: "disactive" },
            ]}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <Button
            type="submit"
            text="Update"
            variant={"default"}
            className="bg-green-500 text-slate-50 w-full rounded-md"
          />
        </form>
      </div>
    </DashboardContainer>
  );
};

export default UpdateStore;
