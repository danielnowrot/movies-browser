import { useDispatch, useSelector } from "react-redux";
import { axiosPersonList, selectPersonList } from "../personListSlice";
import { useEffect } from "react";

export const PersonList = () => {
  const dispatch = useDispatch();
  const perosnList = useSelector(selectPersonList);

  useEffect(() => {
    dispatch(axiosPersonList());
  }, [dispatch]);

  return <div>{/* Lista popularnych ludzi. */}</div>;
};
