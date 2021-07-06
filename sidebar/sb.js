var count=0;
function M(){
   
   if(count%2!=0){
    document.getElementById("aside").style.animation=" widthexit 1s ease 1";
    count++;
    // document.getElementById("aside").style.animationFillMode="backwards";
   
}else{
    
    document.getElementById("aside").style.animation=" width 1s ease 1";
    document.getElementById("aside").style.animationFillMode="forwards";
    count++;
}
}
function e(){
    document.getElementById("aside").style.animation=" widthexit 1s ease 1";
    count++;
}
