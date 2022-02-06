import React, { ReactNode } from 'react';

interface Props {
  iconName: string;
  marginDir: 'l' | 'r' | 't' | 'b';
  marginValue: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  extraClassName?: string;
  children?: ReactNode;
}

function Icon({ iconName, marginDir, marginValue, extraClassName }: Props) {
  const finalClassName = `pi pi-${iconName} p-m${marginDir}-${marginValue} ${extraClassName || ''}`;
  return <i className={finalClassName}></i>;
}

export default Icon;
