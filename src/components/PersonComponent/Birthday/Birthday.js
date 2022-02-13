import React from 'react';
import {months} from "../../../_config";
import {FormattedMessage} from "react-intl";


const Birthday = ({birthday}) => {
    let date
    if(birthday){
        date= birthday.split('-')
    }

    return (
        <>
            <p>{birthday ? `${date[2]} ${months[+date[1]]} ${date[0]}` : <FormattedMessage id='unknown'/>}</p>
        </>
    );
};

export {Birthday};