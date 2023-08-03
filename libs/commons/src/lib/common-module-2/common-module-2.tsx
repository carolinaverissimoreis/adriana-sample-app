import { Module } from '@adriana-org/components';

import { CommonModulePeople } from '../common-module-people/common-module-people';

// -----------------------------------------------------------------

export const CommonModule2 = () => {
  return (
    <Module name={'Common Module 2'}>
      <CommonModulePeople />
    </Module>
  );
};
