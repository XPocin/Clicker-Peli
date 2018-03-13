    var pisteet = 0

    function Nappi(){
        var pisteet =+ 1;
        console.log (pisteet);
    }


    function Show(){
        var pisteet = 0;
        document.getElementById("Show text").innerHTML = pisteet;
    }

    function kerroin1(){
        var pisteet 
    }
    function kerroin2(){
        var pisteet 
    }
    function kerroin3(){
        var pisteet 
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