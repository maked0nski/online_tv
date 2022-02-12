import React from 'react';

import css from './listMovie.module.css'
import {Link} from "react-router-dom";

const ListMovie = ({value}) => {
    const {id, media_type, title, name, release_date, first_air_date} = value;

    let nameVideo
    if (name) {
        nameVideo = name
    } else nameVideo = title

    let year
    if (media_type === 'movie') {
        year = (release_date.split('-', 1)[0] === '' ? ' невідомо ' : release_date.split('-', 1)[0])
        year = "(" + year + ")"
    } else {
        year = (first_air_date.split('-', 1)[0] === '' ? ' невідомо ' : first_air_date.split('-', 1)[0])
        year = "(" + year + ")"
    }

    return (
        <div className={css.listElement}>
            <Link to={`/${media_type}/${id}`}>
                <div>{year} <span>{nameVideo}</span></div>
            </Link>
        </div>
    );
};

export {ListMovie};