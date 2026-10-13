function turnRedorGreen(){

    const key = "enabled";

    const red = "#D22B2B";

    const green = "#008000";

    const prodId = document.getElementById("status-prod");

    const devId = document.getElementById("status-dev");

    const corpId = document.getElementById("status-corp");

    if (prodId.innerHTML == key) {
        prodId.style.color =  green;
    }

    else {
        prodId.style.color = red;
    }

    if (devId.innerHTML == "enabled") {
        devId.style.color = green;
    }

    else {
        devId.style.color = red;
    }

    if (corpId.innerHTML == key) {
        corpId.style.color = green;
    }

    else {
        corpId.style.color = red;
    }
}


 turnRedorGreen()