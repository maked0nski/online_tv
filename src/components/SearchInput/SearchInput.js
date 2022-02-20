import React, {useRef} from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './searchInput.module.css';
import {setParams} from "../../store";
import {FormattedMessage} from "react-intl";


const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    width: 90vh !important;
   
    
  }
  // use your custom style for ".popup-content"
  &-content {
    padding: 0;
    left: 5% !important;
    width: 90% !important;
    margin: 0 auto !important;
  }
`;

const SearchInput = () => {

    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const ref = useRef();
    const navigate = useNavigate();


    const onSubmit = (data) => {
        dispatch(setParams(data))
        navigate('/search', {replace: true})
        ref.current.close();
    }

    return (
        <StyledPopup
            className={css.searchPopUp}
            ref={ref}
            trigger={<div className="search" style={{
                left: 0,
                width: '29px',
                height: '29px',
                backgroundImage: 'url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg)'
            }}></div>}
            position="bottom center"
            closeOnDocumentClick
            arrow='bottom left'
        >
            <div className={css.popupContainer} style={{padding: '10px'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/*<FormattedMessage id='placeholder'/>*/}
                    <FormattedMessage id={'placeholder'} defaultMessage={'search'}>
                        {placeholder => <input {...register('query')} placeholder={placeholder}/>}
                    </FormattedMessage>
                    {/*<input {...register('query')} placeholder={'dhsf'}/>*/}

                </form>
            </div>
        </StyledPopup>
    );
};

export {SearchInput};