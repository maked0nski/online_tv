import React from 'react';
import {Link} from "react-router-dom";

import css from './notFoundPage.module.css';
import {FormattedMessage} from "react-intl";


const NotFoundPage = () => {
    return (
        <div className={css.content}>
            <h1><FormattedMessage id='error404' /></h1>
            <Link to={'/'}>
                <img
                    // src={'https://cdn.dribbble.com/users/2353504/screenshots/7498453/media/6b9d2cecfe00f117222162cfd943e17d.gif'}
                    src={'https://cdn.dribbble.com/users/2272148/screenshots/6633933/daily008.gif'}
                    alt={'404'}
                />
            </Link>
        </div>
    );
};

export {NotFoundPage};