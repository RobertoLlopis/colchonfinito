import React, { useEffect, useState } from 'react';

import { Menubar } from 'primereact/menubar';
import { HeaderStructure } from './HeaderStructure';

import s from './Header.module.scss';
import Logo from 'components/Logo';

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

    return (
        <Menubar start={Logo} model={HeaderStructure} className={`${s.Header} ${isOnTop ? s.onTop  : ''} ${isSticky ? s.sticky  : ''}`}/>
    )
}

export default Header
