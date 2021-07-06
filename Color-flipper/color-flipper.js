function change(){
  




    // var colors=["red","blue","green","orange","tan","purple","grey","mauve"];
    var a =Math.floor(Math.random()*256)+1;
    var b =Math.floor(Math.random()*256)+1;
    var c =Math.floor(Math.random()*256)+1;
    document.getElementById("colortext").innerHTML = "Background Color :rgb("+a+","+b+","+c+")"
    document.getElementById("main").style.backgroundColor="rgb("+a+","+b+","+c+")"
}