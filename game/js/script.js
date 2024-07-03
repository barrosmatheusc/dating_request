const eu = document.querySelector('.eu');
const jade = document.querySelector('.jade');
var count = 0;
var time = 10;
var aux;

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
  }


const jump = () => {
    eu.classList.add('jump');

    setTimeout(() => {
        eu.classList.remove('jump');
    }, 500);
}

    const loop = setInterval(() => {
    const jadePosition = jade.offsetLeft;
    const myPosition = +window.getComputedStyle(eu).bottom.replace('px', ' ');

    if(jadePosition <= 0){
        count+=1;
        console.log("value: ",count);
    } 

    if(jadePosition <= 95 && myPosition < 105 && jadePosition > 0 ){
        jade.style.animation = 'none';
        jade.style.left = `${jadePosition}px`;

        eu.style.animation = 'none';
        eu.style.bottom = `${myPosition}px`;
        clearInterval(loop);
    }
    
    else{
        if(count >= 140){//valor correto = 140
            alert("Parabéns, linda!");
            jade.style.animation = 'none';
            jade.style.left = `${jadePosition}px`;
            eu.style.animation = 'none';
            eu.style.bottom = `${myPosition}px`;
            clearInterval(loop);
            location.href = "../../quizz/quizz.html";
        }
    }
}, time) 

setInterval(function() {
    var script = document.createElement("script"); 
    document.getElementsByTagName("body")[0].insertBefore(script, document.getElementsByTagName("body")[0].childNodes[0]);
    document.getElementsByTagName("script")[0].remove();
    document.getElementById("count").innerHTML = parseInt(count/14);
  }, time)



document.addEventListener('keydown', jump); 
document.getElementById("count").innerHTML = parseInt(count);  