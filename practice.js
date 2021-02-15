window.onload,window.onresize = function(){
    var wrapper = document.getElementById("wrapper");
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImage");

    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;
    canvas.style.backgroundColor = "white";

    console.log("Wrapper:"+wrapper.offsetHeight+"x"+wrapper.offsetWidth);
    console.log("Image:"+image.offsetHeight+"x"+image.offsetWidth);
    console.log("Canvas:"+canvas.height+"x"+canvas.width);
}