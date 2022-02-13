import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {List} from "../List/List";

// import css from './'

const ListSearch = () => {
    const {page} = useParams();
    const {movie, tv, person} = useSelector(state => state['searchReducer']);

    let temp
switch (page) {
    case 'movie': return temp = movie.results.map(value => <List key={value.id} value={value} type={'movie'}/>)
    case 'tv': return temp = tv.results.map(value => <List key={value.id} value={value} type={'tv'}/>)
    case 'person': return temp = person.results.map(value => <List key={value.id} value={value} type={'person'}/>)
    default: <Link to={'/'}/>
}



    return (
        {temp}
    );
};

export {ListSearch};