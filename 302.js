const istiZnakovi = function (str) {
    var x = 0;
    for (var a = 0, z = 1; z < str.length;) {
        if (str[z] === str[a]) {
            if (x < z - a + 1) {
                x = z - a + 1;
            }
            z++;
        } else {
            a = z;
        }
    }
    return x;
}
console.log(istiZnakovi("baaaccd")) // → 3
console.log(istiZnakovi("ba2dll")) // → 2
