// Event Handler vs Event Listener 

let button1 = document.getElementById("listener");
let button2 = document.getElementById("handler");

// Event Listener
// addEventListener() allows multiple events for the same event type.

button1.addEventListener("click", function(){
    console.log("First Listener");
});

button1.addEventListener("click", function(){
    console.log("Second Listener");
});

button1.addEventListener("click", function(){
    console.log("Third Listener");
});

// Event Handler
// onclick supports only one handler.
// Assigning a new function replaces the previous one.

button2.onclick = function(){
    console.log("First Handler");
}

button2.onclick = function(){
    console.log("Second Handler");
}

let image = document.querySelector("img");
let para = document.querySelector("p");

// Mouse enters the image

image.addEventListener("mouseover",function(){
    image.src="img2.jpeg";
    para.innerText = "I'm a Leaf";
});

// Mouse leaves the image

image.addEventListener("mouseout",function(){
    image.src="img3.jpeg";
    para.innerText = "I'm a Flower";
});

