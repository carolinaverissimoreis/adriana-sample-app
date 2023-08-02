import { useAppSelector } from "../../store";
import { selectproductsSlice } from "../../store/slices";
import { Module } from "./Module";

// -----------------------------------------------------------------

export const CommonModule1 = () => {
  const { name } = useAppSelector(selectproductsSlice);

  return (
    <Module name={"Commmon Module 1"}>{`Commmon Module 1 - ${name}`}</Module>
  );
};
