import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation, useParams} from "react-router-dom";


import css from './movieDetails.module.css'
import {
    getCreditsMovieItem,
    getCreditsTvItem,
    getMovieItem,
    getTrailerMovieItem,
    getTrailerTvItem,
    getTvItem
} from "../../store";
import {ItemDetails, VideoFrame, Cast, SocialLinks} from "../../components";
import {FormattedMessage} from "react-intl";

const MovieDetails = () => {

    const {
        movieItemDetails,
        tvItemDetails,
        credits,
        trailer,
        error,
        status
    } = useSelector(state => state['movieReducer']);
    const {search: {language}} = useSelector(state => state['hrefSearchReducer']);

    const {id} = useParams();

    const dispatch = useDispatch();

    const queryString = new URLSearchParams({
        language
    })

    const sampleLocation = useLocation();
    const path = sampleLocation.pathname.split('/')[1]

    useEffect(() => {
        switch (path) {
            case 'movie':
                dispatch(getMovieItem({id, queryString}));
                dispatch(getCreditsMovieItem({id: id + '/credits', queryString}));
                dispatch(getTrailerMovieItem({id: id + '/videos', queryString}));
                // dispatch(getLanguages())
                break;
            case 'tv':
                dispatch(getTvItem({id, queryString}));
                dispatch(getCreditsTvItem({id: id + '/credits', queryString}));
                dispatch(getTrailerTvItem({id: id + '/videos', queryString}));
                // dispatch(getLanguages())
                break;
            default:
                break
        }
    }, [language])


// расщет количества актеров для прорисовки взависимости от ширини div
    const [widthBlock, setWidthBlock] = useState(0);

    const ref = useRef(null);

    useEffect(() => {
        setWidthBlock(ref.current.offsetWidth)
    }, []);


    return (
        <div className={css.movieDetails}>
            <div className={css.movieDetailsTitle}><h3><FormattedMessage id='moreAboutTape' /></h3></div>
            {status === "pending" && <h1>Data loading...</h1>}
            {error && <h2 className={'error'}>{error}</h2>}
            {movieItemDetails && path === 'movie' && <ItemDetails movieItemDetails={movieItemDetails}/>}
            {tvItemDetails && path === 'tv' && <ItemDetails movieItemDetails={tvItemDetails}/>}


            <div className={css.column_wrapper}>
                <div className={css.content_wrapper}>
                    <div className={css.left_column}>
                        <h3><FormattedMessage id='starring' /></h3>
                        <div ref={ref} className={css.actors}>
                            {credits && credits.cast.map((item, index) => {
                                if (index < (Math.floor(widthBlock / 155) * 2)) {
                                    return <Cast key={item.id} item={item}/>
                                }
                            })}
                        </div>
                        <div className={css.allActors}>
                            <Link to={`cast`}><h4><FormattedMessage id='crewAndActors' /></h4></Link>
                        </div>
                        <hr/>
                        <div id={'videoPlayer'} className={css.videoPlayer}>
                            {trailer?.id === Number(id) && trailer?.results.length > 0 &&
                                <VideoFrame video={trailer?.results[0]} widthBlock={widthBlock}/>}
                        </div>

                    </div>
                    <div className={css.right_column}>
                        <div className={css.social_links}>
                            <SocialLinks/>
                        </div>
                        <div className={css.blockInfo}>
                            <h4><FormattedMessage id='originalTitle' /></h4>
                            <p>{movieItemDetails?.original_title}</p>
                        </div>
                        <div className={css.blockInfo}>
                            <h4><FormattedMessage id='status' /></h4>
                            <p>{movieItemDetails?.status === 'Released' ? 'Випущений' : 'Не випущений'}</p>
                        </div>
                        <div className={css.blockInfo}>
                            <h4><FormattedMessage id='originalLang' /></h4>
                            <p>{movieItemDetails?.original_language === 'en' ? 'англійська' : `${movieItemDetails?.original_language}`}</p>
                        </div>
                        <div className={css.blockInfo}>
                            <h4><FormattedMessage id='budget' /></h4>
                            <p>{'$'.concat(movieItemDetails?.budget.toLocaleString())}</p>
                        </div>
                        <div className={css.blockInfo}>
                            <h4><FormattedMessage id='income' /></h4>
                            <p>{'$'.concat(movieItemDetails?.revenue.toLocaleString())}</p>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
};


export {MovieDetails};