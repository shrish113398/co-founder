var titlearray =["co-founder-1","co-founder-1","co-founder-1"];
var descriptionarray =["lorem","ipsum","lorem-2"];

var dynamic = document.querySelector('.row');  
for (var i = 0; i < titlearray.length; i++) {
  var fetch = document.querySelector('.row').innerHTML;  
  dynamic.innerHTML = `<div id="cards${i}" class="boxes">
      <div class="box-content">
        <h2>${titlearray[i]}</h2>
        <p>
          ${descriptionarray[i]}
        </p>
      </div>
    </div>` + fetch ; 
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`;
} 

let popup=document.getElementById("popup");
function openpopup() {
  popup.classList.add("openpopup");
  
}function closepopup() {
  popup.classList.remove("openpopup");
  
}