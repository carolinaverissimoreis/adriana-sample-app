import { useState, useEffect, useCallback } from 'react';
import { Button, Divider, Input, Space, message } from 'antd';
import { SaveOutlined, UserOutlined } from '@ant-design/icons';

import { Module } from '@adriana-org/components';
import { CommonModule1, CommonModule2Modal } from '@adriana-org/commons';

// -----------------------------------------------------------------

export type Module1Props = {
  name?: string;
  onSaveName?: (value: string) => void;
};

export const Module1 = ({
  name = '',
  onSaveName = () => null,
}: Module1Props) => {
  const [openModal, setOpenModal] = useState(false);

  const [value, setValue] = useState(name);

  const saveValue = useCallback(() => {
    onSaveName(value);

    message.success('Saved value!');
  }, [value, onSaveName]);

  useEffect(() => {
    setValue(name);
  }, [name]);

  return (
    <Module name={'Module 1 - Sub Module 1'}>
      <div>
        <CommonModule2Modal
          open={openModal}
          onCancel={() => setOpenModal(false)}
          name={name}
          onSaveName={onSaveName}
        />

        <div>Add Content to Product 2 - Module 3</div>

        <br />

        <Space>
          <Button onClick={() => setOpenModal(true)}>
            <UserOutlined />
          </Button>

          <Input
            style={{ width: 240 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button onClick={() => saveValue()}>
            <SaveOutlined />
          </Button>
        </Space>

        <Divider />

        <CommonModule1 name={name} />
      </div>
    </Module>
  );
};
