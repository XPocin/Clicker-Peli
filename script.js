var pisteet = 0;
var kerroin = 1;
var clout;
var laskenta = document.getElementById("laskenta");
var laskuri = 0;

function nappi(){
    laskuri = laskuri + 1 * kerroin;
    console.log('Pisteet: ' + laskuri);
    tulosta();
}

function yksipuoli(){
    if (laskuri < 150) {
        return;
    }
    laskuri = laskuri-150;
    kerroin = kerroin + 1.5;
    clout++;
    tulosta();
    console.log("clout:" + kerroin);
}

function kolme(){
    if (laskuri < 3000) {
        return;
    }
    laskuri = laskuri-3000;
    kerroin = kerroin + 3;
    clout++;
    tulosta();
    console.log("clout:" + kerroin);
}

function kuusi(){
    if (laskuri < 6000) {
        return;
    }
    laskuri = laskuri-6000;
    kerroin = kerroin + 6;
    clout++;
    tulosta();
    console.log("clout:" + kerroin);
    }

function kymmenen(){
    if (laskuri < 10000) {
        return;
    }
    laskuri = laskuri-10000;
    kerroin = kerroin + 10;
    clout++;
    tulosta();
    console.log("clout:" + kerroin);
    }

function kaksi(){
    if (laskuri < 20000) {
        return;
    }
    laskuri = laskuri-20000;
    kerroin = kerroin + 20;
    clout++;
    tulosta();
    console.log("clout:" + kerroin);
    }


function tulosta(){
    console.log(laskuri);
    document.getElementById("laskenta").innerHTML = laskuri;
}

function laskuri(){
    console.log(pisteet);
    tulosta();
}

function laske(){
    laskuri = laskuri + 1 * clout *10;
    laskuri++;
    laskenta.innerHTML = laskuri;
}