import React, {useRef} from 'react';
import {useForm} from "react-hook-form";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {FormattedMessage} from "react-intl";

import css from './popUpLanguage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setParams} from "../../store";

const PopUpLanguage = () => {

    const {register, handleSubmit} = useForm();
    const {search: {language}} = useSelector(state => state['hrefSearchReducer']);
    const dispatch = useDispatch();
    const ref = useRef();


    const onchange = (data) => {
        dispatch(setParams(data))
        localStorage.setItem('language', data.language);
        // localStorage.setItem('locale', (data.language === 'uk-UA' ? LOCALES.RUSSIAN : LOCALES.ENGLISH))
        ref.current.close();
    }


    let languageLabel = language.split('-', 1)

    return (
        <Popup className={css.languagePopup} ref={ref} trigger={<span>{languageLabel}</span>} position="bottom center">
            <div className={css.popupContainer} style={{padding: '10px'}}>
                <h2 style={{fontSize: '1.3em', margin: '0 0 10px 0', textAlign: 'center'}}><FormattedMessage
                    id='chooseLanguage'/></h2>
                <form onChange={handleSubmit(onchange)}>
                    <label style={{display: 'flex', flexDirection: 'column'}}>
                        <span><FormattedMessage id='chooseLanguage'/></span>
                        <select {...register('language')} defaultValue={'uk-UA'}>
                            <option value='uk-UA'>Українська</option>
                            <option value='ru-RU'>Русский</option>
                            <option value='en-US'>English</option>


                        </select>
                    </label>
                </form>
            </div>
        </Popup>
    );
};

export {PopUpLanguage};