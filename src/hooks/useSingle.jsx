import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useSingle = ({ states, callfun }) => {
  const { id } = useParams();

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
  }, [success, msg, errors,id]);

  useEffect(() => {
    const fetchData = () => {
      dispatch(callfun(id));
    };
    fetchData();
  }, [dispatch,id]);

  return { loading: loading, data };
};

export default useSingle;
