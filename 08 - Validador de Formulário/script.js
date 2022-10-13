const qs = el => document.querySelector(el)
const cl = el => console.log(el)
const esconderElemento = el => el.classList.add('hide')
const mostrarElemento = el => el.classList.remove('hide')
const modal_container = qs('.modal-container')

const msgNome = qs('#msg-nome')
const msgEmail = qs('#msg-email')
const msgSenha = qs('#msg-senha')
const msgConfirmarSenha = qs('#msg-confirmar-senha')

const iconNome = qs('#icon-nome')
const iconEmail = qs('#icon-email')
const iconSenha = qs('#icon-senha')
const iconConfirmarSenha = qs('#icon-confirmar-senha')

let nomeValido = false
let emailValido = false
let senhaValido = false
let confirmarSenhaValido = false

function EnviarForm(e){
    e.preventDefault()
    validarInputs()
    if (nomeValido && emailValido && senhaValido && confirmarSenhaValido){
        mostrarElemento(modal_container)
    }
}

modal_container.addEventListener('click', ()=>{
    esconderElemento(modal_container)
})


function validarInputs(){
    let InputName = qs('#nome')
    let InputEmail = qs('#email')
    let InputSenha = qs('#senha')
    let InputConfirmarSenha = qs('#confirmar-senha')

    if (InputName.value === ''){
        msgNome.innerHTML = 'Por favor insira um nome'
        mostrarElemento(msgNome)
        iconNome.innerHTML = 'info'
        iconNome.style.color = '#e74c3c'
        mostrarElemento(iconNome)
        InputName.classList.add('fail')
        nomeValido = false
    } else{
        esconderElemento(msgNome)
        InputName.classList.remove('fail')
        InputName.classList.add('sucess')
        iconNome.innerHTML = 'check_circle'
        iconNome.style.color = '#2ecc71'
        mostrarElemento(iconNome)
        nomeValido = true
    }

    if (InputEmail.value === ''){
        msgEmail.innerHTML = 'Por favor insira um email'
        mostrarElemento(msgEmail)
        iconEmail.style.color = '#e74c3c'
        iconEmail.innerHTML = 'info'
        mostrarElemento(iconEmail)
        InputEmail.classList.add('fail')
        emailValido = false
    } else if(!ValidateEmail(InputEmail.value)) {
        msgEmail.innerHTML = 'Por favor insira um email válido!'
        mostrarElemento(msgEmail)
        iconEmail.innerHTML = 'info'
        iconEmail.style.color = '#e74c3c'
        mostrarElemento(iconEmail)
        InputEmail.classList.add('fail')
        emailValido = false
    } else{
        esconderElemento(msgEmail)
        InputEmail.classList.remove('fail')
        InputEmail.classList.add('sucess')
        iconEmail.innerHTML = 'check_circle'
        iconEmail.style.color = '#2ecc71'
        mostrarElemento(iconEmail)
        emailValido = true
    }

    if (InputSenha.value === ''){
        msgSenha.innerHTML = 'Por favor insira uma senha'
        mostrarElemento(msgSenha)
        iconSenha.innerHTML = 'info'
        iconSenha.style.color = '#e74c3c'
        mostrarElemento(iconSenha)
        InputSenha.classList.remove('sucess')
        InputSenha.classList.add('fail')
        senhaValido = false
    } else if(InputSenha.value.length < 7){
        msgSenha.innerHTML = 'A senha tem que ter no mínimo 7 caracteres'
        mostrarElemento(msgSenha)
        iconSenha.innerHTML = 'info'
        iconSenha.style.color = '#e74c3c'
        mostrarElemento(iconSenha)
        InputSenha.classList.remove('sucess')
        InputSenha.classList.add('fail')
        senhaValido = false
    } else{
        esconderElemento(msgSenha)
        InputSenha.classList.remove('fail')
        InputSenha.classList.add('sucess')
        iconSenha.innerHTML = 'check_circle'
        iconSenha.style.color = '#2ecc71'
        mostrarElemento(iconSenha)
        senhaValido = true
    }

    if (InputConfirmarSenha.value === ''){
        msgConfirmarSenha.innerHTML = 'Por favor insira a confirmação de senha'
        mostrarElemento(msgConfirmarSenha)
        iconConfirmarSenha.innerHTML = 'info'
        iconConfirmarSenha.style.color = '#e74c3c'
        mostrarElemento(iconConfirmarSenha)
        InputConfirmarSenha.classList.add('fail')
        confirmarSenhaValido = false
    } else if(InputConfirmarSenha.value != InputSenha.value){
        msgConfirmarSenha.innerHTML = 'As senhas não conferem'
        mostrarElemento(msgConfirmarSenha)
        iconConfirmarSenha.innerHTML = 'info'
        iconConfirmarSenha.style.color = '#e74c3c'
        mostrarElemento(iconConfirmarSenha)
        InputConfirmarSenha.classList.add('fail')
        confirmarSenhaValido = false
    } else{
        esconderElemento(msgConfirmarSenha)
        InputConfirmarSenha.classList.remove('fail')
        InputConfirmarSenha.classList.add('sucess')
        iconConfirmarSenha.innerHTML = 'check_circle'
        iconConfirmarSenha.style.color = '#2ecc71'
        mostrarElemento(iconConfirmarSenha)
        confirmarSenhaValido = true
    }
}


function ValidateEmail(email)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}