import {axiosService} from "./axios.service";

import {urls} from "../_config";

export const movieService = {
    getDiscoverMovie: (queryString) => axiosService.get(urls.discoverMovie,{params: queryString}).then(value => value.data),
    getMovieById: ({id, queryString}) => axiosService.get(`${urls.movie}/${id}`,{params: queryString}).then(value => value.data)
}
