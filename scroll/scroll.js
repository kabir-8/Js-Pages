
window.onscroll=function(){
    var top =window.scrollY;
    console.log(top);
   if(top>=65){
    document.getElementById("mhead").style.display="flex"
 
    
   }else{
    document.getElementById("mhead").style.display="none"
   
   

}
}
