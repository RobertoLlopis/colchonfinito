import React, { useMemo } from 'react';

import Image from 'next/image';
import { Menubar } from 'primereact/menubar';
import { HeaderStructure } from './HeaderStructure';
import Logo from 'public/favicon.png';

import s from './Header.module.scss';


function Header() {
    const logo = useMemo(() => <Image src={Logo} alt="colchonfinito logo" layout='intrinsic' height='50px' width='50px'/>, []);
    return (
        <Menubar start={logo} model={HeaderStructure} className={s.Header}/>
    )
}

export default Header
