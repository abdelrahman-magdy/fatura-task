import axios from "axios";

const API_URL = 'https://g.tenor.com/v1/search?'

export const axiosClient = axios.create({
    baseURL: API_URL
});

export const serviceApi = {
    get(resource, params) {
        return axiosClient.get(`${resource}`, params).catch((error) => {
            throw new Error(`ApiService ${error}`);
        });
    },

    post(resource, params) {
        return axiosClient.post(`${resource}`, params);
    },

    update(resource, slug, params) {
        return axiosClient.put(`${resource}/${slug}`, params);
    },

    put(resource, params) {
        return axiosClient.put(`${resource}`, params);
    },

    delete(resource) {
        return axiosClient.delete(resource).catch((error) => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }

};