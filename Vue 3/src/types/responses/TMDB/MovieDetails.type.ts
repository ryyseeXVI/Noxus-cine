export type MovieDetails = {
    release_date: string;
    title: string;
    adult: boolean;
    production_companies: {name: string, id: string}[];
    overview: string;
    poster_path: string;
    id: string;
    vote_average: number;
    backdrop_path: string;
}