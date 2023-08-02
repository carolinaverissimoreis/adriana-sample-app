import { useEffect } from "react";

import { useLazyGetProductsQuery } from "../../store/apis";
import { useAppSelector } from "../../store";
import { selectproductsSlice } from "../../store/slices";
import { Module } from "./Module";

// -----------------------------------------------------------------

export const Module2 = () => {
  const [getProducts] = useLazyGetProductsQuery();

  const { number, region } = useAppSelector(selectproductsSlice);

  useEffect(() => {
    getProducts({});
  }, [getProducts]);

  // function getData() {
  //   Api.getData(`https://restcountries.com/v3.1/currency/cop`)
  //     .then((data: any) => {
  //       dispatch({
  //         type: "REGION",
  //         payload: data[0].region,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  return (
    <Module name={"Module 1 - Module 2"}>
      <h2>
        Total: {number}
        <br />
        {region}
      </h2>
    </Module>
  );
};
