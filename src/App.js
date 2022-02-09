import {Routes, Route, Navigate} from 'react-router-dom'

import './App.css';
import {Layout} from "./components";
import {MainPage, MovieDetails, NotFoundPage} from "./Pages";
import {CastPage} from "./Pages/CastPage/CastPage";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>

                <Route path={"movie"} element={<MainPage/>}/>
                <Route path={"movie/:id"} element={<MovieDetails/>}/>
                <Route path={"movie/:id/cast"} element={<CastPage/>}/>


                {/*<Route path={"tv"} element={<PostsPage />}>*/}
                {/*    <Route path={':id'} element={<PostPageDetails />} />*/}
                {/*</Route>*/}

                {/*<Route path={"comments"} element={<CommentsPage />} >*/}
                {/*    <Route path={':id'} element={<CommentsPageDetails />} />*/}
                {/*</Route>*/}


                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
