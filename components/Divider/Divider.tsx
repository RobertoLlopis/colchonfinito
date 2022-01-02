import React from 'react'
import { NextPage } from 'next'
import { Divider as PrimeDivider } from 'primereact/divider';

import s from './Divider.module.scss';

interface Props {
    align: 'left' | 'right' | 'center';
    iconName: string;
  }

const Divider: NextPage<Props> = ({align, iconName}) => {
    return (
        <PrimeDivider align={align} className={s.Divider}>
            {iconName && <i className={`pi pi-${iconName} p-mr-2`}></i>}
        </PrimeDivider>
    )
}

export default Divider
