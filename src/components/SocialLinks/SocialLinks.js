import React from 'react';
import {Link} from "react-router-dom";

import css from './socialLink.module.css'

const SocialLinks = ({moreInfo}) => {

    return (
        <>
            <div><Link to={moreInfo?.facebook_id ? moreInfo.facebook_id : '#'}><span className={css.icons}
                style={{backgroundImage: 'url(https://www.themoviedb.org/assets/2/v4/glyphicons/social/facebook-71155d1cd369c47ce8456477833a92c324fa01e6d628cb6ece19cedea3c1c480.svg)'}}></span></Link>
            </div>
            <div><Link to={moreInfo?.twitter_id ? moreInfo.twitter_id : '#'}><span className={css.icons}
                style={{backgroundImage: 'url(https://www.themoviedb.org/assets/2/v4/glyphicons/social/twitter-a6ff8c172b8e086f4a64578cee0a16676c1a067b47a1b1b186d58795d241a852.svg)'}}></span></Link>
            </div>
            <div><Link to={moreInfo?.instagram_id ? moreInfo.instagram_id : '#'}><span className={css.icons}
                style={{backgroundImage: 'url(https://www.themoviedb.org/assets/2/v4/glyphicons/social/instagram-74e6299c864adc384258da3b3a8eb09282b7ccda4dd1dfa9a4158ba2ea8583b9.svg)'}}></span></Link>
            </div>
        </>
    );
};

export {SocialLinks};