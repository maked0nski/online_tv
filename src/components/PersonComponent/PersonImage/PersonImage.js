import React from 'react';
import css from "../../../Pages/PersonDetails/personDetails.module.css";
import {defaultImageLink, defaultPerson} from "../../../_config";

// import css from './'

const PersonImage = ({name, profile_path}) => {
    return (
        <div className={css.image}>
            <img
                src={defaultImageLink.w300_and_h450.concat(profile_path)}
                alt={name}
                title={name}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultPerson
                }}
            />
        </div>
    );
};

export {PersonImage};