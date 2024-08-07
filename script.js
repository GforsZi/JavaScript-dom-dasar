let nikname = prompt("Masukan Nikname anda");
alert("Nikname anda adalah " + nikname);

// DOM dasar (title)
document.title = "Kekuatan DOM";
let body = document.body;

body.append("Hello Guys");

// create & combine DOM
let h2 = document.createElement("h2");
h2.innerHTML = "h2 ini dibuat menggunakan DOM";

body.append(h2);

//data selector & styling
let btn = document.getElementById("button");
let btn1 = document.querySelector(".button1");

btn.style.backgroundColor = "salmon";
btn.style.fontSize = "40px";

// event
function gantiWarna() {
  body.style.backgroundColor = "aqua";
  return;
}

function ganti() {
  h2.textContent = "Loooooh kok jadi berubah";
  return;
}
