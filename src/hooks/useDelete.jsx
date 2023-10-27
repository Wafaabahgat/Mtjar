import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const useDelete = ({ states, delFun, clearFun,recalFun }) => {
  const { loading, errors, msg, success } = useSelector(
    (state) => state[`${states}`]
  );

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(delFun(id));
  };
  useEffect(() => {
    if (success === false && msg) {
      toast.error(msg);
      dispatch(clearFun);
    }
    if (success && msg) {
      toast.success(msg);
      dispatch(clearFun);
      dispatch(recalFun());
    }
    if (success === false && errors) {
      toast.error(errors);
    }
  }, [success, msg, errors, dispatch]);

  return { loading: loading, handleDelete };
};

export default useDelete;
