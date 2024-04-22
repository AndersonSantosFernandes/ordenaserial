

changeCor01 = []
function changeColors() {
    
    let inputColorBg01 = document.getElementById('bgColor1').value
    let inputColorBg02 = document.getElementById('bgColor2').value
    let inputColorMain01 = document.getElementById('mainColor1').value
    let inputColorMain02 = document.getElementById('mainColor2').value
    let inputColorFont01 = document.getElementById('fontColor').value
    let inputColorButton01 = document.getElementById('btnColor').value

    console.log('cor',inputColorBg01)

    let colorsPagesChange = { bgColor1: inputColorBg01, bgColor2: inputColorBg02, mainColor1: inputColorMain01, mainColor2: inputColorMain02, fontColor: inputColorFont01, btnColor: inputColorButton01 }
    changeCor01 = colorsPagesChange
    localStorage.setItem('colors', JSON.stringify(changeCor01))

    location.href = "cores.html"
}

let myColors = localStorage.getItem("colors")

if (myColors == null) {
  
    let colorsPages = { bgColor1: '#d6f54f', bgColor2: '#d6f54f', mainColor1: '#43D654', mainColor2: '#43D654', fontColor: '#000000', btnColor: '#31FF2E' }

    arrayColor = []

    arrayColor = JSON.parse(localStorage.getItem('colors')) || []

    arrayColor.push(colorsPages)

    localStorage.setItem('colors', JSON.stringify(arrayColor))

} else {

    //Entradas
    let mainColor1 = document.getElementById('main1')
    let bodyColor = document.getElementById('bodyColor')
    let btnColor = document.getElementById('buttonColor')
    let btnColor1 = document.getElementById('buttonColor1')

    let getColors = JSON.parse(localStorage.getItem('colors'))    

   

    mainColor1.style.backgroundImage = `linear-gradient(${getColors['mainColor1']}, ${getColors['mainColor2']})`
    bodyColor.style.backgroundImage = `linear-gradient(${getColors['bgColor1']}, ${getColors['bgColor2']})`
    bodyColor.style.color = `${getColors['fontColor']}`
    btnColor.style.backgroundColor = `${getColors['btnColor']}`
    // btnColor1.style.backgroundColor = `${getColors['btnColor']}`

    //Saídas
    let inputColorBg1 = document.getElementById('bgColor1').value = getColors['bgColor1']
    let inputColorBg2 = document.getElementById('bgColor2').value = getColors['bgColor2']
    let inputColorMain1 = document.getElementById('mainColor1').value = getColors['mainColor1']
    let inputColorMain2 = document.getElementById('mainColor2').value = getColors['mainColor2']
    let inputColorFont = document.getElementById('fontColor').value = getColors['fontColor']
    let inputColorButton = document.getElementById('btnColor').value = getColors['btnColor']

}

// 



