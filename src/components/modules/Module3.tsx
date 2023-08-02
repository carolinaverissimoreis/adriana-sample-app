import { useAppSelector } from "../../store";
import { selectProductsSlice } from "../../store/slices";
import { Module } from "./Module";
import { Module1 } from "./Module1";

// -----------------------------------------------------------------

export const Module3 = () => {
  const { name } = useAppSelector(selectProductsSlice);

  return (
    <Module name={`Sub Module 3 - ${name}`}>
      <div>
        <h1>{name}</h1>

        <p>Field name is empty: {!!name.trim() ? "true" : "false"}</p>

        <Module1 />
      </div>
    </Module>
  );
};
