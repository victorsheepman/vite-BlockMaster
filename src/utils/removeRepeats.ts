import { Movie } from "../schema";

export const removeRepeat = (list:Movie[]) => {
    const uniqueKeySet = new Set();
    return list.filter((movie) => {
        const key = movie.id;
        if (!uniqueKeySet.has(key)) {
            uniqueKeySet.add(key);
            return true;
        }
        return false;
    });
};