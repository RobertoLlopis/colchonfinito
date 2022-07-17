import React, { useEffect, useMemo, useState } from 'react';

import Image from 'next/image';
import { Menubar } from 'primereact/menubar';
import { HeaderStructure } from './HeaderStructure';
import Logo from 'public/favicon.png';

import s from './Header.module.scss';

function Header() {
    const [isOnTop, setIsOnTop] = useState(false);
    const [isSticky, setIsSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsOnTop(window.scrollY === 0)
            setIsSticky(window.scrollY > 20);
        }
        window.addEventListener('scroll', handleScroll);

        // return window.removeEventListener('scroll', handleScroll);
    }, []);


    const logo = useMemo(() => <Image src={Logo} alt="colchonfinito logo" layout='intrinsic' height='50px' width='50px'/>, []);
    return (
        <Menubar start={logo} model={HeaderStructure} className={`${s.Header} ${isOnTop ? s.onTop  : ''} ${isSticky ? s.sticky  : ''}`}/>
    )
}

export default Header
