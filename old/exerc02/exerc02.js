window.document.getElementById('verificar').addEventListener('click', clicar)
var resAno = window.document.getElementById('age')
var data = new Date()
var Ano = data.getFullYear()

function clicar() {
    var idade = Ano - Number(resAno.value)
    var gen = window.document.getElementsByName('radgen')
    var foto = window.document.getElementById('foto-pessoa')
    //var img = document.createElement('img')
    //img.setAttribute('id','foto')
    if (resAno.value < 1950) {
        window.alert('[ERRO] Coloque um ano acima de 1950!')
    } else if (resAno.value > Ano) {
        window.alert('[ERRO] Coloque um ano válido!')
    } else {
        if (gen[0].checked) { //Inicio
            if (idade >= 0 && idade < 6) {
                fase = 'uma criança'
                foto.src = "image/child-m1.png"
                //img.setAttribute('src', 'image/child-m1.png')
            }
            if (idade >= 6 && idade < 12) {
                fase = 'uma criança'
                foto.src = "image/child-m.png"
                //img.setAttribute('src', 'image/child-m.png')
            }
            if (idade >= 12 && idade < 18) {
                fase = 'um adolescente'
                foto.src = "image/teen-m.png"
                //img.setAttribute('src', 'image/teen-m.png')
            }
            if (idade >= 18 && idade < 30) {
                fase = 'um adulto'
                foto.src = "image/adult-m.png"
                //img.setAttribute('src', 'image/adult-m.png')
            }
            if (idade >= 30 && idade < 50) {
                fase = 'um adulto'
                foto.src = "image/adult-m1.png"
                //img.setAttribute('src', 'image/adult-m1.png')
            }
            if (idade >= 50) {
                fase = 'um idoso'
                foto.src = "image/old-m.png"
                //img.setAttribute('src', 'image/old-m.png')
            }
            window.document.getElementById('txt').innerText = `Encontramos ${fase} de ${idade} anos.`
            //res.appendChild(img)
        
        //Fim 
        } else if (gen[1].checked) { //Inicio
            if (idade >= 0 && idade < 6 ) {
                fase = 'uma criança'
                foto.src = "image/child-w.png"
                //img.setAttribute('src', 'image/child-w.png')
            }
            if (idade >= 6 && idade < 12) {
                fase = 'uma criança'
                foto.src = "image/child-w1.png"
                //img.setAttribute('src', 'image/child-w1.png')
            }
            if (idade >= 12 && idade < 18) {
                fase = 'uma adolescente'
                foto.src = "image/teen-w.png"
                //img.setAttribute('src', 'image/teen-w.png')
            }
            if (idade >= 18 && idade < 30) {
                fase = 'uma adulta'
                foto.src = "image/teen-w1.png"
                //img.setAttribute('src', 'image/teen-w1.png')
            }
            if (idade >= 30 && idade < 50) {
                fase = 'uma adulta'
                foto.src = "image/adult-w.png"
                //img.setAttribute('src', 'image/adult-w.png')
            }
            if (idade >= 50) {
                fase = 'uma idosa'
                foto.src = "image/old-w.png"
                //img.setAttribute('src', 'image/old-w.png')
            }
            window.document.getElementById('txt').innerText = `Encontramos ${fase} de ${idade} anos.`
        } //Fim

    }


}