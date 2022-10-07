const form_container = document.querySelector('#form-container')
const welcome_container = document.querySelector('#welcome-container')
const enviar_btn = document.querySelector('#enviar-btn')
// localStorage.setItem('name', '')

document.addEventListener('DOMContentLoaded', ()=>{
    checkUser()
})

document.querySelector('#name').addEventListener('keyup', (e)=>{
    if (e.keyCode == 13){
        cadastrarUser()
    }
})

enviar_btn.addEventListener('click', cadastrarUser)

function cadastrarUser(){
    let input_name = document.querySelector('#name')
    if (input_name.value){
        localStorage.setItem('name', input_name.value)
        form_container.classList.add('hide')
        welcome_container.classList.remove('hide')
        let local_user_name = localStorage.getItem("name")
        document.querySelector('#user-name').innerHTML = local_user_name
    } else{
        window.alert('digite um nome')
    }
}

function checkUser(){
    let local_user_name = localStorage.getItem("name")
    if (local_user_name){
        form_container.classList.add('hide')
        welcome_container.classList.remove('hide')
        document.querySelector('#user-name').innerHTML = local_user_name
    }
}