import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../features/Auth/authSlice";
import { getUserThunk } from "../features/Auth/authThunks";
import { StateDispatchType } from "../store/store";

function useAuth() {
  const dispatch = useDispatch<StateDispatchType>();
  const user = useSelector(userSelector);
  useEffect(() => {
    async function waiter() {
      if (!user?.email) {
        await dispatch(getUserThunk());
      }
    }
    waiter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
}

export default useAuth;
