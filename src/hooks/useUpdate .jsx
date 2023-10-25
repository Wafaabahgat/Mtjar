import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const useUpdate = ({ states, updateFn, clearFn }) => {
  const { loading, msg, errors, success } = useSelector(
    (state) => state[`${states}`]
  );
  const dispatch = useDispatch();

  const handelUpdate = (data) => {
    dispatch(updateFn(data));
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
    if (success === false) {
      toast.error(errors);
    }
  }, [success, msg, errors, dispatch]);

  return { handelUpdate, loading: loading, errors };
};

export default useUpdate;
