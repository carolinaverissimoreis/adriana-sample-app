import { CommonModulePeople } from "./CommonModulePeople";
import { Module } from "./Module";

// -----------------------------------------------------------------

export const CommonModule2 = () => {
  return (
    <Module name={"Common Module 2"}>
      <CommonModulePeople />
    </Module>
  );
};
