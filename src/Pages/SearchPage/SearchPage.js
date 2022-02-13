import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, Outlet} from 'react-router-dom'

import {
    getSearchPerson,
    getSearchTv,
    searchMovie,
} from "../../store/search.slice";

import css from './searchPage.module.css'

const SearchPage = () => {

    const {movie, tv, person} = useSelector(state => state['searchReducer']);
    const {search: {language, query}} = useSelector(state => state['hrefSearchReducer']);

    const dispatch = useDispatch();
    const queryString = new URLSearchParams({
        language,
        query
    })

    useEffect(() => {
        dispatch(searchMovie(queryString))
        dispatch(getSearchTv(queryString))
        dispatch(getSearchPerson(queryString))
    }, [query, language])

    return (
        <div className={css.content_wrapper}>
            <h1>Результати пошуку</h1>
            <div className={css.content}>
                <div className={css.left}>
                    <Link to={'/search/movie'}>
                        {movie && <>
                            <div>Фільми</div>
                            <span>{movie.total_results}</span>
                        </>
                        }
                    </Link>
                    <Link to={'/search/tv'}>
                        {tv && <><div>Серіали </div><span>{tv.total_results}</span></>}
                    </Link>
                    <Link to={'/search/person'}>
                        {person && <><div>Актори </div><span>{person.total_results}</span></>}
                    </Link>
                </div>
                <div className={css.right}>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export {SearchPage};