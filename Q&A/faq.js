function one(){
    if(  document.getElementById("one").style.height=="100px")
    {
       
    document.getElementById("text1").innerHTML="<p> Do You Use Organic Ingredients?</p><hr><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magnam cumque temporibus reiciendis minus rem optio dolorem error laboriosam repudiandae.</p>"
    document.getElementById("one").style.height="200px";
    }else{
        document.getElementById("one").style.height="100px";
    document.getElementById("text1").innerHTML="<p> Do You Use Organic Ingredients?</p>"
    }

}
function two(){
    if(  document.getElementById("two").style.height=="100px")
    {
        document.getElementById("two").style.height="200px";
    document.getElementById("text2").innerHTML="<p> Do You Accept All Major Credit Cards?</p><hr><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magnam cumque temporibus reiciendis minus rem optio dolorem error laboriosam repudiandae.</p>"
    }else{
        document.getElementById("two").style.height="100px";
    document.getElementById("text2").innerHTML="<p> Do You Accept All Major Credit Cards?</p>"
    }

}
function three(){
    if(  document.getElementById("three").style.height=="100px")
    {
        document.getElementById("three").style.height="200px";
    document.getElementById("text3").innerHTML="<p> Do You Suppport Local Farmers?</p><hr><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magnam cumque temporibus reiciendis minus rem optio dolorem error laboriosam repudiandae.</p>"
    }else{
        document.getElementById("three").style.height="100px";
    document.getElementById("text3").innerHTML="<p> Do You Suppport Local Farmers?</p>"
    }

}