import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useGet = ({ states, allData }) => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const { loading, data, errors, success } = useSelector(
    (state) => state[`${states}`]
  );

  useEffect(() => {
    const fetchData = () => {
      dispatch(allData(search));
    };
    fetchData();
  }, [search, dispatch]);

  useEffect(() => {
    if (success === false && errors) {
      toast.error(errors);
    }
  }, [success, errors]);

  return { data, loading: loading };
};

export default useGet;
