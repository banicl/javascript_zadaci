var velicina = 4;
for (brojac = 1; brojac <= 8; brojac++) {
    if (brojac % 2 == 0) {
        for (i = 1; i <= velicina; i++) {
            document.write("#" + " ");
        }
    }
    else {
        for (i = 1; i <= velicina; i++) {
            document.write("&nbsp;" + "#");
        }
    }
    document.write("<br />");
}