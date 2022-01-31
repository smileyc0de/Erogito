const dolphin = document.getElementById("dolphin");
const turtle = document.getElementById("turtle");
const monkey = document.getElementById("monkey");
const parrot = document.getElementById("parrot");
const butterfly = document.getElementById("butterfly");
const lion = document.getElementById("lion");
const tiger = document.getElementById("tiger");
const elephant = document.getElementById("elephant");
const squirrel = document.getElementById("squirrel");
const bunny = document.getElementById("bunny");
const fox = document.getElementById("fox");
const fish = document.getElementById("fish");


var playSound = new Audio('');


dolphin.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/dolphin.m4a');
    playSound.play();     
     
});


turtle.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/turtle.m4a');
    playSound.play();     
     
});


monkey.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/monkey.m4a');
    playSound.play();     
   
});


parrot.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/parrot.m4a');
    playSound.play();     
    
});


butterfly.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/butterfly.m4a');
    playSound.play();     
     
  });


lion.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/lion.m4a');
    playSound.play();     
     
  });


tiger.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/tiger.m4a');
    playSound.play();     
    
  });


elephant.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/elephant.m4a');
    playSound.play();     
    
  });


squirrel.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/squirrel.m4a');
    playSound.play();     
     
  });


bunny.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/bunny.m4a');
    playSound.play();     
  
  });


fox.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/fox.m4a');
    playSound.play();     
     
  });


fish.addEventListener('click', function(){
    if (playSound.paused == false){
        playSound.pause();   
    }  

    playSound = new Audio('audios/fish.m4a');
    playSound.play();     
     
  });