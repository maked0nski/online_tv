import {Routes, Route, Navigate} from 'react-router-dom'

import './App.css';
import {Layout} from "./components";
import {MainPage, MovieDetails, NotFoundPage, CastPage, MainTv, PersonsPage, PersonDetails} from "./Pages";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Navigate to={'movie'}/>} />

                <Route path={"movie"} element={<MainPage/>} />
                <Route path={"movie/:id"} element={<MovieDetails/>} />
                <Route path={"movie/:id/cast"} element={<CastPage/>} />


                <Route path={"tv"} element={<MainTv/>} />
                <Route path={'tv/:id'} element={<MovieDetails/>} />
                <Route path={"tv/:id/cast"} element={<CastPage/>} />


                <Route path={"person"} element={<PersonsPage/>} />
                <Route path={'person/:id'} element={<PersonDetails/>} />


                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
