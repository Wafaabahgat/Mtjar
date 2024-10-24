import { useDispatch, useSelector } from "react-redux";

const useUpdate = ({ states, updateFn }) => {
  const { loading, errors } = useSelector((state) => state[`${states}`]);
  const dispatch = useDispatch();

  const handelUpdate = (data) => {
    dispatch(updateFn(data));
  };

  return { handelUpdate, loading: loading, errors };
};

export default useUpdate;
