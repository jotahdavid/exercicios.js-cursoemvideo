window.document.getElementById('gerar').addEventListener('click', clicar);
function clicar() {
    var num = Number.parseInt(window.document.getElementById('num').value)
    var x = 0
    var txt = ''
    if (isNaN(num)) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        while (x != 10) {
            x++
            var mult = num * x
            txt = `${txt} ${num} x ${x} = ${mult} <br>`
            window.document.getElementById('res').innerHTML = txt
        } 
    }
    
}