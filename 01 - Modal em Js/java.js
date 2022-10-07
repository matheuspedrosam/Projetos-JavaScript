const efect_opacity = document.querySelector('.opacity-effect')

const modal_container = document.querySelector('.modal-container')


function abrirModal(){
    efect_opacity.classList.remove('hide')
    modal_container.classList.remove('hide')
}

function fecharModal(){
    efect_opacity.classList.add('hide')
    modal_container.classList.add('hide')
}