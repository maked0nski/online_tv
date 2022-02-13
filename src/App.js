import {Routes, Route, Navigate} from 'react-router-dom'
import {IntlProvider} from "react-intl";
import {LOCALES, messages} from "./i18n";
import {useSelector} from "react-redux";

import './App.css';
import {Layout, ListSearch} from "./components";
import {MainPage, MovieDetails, NotFoundPage, CastPage, MainTv, PersonsPage, PersonDetails, SearchPage} from "./Pages";

// export function getInitialLocale() {
//     const savedLocale = localStorage.getItem('language')
//     return savedLocale || LOCALES.ENGLISH
// }

function App() {

    const {search: {language}} = useSelector(state => state['hrefSearchReducer']);

    const locale = language


    return (

        <IntlProvider
            messages={messages[locale]}
            locale={locale}
            defaultLocale={LOCALES.RUSSIAN}
        >

            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Navigate to={'movie'}/>}/>

                    <Route path={"movie"} element={<MainPage/>}/>
                    <Route path={"movie/:id"} element={<MovieDetails/>}/>
                    <Route path={"movie/:id/cast"} element={<CastPage/>}/>


                    <Route path={"tv"} element={<MainTv/>}/>
                    <Route path={'tv/:id'} element={<MovieDetails/>}/>
                    <Route path={"tv/:id/cast"} element={<CastPage/>}/>


                    <Route path={"person"} element={<PersonsPage/>}/>
                    <Route path={'person/:id'} element={<PersonDetails/>}/>

                    <Route path={"search"} element={<SearchPage/>}>
                        <Route path={":page"} element={<ListSearch/>}/>
                    </Route>


                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </IntlProvider>
    )
        ;
}

export default App;
