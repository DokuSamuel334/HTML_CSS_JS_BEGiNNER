const increase = document.getElementById("increasebtn");
const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const mylable = document.getElementById("mylable");
let lable = 0;

increase.onclick = function(){
  lable ++;
  mylable.textContent = lable;
}

decrease.onclick = function(){
  lable --;
  mylable.textContent = lable;
}

reset.onclick = function(){
  lable = 0;
  mylable.textContent = lable;
}