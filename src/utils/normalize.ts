import { Movie } from "../schema"

  
export const getAllIds = (list: Movie[], oldList: number[] = []): number[] => {
    return oldList.concat(...list.map(movie => movie.id));
};

export const getMostValuedIds = (list:Movie[],oldList:number[] = []): number[] => {
    return list.reduce((list, movie) => {
        if (movie.vote_average >= 7) {
            list.push(movie.id)
        }
        return list
    },oldList)
}
  
export const getLeastValuedIds = (list:Movie[], oldList:number[] = []):number[] => {
    return list.reduce((list, movie) => {
        if (movie.vote_average < 7) {
            list.push(movie.id)
        }
        return list
    },oldList)
}
