import { Movie } from "../schema"

export const filterByTitle = (title:string, list:Movie[]):Movie[] => {
    const moviesFinded:Movie[] = []
    list.forEach((movie) => {
      if (movie.title.toLowerCase().includes(title.toLowerCase())) {
        moviesFinded.push(movie)
      }
    })
    return moviesFinded
}
