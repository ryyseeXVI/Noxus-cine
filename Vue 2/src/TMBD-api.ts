import axios from "axios";
import { MovieDetails } from "./types/responses/TMDB/MovieDetails.type";
import { router } from './main';
import { store } from './store';

const API_KEY = 'api_key=2336fd5abbe0631a002690648318efa4';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + `/discover/movie?sort_by=popularity.desc&${API_KEY}`;
export const IMG_URL = 'https://api.themoviedb.org/3/movie/447365/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg';


export async function getDiscoverMovies() {
  try {
    const response = await axios.get(API_URL);
    return response.data.results;
  } catch (error) {
      return [];
    }
}

function containsOnlyDigits(inputString: string): boolean {
  return inputString.split("").every((char) => /\d/.test(char));
}

export async function searchMovieById(myid: string): Promise <MovieDetails | null>{
  try {
    if (containsOnlyDigits(myid) == false){
      router.push('/error/badchars');
    }
    const response = await axios.get(`${BASE_URL}/movie/${myid}?${API_KEY}&language=en-US`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
      router.push('/error/404');
    }
    return null;
  }
}

export async function searchActorById(myid: string){
  try {
    if (containsOnlyDigits(myid) == false){
      router.push('/error/badchars');
    }
    const response = await axios.get(`${BASE_URL}/person/${myid}?${API_KEY}&append_to_response=credits`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
      router.push('/error/404');
    }
    return null;
  }
}




export async function searchMovieByName(searchTerm?: string){
  try {
    if (searchTerm) {
      const response = await axios.get(`${BASE_URL}/search/movie?${API_KEY}&query=${searchTerm}`);
      return response.data.results;
    } else {
      const response = await axios.get(API_URL);
      return response.data.results;
    }
  } catch (error) {
    console.error('error', error);
    return [];
  }
}

export async function searchActorsMovie(searchTerm?: string){
  try {
    if (searchTerm) {
      const response = await axios.get(`${BASE_URL}/movie/${searchTerm}/casts?${API_KEY}`);
      return response.data.cast;
    } else {
      const response = await axios.get(API_URL);
      return response.data.cast;
    }
  } catch (error) {
    console.error('error', error);
    return null;
  }
}


export async function favouritesDetails(idTab: string[]): Promise<MovieDetails[]> {
    const movieTab: (MovieDetails | null)[] = await Promise.all(idTab.map((id) => searchMovieById(id)));
    console.log('favmovietab', movieTab);
    
    // Filtrer les valeurs null du tableau résultant
    const filteredMovieTab: MovieDetails[] = movieTab.filter((movie) => movie !== null) as MovieDetails[];
    return filteredMovieTab;
  }

