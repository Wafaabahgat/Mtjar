import { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const useCreate = ({states}) => {

    const dispatch = useDispatch();
    const { loading, msg, errors, success } = useSelector(
      (state) => state[`${states}`]
    );

    useEffect(() => {
        if (success === false && msg) {
          toast.error(msg);
        }
        if (success && msg) {
          toast.success(msg);
        }
      }, [success, msg, errors]);
    return {
        loading: loading,
        errors,
      };
}

export default useCreate
