import { PropsWithChildren } from "react";
import { Card } from "antd";

// -----------------------------------------------------------------

export type ModuleProps = PropsWithChildren<{
  name?: string;
}>;

export const Module = ({ name = "", children }: ModuleProps) => {
  return <Card title={name}>{children}</Card>;
};
