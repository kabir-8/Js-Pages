function addd() {
    document.getElementById("con").style.border="2px red solid";
    var ul =document.getElementById("mylist")
    var text =document.getElementById("a").value
    var textnode=document.createTextNode(text)
    document.getElementById("a").value=""
    var newpara= document.createElement("p");
    newpara.style.display="inline-block"
    var list =document.getElementById("mylist")
    var newli=document.createElement("li")

    var closebtn=document.createElement("button")
    var closetxt=document.createTextNode("CLOSE")

    var editbtn=document.createElement("button")
    var edittxt=document.createTextNode("EDIT")

    var subput=document.createElement("div")
    var newinput=document.createElement("input")
    newinput.id="newinputid"
    newinput.style.display="none"


    var submitbtn =document.createElement("button")

    var submittxt=document.createTextNode("SUBMIT")
    

    //onclick


    closebtn.onclick=closeli
    function closeli(){
        this.parentElement.style.display="none"
    }


    editbtn.onclick=editfunc
    function editfunc(){
        this.previousSibling.style.
        display="inline-block"
        
    }
    submitbtn.onclick=closesubput
    // submitbtn.onclick=closeli
    function closesubput(){
  
    //     var newitem=document.createElement("li")
    //     var newtext1=this.previousSibling.value;
    //     newitem.append(newtext1)
    //     this.previousSibling.value=newtext1
    //     // newitem.appendChild(subput)
    // newitem.appendChild(newinput)

    // newitem.appendChild(submitbtn)
    // newitem.appendChild(editbtn)
    //     newitem.appendChild(closebtn)
    //     ul.appendChild(newitem)
       
        
        this.previousSibling.innerHTML= this.nextSibling.value;
        this.nextSibling.style.display="none"
        




        
    }
     //append

    newpara.appendChild(textnode);
    newli.appendChild(newpara)
    
    list.appendChild(newli)
    
    closebtn.append(closetxt)
    closebtn.id="closebtn"
    submitbtn.id="subbtn"
    editbtn.id="editbtn"
submitbtn.append(submittxt)
    editbtn.append(edittxt)
    

    // newli.appendChild(subput)
    newinput.value=text
    newli.appendChild(submitbtn)
    newli.appendChild(newinput)
    
   
    newli.appendChild(editbtn)
    newli.appendChild(closebtn)
   
  };
  