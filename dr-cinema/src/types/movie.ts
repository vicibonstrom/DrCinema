export interface Genre {
  ID: number;
  Name: string;
  NameEN: string;
}

export interface CinemaShort {
  id: number;
  name: string;
}

export interface Schedule {
  time: string;
  purchase_url: string;
}

export interface Showtime {
  cinema: CinemaShort;
  schedule: Schedule[];
}

export interface TrailerResult {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface Trailer {
  id: number;
  results: TrailerResult[];
}

export interface Omdb {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  tomatoMeter: string;
  tomatoImage: string;
  tomatoRating: string;
  tomatoReviews: string;
  tomatoFresh: string;
  tomatoRotten: string;
  tomatoConsensus: string;
  tomatoUserMeter: string;
  tomatoUserRating: string;
  tomatoUserReviews: string;
  tomatoURL: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface Movie {
  _id: string;
  id: number;
  ids: {
    imdb: string;
    rotten: string | null;
    tmdb: string | null;
  };
  title: string;
  alternativeTitles: string;
  year: string;
  durationMinutes: number;
  genres: Genre[];
  poster: string;
  actors_abridged: { name: string }[];
  directors_abridged: { name: string }[];
  trailers: Trailer[];
  omdb: Omdb[];
  plot: string;
}