import * as process from "process";
const base_url: string = process.env.REACT_APP_TMDB_API_URL as string;
const api_key: string = process.env.REACT_APP_TMDB_API_KEY as string;
const public_domain:string = process.env.PUBLIC_DOMAIN as string;
export const API_REQUEST = {
    trending:`${base_url}/trending/all/week?api_key=${api_key}&language-en-US`,
    top_rated:`${base_url}/movie/top_rated?api_key=${api_key}&language-en-US`,
    tv_top_rated:`${base_url}/tv/top_rated?api_key=${api_key}&language-en-US`,
    movie_popular:`${base_url}/movie/popular?api_key=${api_key}&language-en-US`,
    documentary:`${base_url}/discover/movie?api_key=${api_key}&language-en-US&with_genres=99`,
    comedy:`${base_url}/discover/movie?api_key=${api_key}&language-en-US&with_genres=35`,
    family:`${base_url}/discover/movie?api_key=${api_key}&language-en-US&with_genres=10751`,
    history:`${base_url}/discover/movie?api_key=${api_key}&language-en-US&with_genres=36`,
    products_list:`${public_domain}/api/products`,
    subscription: `${public_domain}/api/subscription`,
}