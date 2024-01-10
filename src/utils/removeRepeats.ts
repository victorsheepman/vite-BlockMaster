import { Movie } from "../schema";

export const removeRepeat = (array:Movie[]) => {
    const uniqueKeySet = new Set();
    return array.filter((obj) => {
        const key = obj.id;
        if (!uniqueKeySet.has(key)) {
            uniqueKeySet.add(key);
            return true;
        }
        return false;
    });
};