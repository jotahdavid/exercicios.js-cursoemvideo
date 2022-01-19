window.document.getElementById('ver').addEventListener('click', clicar)
function clicar() {
    var inc = window.document.getElementById('n1')
    var fim = window.document.getElementById('n2')
    var pss = window.document.getElementById('n3')
    var i = Number.parseInt(inc.value);
    var f = Number.parseInt(fim.value);
    var p = Number.parseInt(pss.value);
    var res = '';
    var emoji = '👉';
    var n = '';
    if (isNaN(i) || isNaN(f)) {
        window.alert('[ERRO] Preencha os espaços vazios.')
        document.getElementById('res').innerHTML = `Impossível contar`
    } else {
        if (p == 0 || isNaN(p)) {
            window.alert('[ERRO] Passo invalido! Considerando PASSO 1.')
            p = 1
            for (n = i;n <= f;n += p) {
                res = `${res} ${n} ${emoji}`
            }
        } else if (i >= f) {
            for (n = i;n >= f;n -= p) {
                res = `${res} ${n} ${emoji}`
            }
        } else {
            for (n = i;n <= f;n += p) {
                res = `${res} ${n} ${emoji}`
            }
        }
        document.getElementById('res').innerHTML = `Contando: <br> ${res} 🏁`;
    }
    
    
    
}
