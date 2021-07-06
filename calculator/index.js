var solved=0;


function dis(val){
   
    if(solved==1){
        document.getElementById("display").value=""
        document.getElementById("display").value+=val
        solved--
        
      
     
        
    }else{
        document.getElementById("display").value+=val
        
        
      
}
}  

function answer(){
   let x=eval(document.getElementById("display").value)
   document.getElementById("display").value=x;
   solved++;
   
}
function opr(val){
 
  document.getElementById("display").value+=val
}


function sc(){



    document.getElementById("display").value= "";
}

window.addEventListener("error", handleError, true);

function handleError(evt) {
    alert("ERROR")
}
function del() {
    var val = document.getElementById("display").value;
    if(val.length > 0){
    val = val.substring(0, val.length - 1);
    document.getElementById("display").value = val;
    }

}

