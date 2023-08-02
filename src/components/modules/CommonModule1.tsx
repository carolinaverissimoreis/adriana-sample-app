import { useAppSelector } from "../../store";
import { selectProductsSlice } from "../../store/slices";
import { Module } from "./Module";

// -----------------------------------------------------------------

export const CommonModule1 = () => {
  const { name } = useAppSelector(selectProductsSlice);

  return (
    <Module name={"Commmon Module 1"}>{`Commmon Module 1 - ${name}`}</Module>
  );
};
