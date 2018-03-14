var pisteet = 0
var kerroin = 1
var laskuri = 0;

function nappi(){
        laskuri = laskuri + 1 * kerroin;
        console.log('Pisteet: ' + laskuri);
        tulosta();
    }

function tulosta(){
    console.log(laskuri);
    document.getElementById("klikit").innerHTML = laskuri;
}

function laskuri(){
    console.log(pisteet);
    tulosta();
}

    function Show(){
        var pisteet = 0;
        document.getElementById("Show text").innerHTML = pisteet;
    }

    function piirra(){
        var c=document.getElementById("Canvas");
        var ctx=c.getContext("2d");
        
        var img = new Image;
        img.src = "click.jpg";
        img.onload = function() {
            ctx.drawImage(img, 190,80);
            this.onclick.alert ("the image is drawn");
        }
        
   }