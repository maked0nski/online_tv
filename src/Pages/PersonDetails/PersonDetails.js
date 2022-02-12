import React, {useEffect} from 'react';

import css from './personDetails.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getPersonCombined_credits, getPersonItem, getPersonMoreInfo} from "../../store";
import {AlsoKnownAs, Birthday, ListMovie, PersonImage, SocialLinks} from "../../components";
import {FormattedMessage} from "react-intl";


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
    }, [language])


    return (
        <div className={css.wraper}>
            {moreInfo && personItem && combined_credits &&
                <div className={css.leftwrap}>
                    {personItem && <PersonImage profile_path={personItem.profile_path} name={personItem.name}/>}
                    <div className={css.social_links}>
                        {moreInfo && <SocialLinks moreInfo={moreInfo}/>}
                    </div>
                    <div className={css.infoTitle}>
                        <FormattedMessage id='personalInfo' />
                    </div>
                    <div className={css.infoBlock}>
                        <div><FormattedMessage id='knownCredits' /></div>
                        {combined_credits && <p>{combined_credits.cast.length}</p>}
                    </div>
                    <div className={css.infoBlock}>
                        <div><FormattedMessage id='gender' /></div>
                        {personItem && <p>{personItem.gender === 2 ? <FormattedMessage id='male' /> : <FormattedMessage id='female' />}</p>}
                    </div>
                    <div className={css.infoBlock}>
                        <div><FormattedMessage id='birthday' /></div>
                        {personItem && <Birthday birthday={personItem.birthday}/>}
                    </div>
                    <div className={css.infoBlock}>
                        <div><FormattedMessage id='placeBirth' /></div>
                        <p>{personItem && personItem.place_of_birth}</p>
                    </div>
                    {personItem?.deathday && <div className={css.infoBlock}>
                        <div><FormattedMessage id='dateDeath' /></div>
                        <Birthday birthday={personItem.deathday}/>
                    </div>}
                    <div className={css.infoBlock}>
                        <div><FormattedMessage id='alsoKnownAs' /></div>
                        {personItem?.also_known_as &&
                            <ul className={css.also_known_as}>
                                {personItem?.also_known_as.map((value, index) => <AlsoKnownAs key={index}
                                                                                              value={value}/>)}
                            </ul>}
                    </div>
                </div>
            }

            {personItem && combined_credits &&
                <div className={css.rightwrap}>
                    <h2>{personItem.name}</h2>
                    <div className={css.biography}>
                        <h3><FormattedMessage id='biography' /></h3>
                        <div>{personItem.biography}</div>
                    </div>
                    <div>
                        <h3><FormattedMessage id='acting' /></h3>
                        <div className={css.listMovie}>
                            {combined_credits.cast.map(value => <ListMovie key={value.credit_id} value={value}/>)}

                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export {PersonDetails};