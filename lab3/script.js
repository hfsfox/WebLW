var backgroundWebsite = document.getElementById("backgroundWebsite");
var modalButton = document.getElementById("modalButton");
var message = document.getElementById("message");

modalButton.addEventListener('click', function(){
    backgroundWebsite.style.display = "block";
    message.style.display = "block";
    positionCenter(message);
    backgroundWebsite.style.backgroundColor = 'rgb(0, 0, 0, 0.68)'; 
});
backgroundWebsite.addEventListener('click', function(){
    backgroundWebsite.style.display = "none";
    message.style.display = "none";
    message.style.position = fixed;
    backgroundWebsite.style.backgroundColor = 'rgb(0, 0, 0, 0)'; 
});
function positionCenter(elem){
    var elemHeight = window.getComputedStyle(elem).height;
    var elemWidth = window.getComputedStyle(elem).width;

    elem.style.marginTop = "-" + parseInt(elemHeight) / 2 + "px";
    elem.style.marginLeft = "-" + parseInt(elemWidth) / 2 + "px";
}
function positionOutside(elem){}


