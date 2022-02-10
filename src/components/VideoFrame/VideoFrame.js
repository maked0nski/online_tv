import React from 'react';

import {urls} from "../../_config";
import css from './videoFrame.module.css'

const VideoFrame = ({video: {key, name}, widthBlock}) => {

    const src = urls.youtubeLink.concat(key)

    let height = widthBlock / 1.78

    return (
        <div className={css.frameBlock}>
            <h3>{name}</h3>
            <iframe
                src={src}
                width={widthBlock}
                height={height}
                frameBorder={0}
                allow={'autoplay; encrypted-media'}
                allowFullScreen={true}
                title={name}
            />

        </div>
    );
};

export {VideoFrame};
