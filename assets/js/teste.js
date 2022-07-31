function Distancia(nel, nel2) {
    let el = nel
    let el2 = nel2

    el = el.getBoundingClientRect()
    let resel = el['y']

    el2 = el2.getBoundingClientRect()
    let resel2 = el2['y']

    // deveolop only // console.log(resel + " " + resel2)
    
    let a = resel
    let b = resel2
    let res = (b - a)
    return res
}

let ing = document.querySelector("#inglaterra")
let info =document.querySelector("#infoPais")

ing.addEventListener("click", Click)

//ing = x: 50  y: 0
//x: 119.33333587646484 y: 68

function Click() {
    
    window.scrollBy(0, Distancia(ing, info))



}