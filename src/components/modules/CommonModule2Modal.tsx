import { useCallback, useState } from "react";
import { Modal, message, Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../store";
import { selectProductsSlice, updateProductsSlice } from "../../store/slices";
import { CommonModulePeople } from "./CommonModulePeople";

// -----------------------------------------------------------------

export type CommonModule2ModalProps = {
  open?: boolean;
  onCancel?: () => void;
};

export const CommonModule2Modal = ({
  open,
  onCancel = () => {},
}: CommonModule2ModalProps) => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector(selectProductsSlice);

  const [value, setValue] = useState(name);

  const saveValue = useCallback(() => {
    dispatch(updateProductsSlice({ name: value }));

    message.success("Saved value!");

    onCancel();
  }, [value, dispatch, onCancel]);

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title={"Common Module 2 - Select Guest"}
      footer={
        <Button onClick={() => saveValue()}>
          <SaveOutlined />
        </Button>
      }
    >
      <CommonModulePeople setValue={setValue} />
    </Modal>
  );
};
