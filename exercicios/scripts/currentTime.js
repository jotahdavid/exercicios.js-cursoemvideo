const time = document.getElementsByTagName('p')[0];
const image = document.getElementsByTagName('img')[0];

function currentTime() {
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    
    function addZero(x) {
        return ('0' + x).slice(-2);
    }
    
    time.innerHTML = `Agora é exatamente <strong>${addZero(currentHour)}h${addZero(currentMinutes)}m.</strong>`;
    showImage(currentHour);
    
    setTimeout('currentTime()', 2000);
}

function showImage(hour) {
    // image.setAttribute('src', "./images/");
    // image.src = "./images/";
    if (hour >= 6 && hour < 12) {
        image.setAttribute('src', "../images/dayparts/morning.png");
        image.setAttribute('alt', "Cidade vista por cima amanhecendo");
        document.body.style.backgroundColor = "rgb(93, 158, 170)";

    } else if (hour >= 12 && hour < 18) {
        image.setAttribute('src', "../images/dayparts/afternoon.png");
        image.setAttribute('alt', "Vista de um lago, com o céu entardecendo");
        document.body.style.backgroundColor = "rgb(231, 152, 68)";

    } else {
        image.setAttribute('src', "../images/dayparts/night.png");
        image.setAttribute('alt', "Avenida com carros passando a noite");
        document.body.style.backgroundColor = "rgb(10, 8, 109)";

    }
}