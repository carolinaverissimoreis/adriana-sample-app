import { Module } from '@adriana-org/components';

// -----------------------------------------------------------------

export type CommonModule1Props = {
  name?: string;
};

export const CommonModule1 = ({ name = '' }: CommonModule1Props) => {
  return (
    <Module name={'Commmon Module 1'}>{`Commmon Module 1 - ${name}`}</Module>
  );
};
