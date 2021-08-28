import { NUMBER } from "typings";

const index = (array: NUMBER[]) => {
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default index