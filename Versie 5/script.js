function myFunction() {
    var element = document.getElementById("body");
    element.classList.toggle("invert");
}

function myFunctiontwo() {
    var element = document.getElementById("body");
    element.classList.toggle("disco");
}


var el = document.getElementById('body');
el.addEventListener('long-press', function (e) {
    el.classList.toggle("disco");
});
//el.addEventListener('touchstart', function (e) {
//    el.classList.toggle("disco");
//});

/*https://www.cssscript.com/handle-long-press-tap-event-in-javascript-long-press-js*/


function myFunctionthree() {
    var element = document.getElementById("body");
    element.classList.toggle("geelgroen");
}

function myFunctionfour() {
    var element = document.getElementById("body");
    element.classList.toggle("blauwrood");
}

function myFunctionfive() {
    var element = document.getElementById("body");
    element.classList.toggle("oranjeroze");
}

function myFunctionsix() {
    var element = document.getElementById("body");
    element.classList.toggle("paarsgeel");
}

function myFunctionseven() {
    var element = document.getElementById("body");
    element.classList.toggle("groenblauw");
}

function myFunctioneight() {
    var element = document.getElementById("body");
    element.classList.toggle("zwartroze");
}

function myFunctionnine() {
    var element = document.getElementById("body");
    element.classList.toggle("oranjegeel");
}

function myFunctionten() {
    var element = document.getElementById("body");
    element.classList.toggle("blauwgeel");
}

function myFunctioneleven() {
    var element = document.getElementById("body");
    element.classList.toggle("zwartblauw");
}

function myFunctiontwelve() {
    var element = document.getElementById("body");
    element.classList.toggle("roodgroen");
}

function myFunctionthirteen() {
    var element = document.getElementById("body");
    element.classList.toggle("oranjeblauw");
}

function myFunctionrond() {
    var element = document.getElementById("clip");
    element.classList.toggle("rond");
}


function switch_div(show) {
    document.getElementById("show_" + show).style.display = "block";
    document.getElementById("show_" + ((show == 1) ? 2 : 1)).style.display = "none";

}


/* 0 tot en met 9-----------------------------*/
/* 0 tot en met 9-----------------------------*/
/* 0 tot en met 9-----------------------------*/

var body = document.querySelector('body');
console.log(body);

window.addEventListener('keydown', toggle);

function toggle(event) {
    if (event.keyCode === 49) {
        body.classList.toggle('blauwrood');
    }

    /* 0 tot en met 9-----------------------------*/

    if (event.keyCode === 48) {
        body.classList.toggle('geelgroen');
    }
    if (event.keyCode === 32) {
        body.classList.toggle('geelgroen');
    }
    if (event.keyCode === 50) {
        body.classList.toggle('oranjeroze');
    }
    if (event.keyCode === 51) {
        body.classList.toggle('paarsgeel');
    }
    if (event.keyCode === 52) {
        body.classList.toggle('groenblauw');
    }
    if (event.keyCode === 53) {
        body.classList.toggle('zwartroze');
    }
    if (event.keyCode === 54) {
        body.classList.toggle('oranjegeel');
    }
    if (event.keyCode === 55) {
        body.classList.toggle('blauwgeel');
    }
    if (event.keyCode === 56) {
        body.classList.toggle('zwartblauw');
    }
    if (event.keyCode === 57) {
        body.classList.toggle('roodgroen');
    }
    /* A tot en met P -----------------------------*/

    if (event.keyCode === 65) {
        body.classList.toggle('geelgroen');
    }
    if (event.keyCode === 83) {
        body.classList.toggle('oranjeroze');
    }
    if (event.keyCode === 68) {
        body.classList.toggle('paarsgeel');
    }
    if (event.keyCode === 70) {
        body.classList.toggle('groenblauw');
    }
    if (event.keyCode === 71) {
        body.classList.toggle('zwartroze');
    }
    if (event.keyCode === 72) {
        body.classList.toggle('oranjeblauw');
    }
    if (event.keyCode === 74) {
        body.classList.toggle('blauwgeel');
    }
    if (event.keyCode === 75) {
        body.classList.toggle('zwartblauw');
    }
    if (event.keyCode === 76) {
        body.classList.toggle('roodgroen');
    }
}

var svg = document.querySelector('svg');
console.log(svg);

window.addEventListener('keydown', move);

function move(event) {
    if (event.keyCode === 37) {
        body.classList.toggle('links');
        body.classList.remove('rechts');
    }
    if (event.keyCode === 39) {
        body.classList.toggle('rechts');
        body.classList.remove('links');
    }
    if (event.keyCode === 40) {
        body.classList.toggle('onder');
        body.classList.remove('boven');
    }
    if (event.keyCode === 38) {
        body.classList.toggle('boven');
        body.classList.remove('onder');
    }
    if (event.keyCode === 190) {
        body.classList.toggle('turnn');
        body.classList.remove('turnnn');

    }
    if (event.keyCode === 188) {
        body.classList.toggle('turnnn');
        body.classList.remove('turnn');

    }
}
