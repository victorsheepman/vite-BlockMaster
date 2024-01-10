import { Movie } from "../schema"

export const filterByTitle = (title:string, movies:Movie[]):Movie[] => {
    const list:Movie[] = []
    movies.forEach((movie) => {
      if (movie.title.toLowerCase().includes(title.toLowerCase())) {
        list.push(movie)
      }
    })
    return list
}
