window.onload = function(){
    var wrapper = document.getElementById("wrapper");
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImage");

    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;
    canvas.style.backgroundColor = "white";
    canvas.style.position = "absolute";
    canvas.style.opacity = "0.5";

    wrapper.appendChild(canvas);
}