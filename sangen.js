const seokmin_button = document.querySelector("#seokmin");
const sangeun_button = document.querySelector("#sangen");
const hass_button = document.querySelector(".hass_button");

seokmin_button.onclick = gotoseokmin;
sangeun_button.onclick = gotosangen;
hass_button.onclick = gotohass;

function gotoseokmin(){
    window.location.href = "seokmin.html";
}

function gotosangen(){
    window.location.href = "sangen.html";
}

function gotohass(){
    window.location.href = "index.html";
}
