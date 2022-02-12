import React, {useEffect} from 'react';

import css from './personDetails.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getPersonCombined_credits, getPersonItem, getPersonMoreInfo} from "../../store";
import {AlsoKnownAs, Birthday, PersonImage, SocialLinks} from "../../components";


const PersonDetails = () => {

    const {moreInfo, personItem, combined_credits} = useSelector(state => state['personReducer']);
    const {search: {language}} = useSelector(state => state['hrefSearchReducer']);
    const {id} = useParams();
    const dispatch = useDispatch();

    const queryString = new URLSearchParams({
        language
    });

    useEffect(() => {
        dispatch(getPersonItem({id, queryString}));
        dispatch(getPersonMoreInfo({id, queryString}));
        dispatch(getPersonCombined_credits({id, queryString}));
    }, [])


    console.log(moreInfo)
    console.log(personItem)
    console.log(combined_credits)

    return (
        <div className={css.wraper}>
            {/*{status === "pending" && <h1>Data loading...</h1>}*/}
            {/*{error && <h2 className={'error'}>{error}</h2>}*/}


            <div className={css.leftwrap}>
                {personItem && <PersonImage profile_path={personItem.profile_path} name={personItem.name}/>}
                <div className={css.social_links}>
                    {moreInfo && <SocialLinks moreInfo={moreInfo}/>}
                </div>
                <div>
                    Особиста інформація
                </div>
                <div>
                    Кількість зйомок
                    {combined_credits && <p>{combined_credits.cast.length}</p>}
                </div>
                <div>
                    Стать
                    {personItem && <p>{personItem.gender === 2 ? 'чоловіча' : 'жіноча'}</p>}
                </div>
                <div>
                    День народження
                    {personItem && <Birthday birthday={personItem.birthday}/>}
                </div>
                <div>
                    Місце народження
                    <p>{personItem && personItem.place_of_birth}</p>
                </div>
                {personItem?.deathday && <div>
                    Дата смерті
                    <Birthday birthday={personItem.deathday}/>
                </div>}
                <div>
                    Також відомий як:
                    {personItem?.also_known_as &&
                        <ul className={css.also_known_as}>
                            {personItem?.also_known_as.map((value, index) => <AlsoKnownAs key={index} value={value} /> ) }
                        </ul>}
                </div>
            </div>


            <div className={css.rightwrap}>

            </div>

        </div>
    );
};

export {PersonDetails};