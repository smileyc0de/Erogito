
const addbtn = document.getElementById('add');
const doneadding = document.getElementById('doneadd');
const imgField = document.getElementById('imgarea');
const audiopath = document.getElementById('audiolink');

var playSound = new Audio('');

doneadding.onclick = addElement; 
function addElement(e){
  //hide the input  area
  document.getElementById("textinput").className = "userinput hidden";

  
  // create new image element
  var newimg = document.createElement("img");
  var imglink = document.getElementById('imglink').value;
//  document.getElementById('imglink').value = "";

  // set source of image
  newimg.src = imglink;
 

  newimg.onerror = function(){alert("Image not found!");}; //cannot load image

  newimg.onload = function(){

    newimg.style.height = "150px";
    newimg.style.width = "150px";


    imgField.appendChild(newimg);
  

    var audiolink = audiopath.value; 
    playSound = new Audio('audiolink');
//    document.getElementById('audiolink').value = "";
 
    newimg.onclick = playAudio;  


    // create delete button
    var delBtn = document.createElement('button');
    var textBtn = document.createTextNode("Delete");
    delBtn.appendChild(textBtn);
    imgField.appendChild(delBtn);

    delBtn.style.backgroundColor = "#F08080";
    delBtn.style.color = "#AA5151";
    delBtn.style.border="gray";


    // add listener for delete button
    delBtn.onclick = function delImage(){
      imgField.removeChild(delBtn);
      imgField.removeChild(newimg);
    };    

  }; 

};


function playAudio() {
  var startAudio = playSound.play();
      
  if (startAudio !== undefined) {        
    startAudio.catch(function(error){alert("Unable to play audio!");});  
  }
};




addbtn.addEventListener('click', function(){
  document.getElementById("textinput").className = "userinput";
});

