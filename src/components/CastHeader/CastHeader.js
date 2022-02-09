import React from 'react';

import css from './castHeader.module.css'
import {Link} from "react-router-dom";

const CastHeader = ({movieItemDetails: {poster_path, title, release_date}}) => {

    const year = "(" + release_date.split('-', 1) + ")"

    return (
        <div className={css.castHeader}>
            <div className={css.headerInfoWrap}>
                <div className={css.castHeaderImg}>
                    <Link to={'#'}>
                        <img
                            src={`https://www.themoviedb.org/t/p/w58_and_h87_face${poster_path}`}
                            alt={title}/>
                    </Link>
                </div>
                <div className={css.title}>
                    <Link to={'#'}>
                        <h2>{title} <span
                            className={'releaseDate'}>{year}</span>
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export {CastHeader};