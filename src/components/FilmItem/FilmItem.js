import React from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import {Link} from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';

import css from './filmItem.module.css'

const FilmItem = ({film}) => {

    const {id, title, release_date, poster_path, vote_average} = film;

    return (
        <div className={css.card}>
            <div className={css.image}>
                <Link to={id.toString()} title={title}>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_bestv2${poster_path}`} alt={title}/>
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
                    <Link to={id.toString()} title={title}>
                        {title}
                    </Link>
                </h2>
                <p>{release_date}</p>
            </div>
        </div>
    );
};

export {FilmItem};