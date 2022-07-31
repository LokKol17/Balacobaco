import { Distancia } from "./distancia.js"

let selecaoGales = document.querySelector("#selecaoGales")
let selecaoInglaterra = document.querySelector("#selecaoInglaterra")
let infoPais =document.querySelector("#infoPais")

selecaoInglaterra.addEventListener("click", Scroll.bind(null, selecaoInglaterra, infoPais))
selecaoGales.addEventListener("click", Scroll.bind(null, selecaoGales, infoPais))


function Scroll(from, to) {
    console.log("click")
    
    let y = Distancia(from, to)

    window.scrollBy(0, y)
}