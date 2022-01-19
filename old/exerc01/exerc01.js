function carregar() {
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    setTimeout('carregar()',500);
    var zero = x => {
        return ('0' + x).slice(-2);
    }

    window.document.getElementById('msg').innerHTML = 'Agora são exatamente ' + zero(hora) + 'h' + zero(minuto) + 'm';

    if (hora >= 0 && hora < 12) {
        img.src = "image/ftmanha.png"
        window.document.body.style.background = 'rgb(90, 139, 151)'

    } else if (hora >= 12 && hora < 18) {
        img.src = "image/fttarde.png"
        window.document.body.style.background = 'rgb(216, 134, 58)'

    } else {
        img.src = "image/ftnoite.png"
        window.document.body.style.background = 'rgb(13, 26, 90)'
    }

}
