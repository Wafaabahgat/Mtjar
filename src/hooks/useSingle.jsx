import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useSingle = ({ states, callfun }) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state[`${states}`]);

  // useEffect(() => {
  //   if (success === false && msg) {
  //     toast.error(msg);
  //   }
  //   if (success && msg) {
  //     toast.success(msg);
  //   }
  //   if (success === false) {
  //     toast.error(errors);
  //   }
  // }, [success, msg, errors, id]);

  useEffect(() => {
    const fetchData = () => {
      dispatch(callfun(id));
    };
    fetchData();
  }, [dispatch, id]);

  return { loading: loading, data: data };
};

export default useSingle;
