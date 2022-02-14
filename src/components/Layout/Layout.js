import React, {useState} from 'react';
import {Outlet} from 'react-router-dom'
import useLocalStorage from 'use-local-storage'

import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import css from './layout.module.css'


const Layout = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [checked, setChecked] = useState(theme === 'dark');

    const switchTheme = (e) => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setChecked(e.target.checked);
        setTheme(newTheme);
    }

    return (
        <div className={`${css.layout}, app`} data-theme={theme}>
            <Header switchTheme={switchTheme} checked={checked}/>
            <div className={css.container}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export {Layout};