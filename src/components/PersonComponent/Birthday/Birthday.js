import React from 'react';
import {months} from "../../../_config";

// import css from './'

const Birthday = ({birthday}) => {
    const date = birthday.split('-')
    return (
        <>
            <p>{date[2]} {months[+date[1]]} {date[0]}</p>
        </>
    );
};

export {Birthday};