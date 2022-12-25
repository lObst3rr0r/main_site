var id = null;


function left() {
    var elem = document.getElementById("animated");
    var pos = -40;
    clearInterval(id);
    id = setInterval(frame,10);
    function frame() {
        if (pos == 2000){
            clearInterval(id);
            left();
        }
        else {
            pos = pos +5;
            elem.style.left = pos + 'px';
        }
    }
}


let i;
for (i=1;i<9999;i++){
    left();
}


// imagine spending christmas debugging js 


