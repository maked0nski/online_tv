import React from 'react';
import {Outlet} from 'react-router-dom'

import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

import css from './layout.module.css'

const Layout = () => {
    return (
        <div className={css.layout}>
            <Header/>
            <div className={css.container}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export {Layout};