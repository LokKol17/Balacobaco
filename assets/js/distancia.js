export function Distancia(from, to) {
    let el = from
    let el2 = to

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