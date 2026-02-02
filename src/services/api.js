const API_KEY ="21366872515ecf83819d6e314bfdb8a9";
const BASE_URL ="https://api.themoviedb.org/3";

export const getPopularMovies =async(page=1) => {
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    const data=await response.json();
    return data
};


export const searchMovies =async(query, page=1) => {
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`);
    const data=await response.json();
    return data
};

