import { useCallback, useState } from 'react';
import { Modal, message, Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import { CommonModulePeople } from '../common-module-people/common-module-people';

// -----------------------------------------------------------------

export type CommonModule2ModalProps = {
  open?: boolean;
  onCancel?: () => void;
  name?: string;
  onSaveName?: (value: string) => void;
};

export const CommonModule2Modal = ({
  open,
  onCancel = () => null,
  name = '',
  onSaveName = () => null,
}: CommonModule2ModalProps) => {
  const [value, setValue] = useState(name);

  const saveValue = useCallback(() => {
    onSaveName(value);

    message.success('Saved value!');

    onCancel();
  }, [value, onCancel, onSaveName]);

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title={'Common Module 2 - Select Guest'}
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
