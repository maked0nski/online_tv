import React from 'react';
import {Link} from "react-router-dom";

import css from "./itemDetails.module.css";
import {Genres} from "../Genres/Genres";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";


const ItemDetails = ({movieItemDetails}) => {

    const {backdrop_path, poster_path, title, release_date, genres, vote_average, overview} = movieItemDetails;
    const year = "(" + release_date.split('-', 1) + ")"



    return (
        <>
            <div className={css.itemContainer}
                 style={{
                     backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`
                 }}>
                <div className={css.itemContainer2}>
                    <div className={css.itemContent}>
                        <div className={css.itemWraper}>
                            <div className={css.poster}>
                                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
                                     alt={title}/>
                            </div>
                            <div className={css.itemInfo}>
                                <div className={css.titleBlock}>
                                    <h2>{title} <span
                                        className={'releaseDate'}>{year}</span>
                                    </h2>
                                    <div className={css.titleInfo}>
                                        <div className={css.certification}>12+</div>
                                        <div className={css.release_date}>{release_date.split('-').join('/')}</div>
                                        <div className={css.genres}>* {genres.map(genre => <Genres key={genre.id}
                                                                                                   genre={genre}/>)}</div>
                                    </div>
                                </div>
                                <ul className={'actionBlock'}>

                                    <li className={css.rating}>
                                        <CircularProgressbar
                                            className={css.circularProgressbar}
                                            value={vote_average * 10}
                                            text={`${vote_average * 10}%`}
                                            background
                                            backgroundPadding={5}
                                            styles={buildStyles({
                                                backgroundColor: "#204529",
                                                textColor: "#fff",
                                                pathColor: "#21d07a",
                                                trailColor: "transparent",
                                                textSize: '25px'
                                            })}
                                        />
                                        <div className={css.text}>Оцінка<br/>користувачів</div>


                                    </li>

                                    <li className={css.toolBtn}>
                                        <Link className={css.toolBtnCircle} to={'#'}>
                                            <span className={css.icon}
                                                  style={{backgroundImage: 'url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-159-thumbnails-list-white-c260ea972eebf812289fd3c41d0d2c1dff33ecbcd62be13fba8eeaf9de173789.svg")'}}></span>
                                        </Link>
                                    </li>

                                    <li className={css.toolBtn}>
                                        <Link className={css.toolBtnCircle} to={'#'}>
                                            <span className={css.icon}
                                                  style={{backgroundImage: 'url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-13-heart-white-28d2cc2d6418c5047efcfd2438bfc5d109192671263c270993c05f130cc4584e.svg")'}}></span>
                                        </Link>
                                    </li>
                                    <li className={css.toolBtn}>
                                        <Link className={css.toolBtnCircle} to={'#'}>
                                            <span className={css.icon}
                                                  style={{backgroundImage: 'url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-73-bookmark-white-432e98d550b7e4c80b06272c49475b0db85a60f6fae450420713004b3c9d3ffd.svg")'}}></span>
                                        </Link>
                                    </li>
                                    <li className={css.toolBtn}>
                                        <Link className={css.toolBtnCircle} to={'#'}>
                                            <span className={css.icon}
                                                  style={{backgroundImage: 'url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-white-5c85220678b312aea9599d5f12ad858a9e7df226de51ef8b6b699023ffeda5fa.svg")'}}></span>
                                        </Link>
                                    </li>
                                    <li className={css.video}>
                                        <Link className={css.videoLink} to={'#'}>
                                            <span></span>
                                            Відтворити трейлер
                                        </Link>
                                    </li>


                                </ul>

                                <div className={'infoBlock'}>

                                    <h3>Опис</h3>
                                    <div>
                                        <p>
                                            {overview}
                                        </p>
                                    </div>
                                    <div className={css.people_name}>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'ActorsList'}>

            </div>
        </>
    );
};

export {ItemDetails};