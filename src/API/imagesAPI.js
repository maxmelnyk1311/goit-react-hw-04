import axios from 'axios';

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImagesByQuery = async (query, page) => {
    const response = await axios.get("/search/photos", {
        params: {
            query: query,
            per_page: 12,
            page,
        },
        headers: {
            Authorization: "Authorization: Client-ID JklcAh0xNtCynPNEyRrGS09wboLhbYrq6ZORsDPNJOw"
        }
    });
    return response.data;
}