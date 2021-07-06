reviews=[
    {
    name:"First",
    pro:"Web",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    des:"1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam officia minus nesciunt tempore, quisquam aut cumque provident ab veritatis in deleniti laborum repudiandae illum, nihil velit et dolore enim, autem commodi quaerat? Soluta corrupti iure necessitatibus reprehenderit porro blanditiis dolore incidunt accusantium inventore? Labore itaque dolor autem nam atque."
},
{
    
    name:"second",
    pro:"AI",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    des:"2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam officia minus nesciunt tempore, quisquam aut cumque provident ab veritatis in deleniti laborum repudiandae illum, nihil velit et dolore enim, autem commodi quaerat? Soluta corrupti iure necessitatibus reprehenderit porro blanditiis dolore incidunt accusantium inventore? Labore itaque dolor autem nam atque."
},
{
    name:"Third",
    pro:"Dev",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    des:"3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam officia minus nesciunt tempore, quisquam aut cumque provident ab veritatis in deleniti laborum repudiandae illum, nihil velit et dolore enim, autem commodi quaerat? Soluta corrupti iure necessitatibus reprehenderit porro blanditiis dolore incidunt accusantium inventore? Labore itaque dolor autem nam atque."
}
,
{
    name:"Fourth",
    pro:"Teacher",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    des:"4.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam officia minus nesciunt tempore, quisquam aut cumque provident ab veritatis in deleniti laborum repudiandae illum, nihil velit et dolore enim, autem commodi quaerat? Soluta corrupti iure necessitatibus reprehenderit porro blanditiis dolore incidunt accusantium inventore? Labore itaque dolor autem nam atque."
},
{
    name:"Fifth",
    pro:"Dean",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    des:"5.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam officia minus nesciunt tempore, quisquam aut cumque provident ab veritatis in deleniti laborum repudiandae illum, nihil velit et dolore enim, autem commodi quaerat? Soluta corrupti iure necessitatibus reprehenderit porro blanditiis dolore incidunt accusantium inventore? Labore itaque dolor autem nam atque."
}
]

var current=0;

//something
function next(){
    current++;
    if(current>=reviews.length){
        current=0;
    }
    document.getElementById("name").innerHTML=reviews[current].name;
    document.getElementById("img").src=reviews[current].img;
    document.getElementById("pro").innerHTML=reviews[current].pro;
    document.getElementById("des").innerHTML=reviews[current].des;
}
function prev(){
    current--;
    if(current<0){
        current=reviews.length-1;
    }
    document.getElementById("name").innerHTML=reviews[current].name;
    document.getElementById("img").src=reviews[current].img;
    document.getElementById("pro").innerHTML=reviews[current].pro;
    document.getElementById("des").innerHTML=reviews[current].des;
}
function surprise(){
    
    current= Math.floor(Math.random()*reviews.length);
    document.getElementById("name").innerHTML=reviews[current].name;
    document.getElementById("img").src=reviews[current].img;
    document.getElementById("pro").innerHTML=reviews[current].pro;
    document.getElementById("des").innerHTML=reviews[current].des;
}

