function newGradient(){
    const R0 = document.querySelector("#R0-input").value
    const G0 = document.querySelector("#G0-input").value
    const B0 = document.querySelector("#B0-input").value
    const R1 = document.querySelector("#R1-input").value
    const G1 = document.querySelector("#G1-input").value
    const B1 = document.querySelector("#B1-input").value
    const deg = document.querySelector("#degrees").value

    const section = document.querySelector("#gradient")
    section.style.background= `linear-gradient(90deg, rgb(${R0}, ${G0}, ${B0}), rgb(${R1}, ${G1}, ${B1}))`
}