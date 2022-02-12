import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './personsPage.module.css'
import {getAllPerson, scrollPersPosition, setParams} from "../../store";
import {PersonItem} from "../../components";


const PersonsPage = () => {

    const {personsList, error, status, persScrollPosition} = useSelector(state => state['personReducer']);
    const {search: {language, sort_by, pagePerson}} = useSelector(state => state['hrefSearchReducer']);

    const dispatch = useDispatch();

    const queryString = new URLSearchParams({
        language,
        sort_by,
        page: pagePerson
    })

    useEffect(() => {
        if (scrollPersPosition) {
            dispatch(setParams({pagePerson: pagePerson + 1}));
            dispatch(getAllPerson(queryString));
        }
        dispatch(scrollPersPosition(false))
    }, [persScrollPosition, language])


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])


    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 200) {
            dispatch(scrollPersPosition(true))
        }
    }

    return (
        <div className={css.content_wrapper}>
            <h1 className={css.title}>Популярні актори</h1>
            {status === "pending" && <h1>Data loading...</h1>}
            {error && <h2 className={'error'}>{error}</h2>}

            <div className={css.actorsWrap}>
                {personsList && personsList.map(item => <PersonItem key={item.id} item={item} />)}
            </div>

        </div>
    );
};

export {PersonsPage};