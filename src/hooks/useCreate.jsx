import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const useCreate = ({ states, createFn, clearFn }) => {
  const dispatch = useDispatch();
  const { loading, msg, errors, success } = useSelector(
    (state) => state[`${states}`]
  );

  const handelCreate = (data) => {
    dispatch(createFn(data));
  };

  useEffect(() => {
    if (success === false && msg) {
      toast.error(msg);
      dispatch(clearFn);
    }
    if (success && msg) {
      toast.success(msg);
      dispatch(clearFn);
    }
  }, [success, msg, errors]);
  return {
    loading: loading,
    errors,
    handelCreate,
  };
};

export default useCreate;
