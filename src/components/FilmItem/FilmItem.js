import React from 'react';
import {Link} from "react-router-dom";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import css from './filmItem.module.css'
import {defaultImage, defaultLinkImage} from "../../_config";

const FilmItem = ({film}) => {

    const {id, title, name, release_date, first_air_date, poster_path, vote_average} = film;
    // let src
    // if (poster_path) {
    //     src = `https://www.themoviedb.org/t/p/w220_and_h330_bestv2${poster_path}`
    // } else {
    //     src = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`
    // }

    return (
        <div className={css.card}>
            <div className={css.image}>
                <Link to={id.toString()} title={title || name}>
                    <img
                        src={defaultLinkImage.w220_and_h330.concat(poster_path)}
                        alt={title || name}
                        title={title || name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultImage
                        }}
                    />
                </Link>
            </div>
            <div className={css.content}>
                <div className={css.circularProgressbar}>
                    <CircularProgressbar
                        value={vote_average * 10}
                        text={`${vote_average * 10}%`}
                        background
                        backgroundPadding={5}
                        styles={buildStyles({
                            backgroundColor: "#1c3423",
                            textColor: "#fff",
                            pathColor: "#21d07a",
                            trailColor: "transparent",
                            textSize: '25px'
                        })}
                    />
                </div>
                <h2>
                    <Link to={id.toString()} title={title || name}>
                        {title || name}
                    </Link>
                </h2>
                <p>{release_date || first_air_date}</p>
            </div>
        </div>
    );
};

export {FilmItem};