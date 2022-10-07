const buttons = document.getElementById('buttons')
const img = document.getElementById('img')
let interval = null

buttons.addEventListener('click', acenderLampada)

function acenderLampada(event){
    let luz = event.target.id

    switch(luz){
    case 'red':
        clearInterval(interval)
        img.src = "img/vermelho.png"
        break
    case 'green':
        clearInterval(interval)
        img.src = "img/verde.png"
        break
    case 'yellow':
        clearInterval(interval)
        img.src = "img/amarelo.png"
        break
    case 'desligar':
        clearInterval(interval)
        img.src = "img/desligado.png"
        break
    case 'automatic':
        img.src = "img/desligado.png"
        clearInterval(interval)
        automacao()
        break
    }
}

function automacao(){
    let soma = 0

    interval = setInterval(()=>{
        if (soma == 3){
            soma = 0
        }
        switch(soma){
        case 0:
            img.src = "img/verde.png"
            break
        case 1:
            img.src = "img/amarelo.png"
            break
        case 2:
            img.src = "img/vermelho.png"
            break
        }
        soma += 1
    }, 1000)

}