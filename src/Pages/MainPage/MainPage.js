import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './mainPage.module.css';
import {getMovieList, setParams, switchScrollPosition} from "../../store";
import {FilmItem} from "../../components";
import {FormattedMessage} from "react-intl";

const MainPage = () => {

    const {movieList, error, status} = useSelector(state => state['movieReducer']);
    const {search: {language, sort_by, page}, scrollPosition} = useSelector(state => state['hrefSearchReducer']);

    const dispatch = useDispatch();

    const queryString = new URLSearchParams({
        language,
        sort_by,
        page
    })

    useEffect(() => {
        if (scrollPosition) {
            dispatch(setParams({page: page + 1}));
            dispatch(getMovieList(queryString));
        }
        dispatch(switchScrollPosition(false))
    }, [scrollPosition, language])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])


    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 200) {
            dispatch(switchScrollPosition(true))
        }
    }

    return (
        <div className={css.content_wrapper}>
            <h1 className={css.title}><FormattedMessage id='popularMovies' /></h1>
            {status === "pending" && <h1>Data loading...</h1>}
            {error && <h2 className={'error'}>{error}</h2>}

            <div className={'container'}>
                <div className={css.content}>
                    {movieList && movieList.map(film => <FilmItem key={film.id} film={film}/>)}
                </div>
                <div className={css.downloadMore}>
                    <p><FormattedMessage id='downloadMore' /></p>
                </div>
            </div>
        </div>

    );
};

export {MainPage};