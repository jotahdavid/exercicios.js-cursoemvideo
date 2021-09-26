const currentYear = new Date().getFullYear();
const verifyButton = document.getElementById('button').addEventListener('click', verifyData);
const result = document.querySelector('section#show-photo');

function verifyData() {
    const birthYear = document.querySelector('#year');
    const genderRadio = document.getElementsByName('radgen');
    // console.log(Number(birthYear.value));

    if (Number(birthYear.value) > currentYear) {
        alert('[ERRO] O ano informado é inválido!');
    } else if (Number(birthYear.value) < 1900) {
        alert('[ERRO] Informe anos acima de 1900!');
    } else {
        const age = currentYear - Number(birthYear.value);
        const gender = checkGender(genderRadio[0].checked);
        showPhoto(gender, age);
    }
}

function checkGender(condition) {
    if(condition) {
        return "Homem";
    } else {
        return "Mulher";
    }
}

function showPhoto(gender, age) {
    const photo = document.createElement('img');
    photo.setAttribute('id', 'photo')
    result.style.textAlign = 'center';
    
    if (gender === "Homem") {
        if (age < 3) {
            photo.src = "../images/photos/men/child-m1.png";
        } else if (age < 13) {
            photo.src = "../images/photos/men/child-m.png";
        } else if (age < 18) {
            photo.src = "../images/photos/men/adult-m.png";
        } else if (age < 30) {
            photo.src = "../images/photos/men/adult-m.png";
        } else if (age < 50) {
            photo.src = "../images/photos/men/adult-m1.png";
        } else {
            photo.src = "../images/photos/men/old-m.png";
        }
        result.innerHTML = `<p>Encontramos um ${gender} de ${age} anos.</p>`;
    } else if (gender === "Mulher") {
        if (age < 3) {
            photo.src = "../images/photos/women/child-w.png";
        } else if (age < 13) {
            photo.src = "../images/photos/women/child-w1.png";
        } else if (age < 18) {
            photo.src = "../images/photos/women/teen-w.png";
        } else if (age < 30) {
            photo.src = "../images/photos/women/adult-w.png";
        } else if (age < 50) {
            photo.src = "../images/photos/women/adult-w1.png";
        } else {
            photo.src = "../images/photos/women/old-w.png";
        }
        result.innerHTML = `<p>Encontramos uma ${gender} de ${age} anos.</p>`;
    } else {
        alert("[ERRO] O gênero não foi informado!");
    }
    result.appendChild(photo);
}