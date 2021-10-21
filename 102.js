let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;


if (bodovi >= 89) {
    ocjena = 5;
}
else if (bodovi >= 76 && bodovi <= 88.9) {
    ocjena = 4;
}
else if (bodovi >= 63 && bodovi <= 75.9) {
    ocjena = 3;
}
else if (bodovi >= 50 && bodovi <= 62.9) {
    ocjena = 2;
}
else if (bodovi < 50) {
    ocjena = 1;
}
if (ocjena > 1) {
    poruka = alert('Čestitam! Vaša ocjena je: ' + ocjena);
}

console.log(poruka);
