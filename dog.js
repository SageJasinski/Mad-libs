let userInputs = { input1:"", input2:"", input3:"", input4:"", input5:"", input6:"", input7:"", input8:"", input9:"", input10:""}; 


let theStory = "<h1>Dog</h1><p>You won't believe what my pet <span id=\"output1\"></span> did last <span id=\"output2\"></span>! After a long day of <span id=\"output3\"></span> at <span id=\"output4\"></span> </p>";

// <!-- "You won't believe what my pet _______, _______ did last _______! After a long day of _______ at _______, I came
        // home to find what he/she had _______ all over the new _______. I had just bought it last _______, and it's
        // already _______. I have no idea what I'm going to do about this. I do know, however, that I need to punish my
        // pet! I was considering _______ him/her, but I felt that was a bit _______. Maybe I should let it slide and try
        // to calm down by eating my comfort food _______ _______." -->


let theStory2 = "<h1>Dog</h1>"
function submitInputs() { //The user has hit Submit. Collects data from the form.
  userInputs.input1 = document.getElementById('input1').value;
  userInputs.input2 = document.getElementById('input2').value;
  userInputs.input3 = document.getElementById('input3').value;
  userInputs.input4 = document.getElementById('input4').value; 
  userInputs.input5 = document.getElementById('input5').value;
  userInputs.input6 = document.getElementById('input6').value;
  userInputs.input7 = document.getElementById('input7').value;
  userInputs.input8 = document.getElementById('input8').value;
  userInputs.input9= document.getElementById('input9').value;
  
  
  createMadLibs(); //Calls the function to write the story.
}
  submitInputs(); //Collects any data from the form.
function createMadLibs() { //Creates the story.
  document.getElementById("theStory").innerHTML = theStory;
//   document.getElementById("theStory2").innerHTML = theStory2;
  document.getElementById("output1").innerHTML = userInputs.input1;
  document.getElementById("output2").innerHTML = userInputs.input2;
  document.getElementById("output3").innerHTML = userInputs.input3;
  document.getElementById("output4").innerHTML = userInputs.input4;
  document.getElementById("output5").innerHTML =userInputs.input5;
  document.getElementById("output6").innerHTML = userInputs.input6;
  document.getElementById("output7").innerHTML = userInputs.input7;
  document.getElementById("output8").innerHTML = userInputs.input8;
  document.getElementById("output9").innerHTML =userInputs.input9;

}

