function myFunction() {
    var element = document.getElementById("body");
    element.classList.toggle("invert");
}

function myFunctiontwo() {
    var element = document.getElementById("body");
    element.classList.toggle("turn");
}




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
    var element = document.getElementById("rondje");
    element.classList.toggle("rond");
}


function switch_div(show) {
    document.getElementById("show_" + show).style.display = "block";
    document.getElementById("show_" + ((show == 1) ? 2 : 1)).style.display = "none";
   
}
