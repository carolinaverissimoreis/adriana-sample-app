import { useEffect } from "react";
import { Spin } from "antd";

import { useLazyGetProductsDataQuery } from "../store/apis";
import { useAppSelector } from "../store";
import { selectProductsData } from "../store/slices";
import { AuthNavigator } from "./AuthNavigator";
import { UnauthNavigator } from "./UnauthNavigator";

// -----------------------------------------------------------------

export const RootNavigator = () => {
  const data = useAppSelector(selectProductsData);

  const [getProductsData] = useLazyGetProductsDataQuery();

  useEffect(() => {
    getProductsData({ url: `https://restcountries.com/v3.1/name/portugal` });
  }, [getProductsData]);

  const isLoggedIn = true;

  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return <>{isLoggedIn ? <AuthNavigator /> : <UnauthNavigator />}</>;
};
