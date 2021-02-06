const colors = ["grey","red","blue","pink","brown","orange"];

const btn = document.getElementById("btn");
const color = document.querySelector(" .color");

btn.addEventListener("click",function(){
 const randomNumber = getRandomNumber();

 document.body.style.background = colors[randomNumber];
 color.textContent = colors[randomNumber];
});

function getRandomNumber(){
 return Math.floor(Math.random()*colors.length);
}