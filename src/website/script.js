var countDate = new Date('Dec 31, 2021 00:00:00').getTime();

function deadline(){
    var now = new Date().getTime();
    gap = countDate - now;

    var second = 1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;

    var s = Math.floor((gap % (minute)) / (second));
    var m = Math.floor((gap % (hour)) / (minute));
    var h = Math.floor((gap % (day)) / (hour));
    var d = Math.floor(gap / (day));

    document.getElementById('Segundos').innerText = s;
    document.getElementById('Minutos').innerText = m;
    document.getElementById('Horas').innerText = h;
    document.getElementById('Dias').innerText = d;
}

setInterval(function(){deadline();}, 1000)


const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

let i = 0; // current slide
let j = 5; // total slides


function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}


function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#87deaa";
}


function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}
