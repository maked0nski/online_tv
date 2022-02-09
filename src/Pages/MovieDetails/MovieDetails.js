import React, {useEffect, useRef, useState} from 'react';

import css from './movieDetails.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {getCreditsMovieItem, getMovieItem} from "../../store";
import {ItemDetails} from "../../components";
import {Cast} from "../../components";

const MovieDetails = () => {

    const {movieItemDetails, credits, error, status} = useSelector(state => state['movieReducer']);
    const {search: {language}} = useSelector(state => state['hrefSearchReducer']);

    const {id,} = useParams();

    const dispatch = useDispatch();

    const queryString = new URLSearchParams({
        language
    })

    useEffect(() => {
        dispatch(getMovieItem({id, queryString}))
        dispatch(getCreditsMovieItem({id: id + '/credits', queryString}))
    }, [language])


// расщет количества актеров для прорисовки взависимости от ширини div
    const [widthBlock, setWidthBlock] = useState(0);

    const ref = useRef(null);

    useEffect(() => {
        setWidthBlock(Math.floor((ref.current.offsetWidth) / 155) * 2)
    }, []);




    return (
        <div className={css.movieDetails}>
            <div className={css.movieDetailsTitle}><h3>Детальніше про стрічку</h3></div>
            {status === "pending" && <h1>Data loading...</h1>}
            {error && <h2 className={'error'}>{error}</h2>}
            {movieItemDetails && <ItemDetails movieItemDetails={movieItemDetails}  />}


            <div className={css.column_wrapper}>
                <div className={css.content_wrapper}>
                    <div className={css.left_column}>
                        <h3>У головних ролях</h3>
                        <div ref={ref} className={css.actors}>
                            {credits && credits.cast.map((item, index) => {
                                if (index < widthBlock) {
                                    return <Cast key={item.id} item={item} />
                                }
                                return
                            })}
                        </div>
                        <div className={css.allActors}>
                            <Link to={`cast`}><h4>Уся знімальна група й актори</h4></Link>
                        </div>
                        <hr/>


                    </div>
                    <div className={css.right_column}>
                        <div className={css.social_links}>
                            <div><Link to={'#'}><span
                                style={{backgroundImage: 'url(https://www.themoviedb.org/assets/2/v4/glyphicons/social/facebook-71155d1cd369c47ce8456477833a92c324fa01e6d628cb6ece19cedea3c1c480.svg)'}}></span></Link>
                            </div>
                            <div><Link to={'#'}><span
                                style={{backgroundImage: 'url(https://www.themoviedb.org/assets/2/v4/glyphicons/social/twitter-a6ff8c172b8e086f4a64578cee0a16676c1a067b47a1b1b186d58795d241a852.svg)'}}></span></Link>
                            </div>
                            <div><Link to={'#'}><span
                                style={{backgroundImage: 'url(https://www.themoviedb.org/assets/2/v4/glyphicons/social/instagram-74e6299c864adc384258da3b3a8eb09282b7ccda4dd1dfa9a4158ba2ea8583b9.svg)'}}></span></Link>
                            </div>
                        </div>
                        <div className={css.blockInfo}>
                            <h4>Оригінальна назва</h4>
                            <p>{movieItemDetails?.original_title}</p>
                        </div>
                        <div className={css.blockInfo}>
                            <h4>Статус</h4>
                            <p>{movieItemDetails?.status === 'Released' ? 'Випущений' : 'Не випущений'}</p>
                        </div>
                        <div className={css.blockInfo}>
                            <h4>Мова оригіналу</h4>
                            <p>{movieItemDetails?.original_language === 'en' ? 'англійська' : `${movieItemDetails?.original_language}`}</p>
                        </div>
                        <div className={css.blockInfo}>
                            <h4>Бюджет</h4>
                            <p>{'$'.concat(movieItemDetails?.budget.toLocaleString())}</p>
                        </div>
                        <div className={css.blockInfo}>
                            <h4>Дохід</h4>
                            <p>{'$'.concat(movieItemDetails?.revenue.toLocaleString())}</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};


export {MovieDetails};