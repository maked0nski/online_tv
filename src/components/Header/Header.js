import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import css from './header.module.css'
import {NavLink} from "react-router-dom";
import {Avatar} from "@mui/material";
import {deepPurple} from "@mui/material/colors";
import {PopUpLanguage} from "../PopUpLanguage/PopUpLanguage";
import {FormattedMessage} from "react-intl";

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.headerContainer}>
                <div className={css.naw_wrap}>
                    <div>
                        <NavLink to={'/'}>
                            <img
                                src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'}
                                alt={'logo'}
                            />
                        </NavLink>
                    </div>
                    <div className={css.naw_wrapItem}>
                        <NavLink to={'/movie'}>
                            <FormattedMessage id='movie' />
                        </NavLink>
                        <NavLink to={'/tv'}><FormattedMessage id='tvShows' /></NavLink>
                        <NavLink to={'/person'}><FormattedMessage id='actors' /></NavLink>
                    </div>
                </div>
                <div className={css.headerButton}>
                    <div className={css.headerLanguage}>
                        <PopUpLanguage/>
                    </div>
                    <div>
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsNoneIcon color="white"/>
                        </Badge>

                    </div>
                    <div>
                        <Avatar sx={{bgcolor: deepPurple[500]}}>EO</Avatar>
                    </div>
                    <div className={css.search}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export {Header};