import React from 'react';
import {Link} from "react-router-dom";

import css from './cast.module.css'
import {defaultPerson} from "../../_config";

const Cast = ({item}) => {

    const {character, name, profile_path, id} = item;

    // let src
    // if (profile_path) {
    //     src = `https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`
    // } else {
    //     src = defaultPerson
    // }


    return (
        <div className={css.card}>
            <Link to={`/person/`.concat(id)}>
                <img
                    className={css.profImage}
                    src={`https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultPerson
                    }}
                    alt={name}
                />

                <div className={css.nameBlock}>
                    <p className={css.name}>{name}</p>
                    <p className={css.character}>{character}</p>
                </div>
            </Link>
        </div>

    );
};

export {Cast};