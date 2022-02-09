import React from 'react';
import {Link} from "@mui/material";

// import css from './'

const Genres = ({genre:{id, name}}) => {

    return (
        <Link to={'#'}>
            <div>
                {name}
            </div>
        </Link>

    );
};

export {Genres};