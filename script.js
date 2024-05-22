let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');

let deg = 6;

setInterval(clockH , 1000);

function clockH(){
    let d = new Date();
    let m = d.getMinutes()* deg;
    let s = d.getSeconds()* deg;
    let h = d.getHours()* 30;

    hour.style.transform = `rotateZ(${h + (m/12)}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;

}