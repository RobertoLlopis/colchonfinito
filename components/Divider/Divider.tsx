import React from 'react'
import { Divider as PrimeDivider } from 'primereact/divider';

import Icon from 'components/Icon/Icon';

import s from './Divider.module.scss';

interface Props {
    align?: 'left' | 'right' | 'center';
    iconName: string;
}

const Divider = ({ align, iconName }: Props) => {
    return (
        <PrimeDivider align={align ? align : 'center'} className={s.Divider}>
            {
                iconName &&
                <Icon
                    iconName={iconName}
                    marginDir="r"
                    marginValue="2"
                />
            }
        </PrimeDivider>
    )
}

export default Divider
