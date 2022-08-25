import { Distancia } from "./distancia.js"

let selecaoislandia = document.querySelector("#selecaoislandia")
let selecaoholanda = document.querySelector("#selecaoholanda")
let infoPais =document.querySelector("#infoPais")

selecaoholanda.addEventListener("click", Scroll.bind(null, selecaoholanda, infoPais))
selecaoislandia.addEventListener("click", Scroll.bind(null, selecaoislandia, infoPais))


function Scroll(from, to) {
    //console.log("click")
    
    let y = Distancia(from, to)

    window.scrollBy(0, y)
}