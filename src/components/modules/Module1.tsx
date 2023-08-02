import { useState, useEffect, useCallback } from "react";
import { Button, Divider, Input, message } from "antd";
import { SaveOutlined, UserOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../store";
import { selectProductsSlice, updateProductsSlice } from "../../store/slices";
import { Module } from "./Module";
import { CommonModule1 } from "./CommonModule1";
import { CommonModule2Modal } from "./CommonModule2Modal";

// -----------------------------------------------------------------

export const Module1 = () => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useAppDispatch();

  const { name } = useAppSelector(selectProductsSlice);

  const [value, setValue] = useState(name);

  const saveValue = useCallback(() => {
    dispatch(updateProductsSlice({ name: value }));

    message.success("Saved value!");
  }, [value, dispatch]);

  useEffect(() => {
    setValue(name);
  }, [name]);

  return (
    <Module name={"Module 1 - Sub Module 1"}>
      <div>
        <CommonModule2Modal
          open={openModal}
          onCancel={() => setOpenModal(false)}
        />

        <div>Add Content to Product 2 - Module 3</div>

        <br />

        <Button onClick={() => setOpenModal(true)}>
          <UserOutlined />
        </Button>

        <Input
          style={{ width: 120 }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Button onClick={() => saveValue()}>
          <SaveOutlined />
        </Button>

        <Divider />

        <CommonModule1 />
      </div>
    </Module>
  );
};
