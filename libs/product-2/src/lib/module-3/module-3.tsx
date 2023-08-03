import { Module } from '@adriana-org/components';
import { Module1 } from '@adriana-org/product-1';

// -----------------------------------------------------------------

export type Module3Props = {
  name?: string;
  onSaveName?: (value: string) => void;
};

export const Module3 = ({
  name = '',
  onSaveName = () => null,
}: Module3Props) => {
  return (
    <Module name={`Sub Module 3 - ${name}`}>
      <div>
        <h1>{name}</h1>

        <p>Field name is empty: {name.trim() ? 'false' : 'true'}</p>

        <Module1 name={name} onSaveName={onSaveName} />
      </div>
    </Module>
  );
};
