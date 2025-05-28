let temp = document.getElementById("temp");
let cToF = document.getElementById("cToF");
let fToC = document.getElementById("fToC");
let tempSubmit = document.getElementById("tempSubmit");

tempSubmit.onclick = function(){
  let tempBox = document.getElementById("tempBox").value;
  if(isNaN(tempBox)){
    temp.textContent = `${tempBox} is not valid.`;
  }

  else{
    tempBox = Number(tempBox);
    if(cToF.checked){
      tempBox = (tempBox * (9/5)) + 32;
      temp.textContent = `${tempBox.toFixed(2)}°F`;
    }
    else if(fToC.checked){
      tempBox = (tempBox - 32) / (9/5);
      temp.textContent = `${tempBox.toFixed(2)}°C`;
    }
    else{
      temp.textContent = `Please select a unit.`;
    }
  }
}


