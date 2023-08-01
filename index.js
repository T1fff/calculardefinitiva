const calcular1_btn = document.querySelector('.calcular1-btn')
const input_parcial1 = document.querySelector('.parcial1')
const input_quiz11 = document.querySelector('.quiz1_1')
const input_quiz12 = document.querySelector('.quiz1_2')
const input_tarea11 = document.querySelector('.tarea1_1')
const notaCorte1 = document.querySelector('.nota-c1')
/* Corte Lab 1 */
const calcularLab1_btn = document.querySelector('.calcularLab1-btn')
const input_lab1_1 = document.querySelector('.lab1_1')
const input_lab1_2 = document.querySelector('.lab1_2')
const input_lab1_3 = document.querySelector('.lab1_3')
const notaCortecLab = document.querySelector('.nota-cLab')
/* Corte 2 */
const calcular2_btn = document.querySelector('.calcular2-btn')
const input_parcial2 = document.querySelector('.parcial2')
const input_quiz21 = document.querySelector('.quiz2_1')
const input_taller21 = document.querySelector('.taller2_1')
const notaCorte2 = document.querySelector('.nota-c2')
/* Corte Lab 1 */
const calcularLab2_btn = document.querySelector('.calcularLab2-btn')
const input_lab2_1 = document.querySelector('.lab2_1')
const input_lab2_2 = document.querySelector('.lab2_2')
const notaCortecLab2 = document.querySelector('.nota-cLab2')
/* Corte F*/
const calcularcFinal_btn = document.querySelector('.calcularcFinal-btn')
const input_parcialF = document.querySelector('.parcialF')
const input_proyectoF = document.querySelector('.nProyectoF')
const notaCorteFinal = document.querySelector('.nota-corteF')
const notaDefinitiva_btn = document.querySelector('.calcularDefinitiva')
const notaCorteDef = document.querySelector('.nota-corteDefinitiva')
let invalid_input = false

function showError(location, error) {
    location.innerHTML = error
    location.style.visibility = 'visible'
    location.style.color = 'red'
    
    setTimeout(() => {  
        location.style.visibility = 'hidden' 
        location.style.color = 'black'
    }, 2000)
    invalid_input = true
}

function showResult(location, result) {
    invalid_input = false
    location.innerHTML = result.toFixed(2)
    location.style.visibility = 'visible'
}

calcular1_btn.addEventListener('click', getCorte1 = () => {
    if (input_parcial1.value == '' || input_quiz11.value == '' || input_quiz12.value == '' || input_tarea11.value == '') {
        showError(notaCorte1, 'Campo faltante!')
       
    } else if (input_parcial1.value > 5 || input_quiz11.value > 5 || input_quiz12.value > 5 || input_tarea11.value > 5) {
        showError(notaCorte1, 'Nota máxima: 5.0')
    } else {
        let notaC1 = parseFloat(input_parcial1.value)*0.6 + (parseFloat(input_quiz11.value) + parseFloat(input_quiz12.value) + parseFloat(input_tarea11.value))/3*0.4
        showResult(notaCorte1, notaC1)
        return notaC1
    }
})

calcularLab1_btn.addEventListener('click', getCorte1Lab =() => {
    if (input_lab1_1.value == '' || input_lab1_2.value == '' || input_lab1_3.value == '') {
        showError(notaCortecLab, 'Campo faltante!')
    } else if (input_lab1_1.value > 5 || input_lab1_2.value > 5 || input_lab1_3.value > 5) {
        showError(notaCortecLab, 'Nota máxima: 5.0')
    } else {
        let notaC1Lab = (parseFloat(input_lab1_1.value) + parseFloat(input_lab1_2.value) +parseFloat(input_lab1_3.value) )/3 
        showResult(notaCortecLab, notaC1Lab)
        return notaC1Lab
    }
})

calcular2_btn.addEventListener('click', getCorte2 =() => {
    if (input_parcial2.value == '' || input_quiz21.value == '' || input_taller21.value == '') {
        showError(notaCorte2, 'Campo faltante!')
    } else if (input_parcial2.value > 5 || input_quiz21.value > 5 || input_taller21.value > 5) {
        showError(notaCorte2, 'Nota máxima: 5.0')
    } else {
        let notaC2 = parseFloat(input_parcial2.value)*0.75 + (parseFloat(input_quiz21.value) + parseFloat(input_taller21.value))/2*0.25
        showResult(notaCorte2, notaC2)
        return notaC2
    }
})

calcularLab2_btn.addEventListener('click', getCorte2Lab =() => {
    if (input_lab2_1.value == '' || input_lab2_2.value == '') {
        showError(notaCortecLab2, 'Campo faltante!')
    } else if (input_lab2_1.value > 5 || input_lab2_2.value > 5) {
        showError(notaCortecLab2, 'Nota máxima: 5.0')
    } else {
        let notaC2Lab = (parseFloat(input_lab2_1.value) + parseFloat(input_lab2_2.value))/2 
        showResult(notaCortecLab2, notaC2Lab)
        return notaC2Lab
    }
})

calcularcFinal_btn.addEventListener('click', getCorteF =() => {
    console.log(parseFloat(input_parcialF.value));
    if (input_parcialF.value == '' || input_proyectoF.value == '') {
        showError(notaCorteFinal, 'Campo faltante!')
    } else if (input_parcialF.value > 5 || input_proyectoF.value > 5) {
        showError(notaCorteFinal, 'Nota máxima: 5.0')
    } else {
        let notaCF = parseFloat(input_parcialF.value)*0.8 + parseFloat(input_proyectoF.value)*0.2
        showResult(notaCorteFinal, notaCF)
        return notaCF
    }
})

notaDefinitiva_btn.addEventListener('click', () => {
    const corte1 = getCorte1() 
    const corte1Lab = getCorte1Lab()
    const corte2 = getCorte2()
    const corte2Lab = getCorte2Lab()
    const corteFinal = getCorteF()
    if (invalid_input == false) {
        let notaDefiniva = corte1 * 0.25 + corte1Lab * 0.15 + corte2 * 0.2 + corte2Lab * 0.15 + corteFinal * 0.25
        showResult(notaCorteDef, notaDefiniva)
    }
})
