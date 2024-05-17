import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TMDB_BASE_URL, API_KEY } from '../utils/constant';
import axios from 'axios';
const initialState = {
    movies: [],
    genres: [],
    generesLoaded: false
}
export const getGenres = createAsyncThunk('netflix/genres', async () => {
    try {
        const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
        return response.data.genres;
    }
    catch (err) {
        throw err;
    }
});
const createArrayFromData = (array,moviesArray,genres) => {
    array.forEach(movie => {
        const moviesGenres = [];
        movie.genre_ids.forEach(genre => {
            const name = genres.find(({id}) => id === genre);
            if(name) moviesGenres.push(name.name)
        });
        if(movie.backdrop_path) {
            return moviesArray.push({
                id: movie.id,
                name: movie?.original_name? movie?.original_name : movie.original_title,
                image: movie.backdrop_path,
                genres: moviesGenres.slice(0,3)
            })
        }
    });
}
const getRawData = async (api,genres, paging = false) => {
    const moviesArray = [];
    for(let i = 1;moviesArray.length < 60 && i< 10; i ++) {
        const {data: {results},}  = await axios.get(`${api}${paging?`&page=${i}`: ''}`);
        createArrayFromData(results,moviesArray,genres);
    }
    return moviesArray;
}
export const fetchMovies = createAsyncThunk('netflix/trending',async ({type}, thunkApi) => {
    const {netflix: {genres}} = thunkApi.getState();
    return getRawData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,genres,true)
})
const NetflixSlice = createSlice({
    name: "netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.generesLoaded = true;
        });
        builder.addCase(fetchMovies.fulfilled,(state,action) => {
                state.movies= action.payload;
        });
    }
});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer
    }
})