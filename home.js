let homeLocal = JSON.parse(localStorage.getItem('student'))

console.log(homeLocal.stydentName);

let boxDaraja = document.getElementById('boxDaraja')
let stydentIsmi = document.getElementById('stydentIsmi')
let stydentGroup = document.getElementById('OquvchiIsimi')
let studentCoyn = document.getElementById('studentCoyn')
let  studentEnrgy = document.getElementById('studentEnrgy')


stydentIsmi.innerHTML = homeLocal.stydentName
for (let i = 0; i < homeLocal.stydentGrading; i++) {
    let div = document.createElement('div')
    div.classList.add('flex')
    div.innerHTML = `
    <img class='w-20 h-20' src="star.png" alt=""></img>
    `

    boxDaraja.append(div)
}


