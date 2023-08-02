import { useEffect } from "react";

import { useLazyGetProductsDataQuery } from "../../store/apis";
import { useAppSelector } from "../../store";
import { selectProductsSlice } from "../../store/slices";
import { Module } from "./Module";

// -----------------------------------------------------------------

export const Module2 = () => {
  const [getProductsData] = useLazyGetProductsDataQuery();

  const { number, region } = useAppSelector(selectProductsSlice);

  useEffect(() => {
    getProductsData({ url: `https://restcountries.com/v3.1/currency/cop` });
  }, [getProductsData]);

  return (
    <Module name={"Module 1 - Module 2"}>
      <h2>
        Total: {number.toFixed(2)}
        <br />
        {region}
      </h2>
    </Module>
  );
};
