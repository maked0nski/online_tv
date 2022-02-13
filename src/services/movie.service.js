import {axiosService} from "./axios.service";

import {urls} from "../_config";

export const movieService = {
    getDiscoverMovie: (queryString) => axiosService.get(urls.discoverMovie, {params: queryString}).then(value => value.data),
    getDiscoverTV: (queryString) => axiosService.get(urls.discoverTV, {params: queryString}).then(value => value.data),
    getMovieById: ({
                       id,
                       queryString
                   }) => axiosService.get(`${urls.movie}/${id}`, {params: queryString}).then(value => value.data),
    getTvById: ({
                    id,
                    queryString
                }) => axiosService.get(`${urls.tv}/${id}`, {params: queryString}).then(value => value.data),

    getAllPersons: (queryString) => axiosService.get(urls.person.concat('/popular'), {params: queryString}).then(value => value.data),

    getPersonById: ({
                        id,
                        queryString
                    }) => axiosService.get(`${urls.person}/${id}`, {params: queryString}).then(value => value.data),

    getPersonExternalInfo: ({
                                id,
                                queryString
                            }) => axiosService.get(`${urls.person}/${id}/external_ids`, {params: queryString}).then(value => value.data),
    getCombined_credits: ({
                              id,
                              queryString
                          }) => axiosService.get(`${urls.person}/${id}/combined_credits`, {params: queryString}).then(value => value.data),


    getSearchMovie: (queryString) => axiosService.get(urls.searchMovie, {params: queryString}).then(value => value.data),
    getSearchTv: (queryString) => axiosService.get(urls.searchTv, {params: queryString}).then(value => value.data),
    getSearchPerson: (queryString) => axiosService.get(urls.searchPerson, {params: queryString}).then(value => value.data),

    // getLanguagesList: () => axiosService.get(urls.languages).then(value => value.data),

}
