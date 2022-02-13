import React from 'react';
import {Link} from "react-router-dom";
import {defaultLinkImage} from "../../_config";

import css from './list.module.css'

const List = ({value, type}) => {
    let src, names, date, linkPatch
    switch (type) {
        case 'movie':
            src=`${defaultLinkImage.w94_and_h141}${value.poster_path}`;
            names = value.title;
            date = value.release_date;
            linkPatch = `/movie/${value.id}`
            break;

        case 'tv':
            src=`${defaultLinkImage.w94_and_h141}${value.poster_path}`;
            names = value.name;
            date = value.first_air_date;
            linkPatch = `/tv/${value.id}`
            break;

        case 'person':
            src=`${defaultLinkImage.w90_and_h90}${value.profile_path}`;
            names = value.name;
            date = null;
            linkPatch = `/person/${value.id}`
            break;

        default:
            <Link to={'/'}/>
    }
    
    
    
    return (
        <div className={css.card}>
            <Link to={linkPatch}>
                <div className={css.image}>
                    <img src={src} alt={names}/>
                </div>
                <div className={css.text}>
                    <div className={css.title}>{names}</div>
                    {date && <div className={css.data}>{date}</div>}
                </div>
            </Link>
        </div>
    );
};

export {List};