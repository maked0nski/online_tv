import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";


import css from "./castPage.module.css";
import {getCreditsMovieItem, getMovieItem} from "../../store";
import {CastHeader, Person} from "../../components";
import {FormattedMessage} from "react-intl";


const CastPage = () => {

    const {movieItemDetails, credits, error, status} = useSelector(state => state['movieReducer']);
    const {search: {language}} = useSelector(state => state['hrefSearchReducer']);

    const {id} = useParams();

    const dispatch = useDispatch();

    const queryString = new URLSearchParams({
        language
    })

    useEffect(() => {
        if (!(movieItemDetails?.id.toString() === id)) {
            dispatch(getMovieItem({id, queryString}))
        }
        if (!(credits?.id.toString() === id)) {
            dispatch(getCreditsMovieItem({id: id + '/credits', queryString}))
        }


    }, [language])


    return (
        <div>
            <div><h3 className={css.castTitle}><FormattedMessage id='crewAndActors' /></h3></div>
            {status === "pending" && <h1>Data loading...</h1>}
            {error && <h2 className={'error'}>{error}</h2>}

            {movieItemDetails && <CastHeader movieItemDetails={movieItemDetails}/>}

            <div className={css.actorsWrap}>


                <div>
                    <h3><FormattedMessage id='roles' /> {credits?.cast.length}</h3>
                    <div>
                        {credits && credits.cast.map(item => <Person key={item.credit_id} item={item}/>)}
                    </div>
                </div>

                <div>
                    <h3><FormattedMessage id='cameraCrew' /> {credits?.crew.length}</h3>
                    {credits && credits.crew.map(item => <Person key={item.credit_id} item={item}/>)}
                </div>


            </div>

        </div>
    );
};

export {CastPage};