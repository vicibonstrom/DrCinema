import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getMovies } from "../services/moviesService";
import { Movie } from "../types/movie";

const moviesSlice = createSlice({
  name: "movies",
  initialState: [] as Movie[],
  reducers: {
    setMovies: (state, action) => action.payload,
  },
});