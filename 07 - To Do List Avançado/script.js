const qs = (el) => {
    return document.querySelector(el)
}

const add_task_btn = qs('#add-task-btn')
const results_container = qs('.results-container')
const select = qs('#filter-select')
const edit_task_container =  qs('.edit-task-container')
const add_task_container =  qs('.add-task-container')
const find_and_filter_container =  qs('.find-and-filter-container')
const btn_clean_all_container = qs('.btn-clean-all-container')
var total_tasks = 0


// ADICIONAR TAREFA ->

function adicionarTarefa(){
    var task_input_value = qs('#task-input').value
    if (task_input_value){
        var task_result = qs('.task').cloneNode(true)
        task_result.classList.remove('hide2')
        task_result.classList.remove('finalized')
        var paragraph = task_result.children[0]
        paragraph.innerHTML = `${task_input_value}`
        results_container.appendChild(task_result)
        qs('#task-input').value = ''
        qs('#find-input').value = ''
        select[0].selected = true
        filtrarTodas()
        btn_clean_all_container.classList.remove('hide')
        total_tasks += 1
    }
}

function enviarTarefa(e){
    if (e.keyCode === 13){
        adicionarTarefa()
    }
}


// ENCONTRAR TAREFA ->

function findTask(){
    valor_do_input = qs('#find-input').value
    if (valor_do_input){
        filtrarTodas()
        qs('#task-input').value = ''
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
        btn_clean_all_container.classList.add('hide')
    }
}

function enviarFind(e){
    findTask()
    if (e.keyCode == 13){
        findTask()
        qs('#find-input').value = ''
    }
    if(e.keyCode == 8){
        LimparBusca()
    }
}

function cleanFindTask(){
    LimparBusca()
    qs('#find-input').value = ''
}

function LimparBusca(){
    arr = [...results_container.children]
    for (el of arr){
        el.classList.remove('hide')
    }
    select[0].selected = true
    if (total_tasks != 0){
        btn_clean_all_container.classList.remove('hide')
    }
}


// FILTRAR TAREFA ->

function realizarFiltragem(){
    qs('#task-input').value = ''
    qs('#find-input').value = ''

    let opcoes = select[select.selectedIndex].text
    switch (opcoes){
    case 'Todas':
        filtrarTodas()
        break
    case 'Feitas':
        filtrar('Feitas')
        break
    case 'A Fazer':
        filtrar()
        break
    }
}

function filtrarTodas(){
    let tasks = [...results_container.children]
    for (el of tasks){
        el.classList.remove('hide')
    }
    if (total_tasks != 0){
        btn_clean_all_container.classList.remove('hide')
    } else{
        btn_clean_all_container.classList.add('hide')
    }
}

function filtrar(situacao){
    filtrarTodas()
    let tasks = [...results_container.children]
    if (situacao == 'Feitas'){
        for(task of tasks){
            if (!task.classList.contains('finalized')){
                task.classList.add('hide')
            }
        }
        btn_clean_all_container.classList.add('hide')
    } else {
        for(task of tasks){
            if (task.classList.contains('finalized')){
                task.classList.add('hide')
            }
        }
        btn_clean_all_container.classList.add('hide')
    }
}


// TASK BTNS AÇÕES ->->->
// FINALIZAR TAREFA ->

function finalizarTask(obj){
    obj.parentNode.parentNode.classList.toggle('finalized')
}


// EDITAR TAREFA ->

function editarTask(obj){
    add_task_container.classList.add('hide')
    find_and_filter_container.classList.add('hide')
    edit_task_container.classList.remove('hide')
    btn_clean_all_container.classList.add('hide')

    let tasks = results_container.children
    for (task of tasks){
        task.classList.add('hide')
    }

    let task_a_ser_editada = obj.parentNode.parentNode
    task_a_ser_editada.classList.remove('hide')
}

function realizarEdicao(){
    novo_valor = qs('#edit-task-input').value
    if (novo_valor){
        let tasks = results_container.children
        for (task of tasks){
            if (!task.classList.contains('hide')){
                task.children[0].innerHTML = novo_valor
            }
        }
        qs('#edit-task-input').value = ''
        finishEdit()
    }
}

function EnviarEdicao(e){
    if (e.keyCode == 13){
        realizarEdicao()
    }
}

function finishEdit(){
    let tasks = results_container.children
    for (task of tasks){
        task.classList.remove('hide')
    }

    if (total_tasks != 0){
        btn_clean_all_container.classList.remove('hide')
    }
    edit_task_container.classList.add('hide')
    add_task_container.classList.remove('hide')
    find_and_filter_container.classList.remove('hide')
    select[0].selected = true
    qs('#edit-task-input').value = ''
}


// EXCLUIR TAREFA

function excluirTask(obj){
    obj.parentNode.parentNode.remove(true)
    total_tasks -= 1
    if (total_tasks === 0){
        btn_clean_all_container.classList.add('hide')
    }
}

qs('#btn-clean-all').addEventListener('click', ()=>{
    let tasks = results_container.children
    let ciclo = tasks.length
    console.log(ciclo)
    while (ciclo > 0){
        tasks[ciclo - 1].remove(true)
        ciclo--
    }
    btn_clean_all_container.classList.add('hide')
    total_tasks = 0
    qs('#find-input').value = ''
    qs('#task-input').value = ''
})