export function ismaelMaxOfThree(a,b,c) {
    
    if ((a > b) && (a > c)) {
        return a
    } if (c > b) {
        return c
    } else {
        return b
    }
}