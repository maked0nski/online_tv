import React from 'react';

import css from './personItem.module.css'
import {defaultImageLink, defaultPerson} from "../../_config";
import {Link} from "react-router-dom";

const PersonItem = ({item}) => {

    return (
        <div className={css.cardWrap}>
            <div className={css.card}>
                <div className={css.image}>
                    <Link to={item.id.toString()}>
                        <img
                            src={defaultImageLink.w235_and_h235.concat(item.profile_path)}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = defaultPerson
                            }}
                            alt={item?.name}
                            title={item?.name}
                        />
                    </Link>
                </div>
                <div className={css.name}>
                    <p>
                        <Link to={'#'}>
                            {item?.name}
                        </Link>
                    </p>
                    <p>

                    </p>

                </div>
            </div>
        </div>
    );
};

export {PersonItem};