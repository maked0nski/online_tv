import React from 'react';
import {Link} from "react-router-dom";

import css from './person.module.css'


const Person = ({item}) => {


    const {id, character, name, profile_path} = item;
    let src
    if (profile_path) {
        src = `https://www.themoviedb.org/t/p/w66_and_h66_face${profile_path}`
    } else {
        src = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`
    }

    return (
        <div className={css.card}>
            <Link to={'#'}>
                <img className={css.profImage} src={src} alt={name}/>
            </Link>
            <div className={css.nameBlock}>
                <Link to={'#'}>
                    <p className={css.name}>{name}</p>
                    <p className={css.character}>{character}</p>
                </Link>
            </div>

        </div>
    );
};

export {Person};