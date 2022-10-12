const add_task_btn = document.querySelector('#add-task-btn')
const results_container = document.querySelector('.results-container')
const results_filter_container = document.querySelector('.result-filter-container')
const qs = (el) => {
    return document.querySelector(el)
}
let soma = 0

function adicionarTarefa(){
    var task_input_value = document.querySelector('#task-input').value
    if (task_input_value){
        var task_result = document.querySelectorAll('.task')[0].cloneNode(true)    
        task_result.classList.remove('hide')
        task_result.classList.remove('finalized')
        var paragraph = task_result.children[0]
        paragraph.innerHTML = `${task_input_value}`
        results_container.appendChild(task_result)
        document.querySelector('#task-input').value = ''
        let select = qs('#filter-select')
        select[0].selected = true
        filtrarTodas()
        if (soma == 0){
            results_container.children[0].remove(true)
            soma += 1
        }
    }
}

add_task_btn.addEventListener('click', adicionarTarefa)

function enviarTarefa(e){
    if (e.keyCode === 13){
        adicionarTarefa()
    }
}

function findTask(){
    valor_do_input = qs('#find-input').value
    if (valor_do_input){
        filtrarTodas()
        select = qs('#filter-select')
        select[0].selected = true
        arr = [...results_container.children]
        resultado = []
        for (el of arr){
            if (el.children[0].innerHTML == valor_do_input){
                resultado.push(el)
            }
        }
        if (resultado != []){
            for (el of arr){
                el.classList.add('hide')
            }
            for (el of resultado){
                el.classList.remove('hide')
            }
        }
    }
}

function enviarFind(e){
    findTask()
    if (e.keyCode == 13){
        findTask()
        qs('#find-input').value = ''
    }
    if(e.keyCode == 8){
        cleanFindTask2()
    }
}

function cleanFindTask(){
    arr = [...results_container.children]
    for (el of arr){
        el.classList.remove('hide')
    }
    qs('#find-input').value = ''
}

function cleanFindTask2(){
    arr = [...results_container.children]
    for (el of arr){
        el.classList.remove('hide')
    }
}


function realizarFiltragem(){
    let select = document.querySelector('#filter-select')
    let opcoes = select[select.selectedIndex].text
    switch (opcoes){
    case 'Todas':
        filtrarTodas()
        break
    case 'Feitas':
        filtrar(1)
        break
    case 'A Fazer':
        filtrar(2)
        break
    }
}

function filtrarTodas(){
    arr = [...results_filter_container.children]
    for(el of arr){
        results_container.appendChild(el)
    }
    results_filter_container.classList.add('hide')
    results_container.classList.remove('hide')
}

function filtrar(number){
    let arr1 = [...results_filter_container.children]
    for(el of arr1){
        results_container.appendChild(el)
    }

    let arr = [...results_container.children]

    if (number === 1){
        arr.forEach((el) => {
            if (el.classList.contains('finalized') === true){
                results_filter_container.appendChild(el)
            }
        })
    } else{
        arr.forEach((el) => {
            if (el.classList.contains('finalized') === false){
                results_filter_container.appendChild(el)
            }
        })
    }

    results_filter_container.classList.remove('hide')
    results_container.classList.add('hide')
}


function finalizarTask(obj){
    obj.parentNode.parentNode.classList.toggle('finalized')
}

function realizarEdicao(){
    novo_valor = qs('#edit-task-input').value
    if (novo_valor){
        let task = qs('.result-edit-container').children[0]
        task.children[0].innerHTML = novo_valor
        qs('#edit-task-input').value = ''
        cancelarEdit()
    }
}

function EnviarEdicao(e){
    if (e.keyCode == 13){
        realizarEdicao()
    }
}

function editarTask(obj){
    document.querySelector('.add-task-container').classList.add('hide')
    document.querySelector('.find-and-filter-container').classList.add('hide')
    document.querySelector('.edit-task-container').classList.remove('hide')
    
    let edit_container = document.querySelector('.result-edit-container')
    let childrens_edit_container = edit_container.children
    let arr1 = [...childrens_edit_container]
    for(el of arr1){
        results_container.appendChild(el)
    }
    document.querySelector('.results-container').classList.add('hide')
    document.querySelector('.result-filter-container').classList.add('hide')
    edit_container.classList.remove('hide')
    let task = obj.parentNode.parentNode
    edit_container.appendChild(task)
}

function cancelarEdit(){
    let arr1 = [...results_filter_container.children]
    for(el of arr1){
        results_container.appendChild(el)
    }
    let edit_container = document.querySelector('.result-edit-container')
    let childrens_edit_container = edit_container.children
    let arr = [...childrens_edit_container]
    for(el of arr){
        results_container.appendChild(el)
    }

    document.querySelector('.edit-task-container').classList.add('hide')
    document.querySelector('.add-task-container').classList.remove('hide')
    document.querySelector('.find-and-filter-container').classList.remove('hide')
    document.querySelector('.results-container').classList.remove('hide')
    document.querySelector('.result-filter-container').classList.add('hide')
    document.querySelector('.result-edit-container').classList.add('hide')
    let select = qs('#filter-select')
    select[0].selected = true
}

function excluirTask(obj){
    obj.parentNode.parentNode.remove(true)
}