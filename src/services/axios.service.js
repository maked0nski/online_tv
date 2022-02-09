import axios from "axios";

import {AUTH_TOKEN, baseURL} from "../_config";

axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

const axiosService = axios.create({baseURL});

export {axiosService}

