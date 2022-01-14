import React from 'react';
import {TypeLabel} from '@/presentation/components/atoms';

type Props = {
  types: string[];
};

const TypeLabelsContainer: React.FC<Props> = ({types}: Props) => {
  return (
    <>
      {types.map((type, index) => {
        return <TypeLabel key={index} type={type} />;
      })}
    </>
  );
};

export default TypeLabelsContainer;
