import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useSingle = ({ states, callfun }) => {
    const params = useParams()?.id;

  const dispatch = useDispatch();
  const { loading, msg, errors, success, data } = useSelector(
    (state) => state[`${states}`]
  );

  useEffect(() => {
    if (success === false && msg) {
      toast.error(msg);
    }
    if (success && msg) {
      toast.success(msg);
    }
    if (success === false) {
      toast.error(errors);
    }
  }, [success, msg, errors,params]);

  useEffect(() => {
    const fetchData = () => {
      dispatch(callfun(params));
    };
    fetchData();
  }, [dispatch]);

  return { loading: loading, data };
};

export default useSingle;
