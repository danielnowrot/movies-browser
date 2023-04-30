import { useDispatch, useSelector } from "react-redux";
import { axiosPersonDetails, selectPersonDetails } from "../personDetailsSlice";
import { useEffect } from "react";
import { selectPersonCredits, axiosPersonCredits } from "../personCreditsSlice";

export const PersonDetails = () => {
  const dispatch = useDispatch();
  const personDetails = useSelector(selectPersonDetails);
  const personCredits = useSelector(selectPersonCredits);

  useEffect(() => {
    dispatch(axiosPersonDetails());
  }, [dispatch]);

  useEffect(() => {
    dispatch(axiosPersonCredits());
  }, [dispatch]);

  return <div>{/* Szczegóły o personie :) */}</div>;
};
