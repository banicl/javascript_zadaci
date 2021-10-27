const min = function (x, y) {
    if (x < y) {
        return x;
    }
    if (y < x) {
        return y;
    }
}
console.log(min(0, 4)) // → 0 
console.log(min(0, -4)) // → -4