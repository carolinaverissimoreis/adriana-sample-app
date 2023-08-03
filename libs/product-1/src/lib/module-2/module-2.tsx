import { useEffect } from 'react';
import { Spin } from 'antd';

import { Module } from '@adriana-org/components';

// -----------------------------------------------------------------

export type Module2Props = {
  getData?: () => void;
  isLoadingData?: boolean;
  number?: number;
  region?: string;
};

export const Module2 = ({
  getData = () => null,
  isLoadingData = false,
  number = 0,
  region = '',
}: Module2Props) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Module name={'Module 1 - Module 2'}>
      <h2>
        Total: {number.toFixed(2)}
        <br />
        {isLoadingData ? <Spin /> : region}
      </h2>
    </Module>
  );
};
