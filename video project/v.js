
 var count=0;

function stop() {
   
   if(count%2==0){
    var v = 
    document.getElementById(
      "op");
    document.getElementById("span").style.left="50px";
    v.pause();
    
   }else{
    var v = 
    document.getElementById(
      "op");
    document.getElementById("span").style.left="0px";
    v.play();
   }
   count++;
}window.onload=function myFunction() {
    setTimeout(function(){ document.getElementById("preload").style.display="none"; }, 1000);
  }
