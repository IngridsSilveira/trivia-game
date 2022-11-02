let confirma = document.getElementById("confirma")
const btn_enviar = document.getElementById("enviar")


btn_enviar.addEventListener("click", () => {
    let checkRadio = document.querySelector('input[name="radio"]:checked')

    if(checkRadio != null) {
        if(checkRadio.value == "blue"){
            confirma.classList.remove("incorreto")
            confirma.classList.add("correto")
            confirma.innerHTML = "Correto"
        } 
        else if(checkRadio.value == "green"){
            confirma.classList.remove("incorreto")
            confirma.classList.add("correto")
            confirma.innerHTML = "Correto"
        } 
        else if(checkRadio.value == "legenda"){
            confirma.classList.remove("incorreto")
            confirma.classList.add("correto")
            confirma.innerHTML = "Correto"
        } 
        else if(checkRadio.value == "tecido"){
            confirma.classList.remove("incorreto")
            confirma.classList.add("correto")
            confirma.innerHTML = "Correto"
        } else if(checkRadio.value == "sim"){
            confirma.classList.add("incorreto")
            confirma.innerHTML = "Hmm, então você é 😏" + "<br/>"
            + "Te amo criatura <3"
        } else if(checkRadio.value == "n"){
            confirma.classList.add("incorreto")
            confirma.innerHTML = "Como assim não é??" + "<br/>"
            + "Te amo criatura <3"
        }
        else if (checkRadio.value == ""){
            confirma.classList.add("incorreto")
            confirma.innerHTML = "Incorreto"
        }
    }
})
document.getElementById("next").addEventListener("click", () => {
    confirma.innerHTML = ""
})