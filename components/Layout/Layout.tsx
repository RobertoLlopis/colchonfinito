import React from 'react'
import { NextPage } from 'next'
import Head from 'components/Head'
import Header from 'components/Header'

interface Props {
    children: React.ReactNode;
}

const Layout: NextPage<Props> = ({children}) =>{
    return (
        <div className='app-layout-wrapper'>
            <Head />
            <Header />
            {children}
        </div>
    )
}

export default Layout
