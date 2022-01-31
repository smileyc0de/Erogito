const square = document.getElementById("square");
const circle = document.getElementById("circle");
const triangle = document.getElementById("triangle");

var playSound = new Audio('');

square.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/square.m4a');
    playSound.play();
});



circle.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/circle.m4a');
    playSound.play();     
     
});


triangle.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/triangle.m4a');
    playSound.play();     
     
});




pentagon.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/pentagon.m4a');
    playSound.play();     
     
});



octagon.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/octagon.m4a');
    playSound.play();     
     
});




rhombus.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/rhombus.m4a');
    playSound.play();     
     
});




trapezoid.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/trapezoid.m4a');
    playSound.play();     
     
});



rectangle.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/rectangle.m4a');
    playSound.play();     
     
});




oval.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/oval.m4a');
    playSound.play();     
     
  });


hexagon.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/hexagon.m4a');
    playSound.play();     
     
});



star.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/star.m4a');
    playSound.play();     
     
});



heart.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/heart.m4a');
    playSound.play();     
     
});

