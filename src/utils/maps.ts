import { Movie } from "../schema"

export const getAllIds = (newList: Movie[], idList: number[] = []): number[] => {
    return idList.concat(...newList.map(movie => movie.id));
};

export const getMostValuedIds = (list:Movie[],idList:number[] = []): number[] => {
    return list.reduce((movieIds, movie) => {
        if (movie.vote_average >= 7) {
            movieIds.push(movie.id)
        }
        return movieIds
    },idList)
}
  
export const getLeastValuedIds = (list:Movie[], idList:number[] = []):number[] => {
    return list.reduce((movieIds, movie) => {
        if (movie.vote_average < 7) {
            movieIds.push(movie.id)
        }
        return movieIds
    },idList)
}
