const total_de_tarefas = []
const numero_total_de_tarefas = []

function enviarTarefa(e){
    if (e.keyCode == 13){
        salvarTarefa()
    }
}

function salvarTarefa(){
    var valor_do_input = document.querySelector('.principal input').value
    if (valor_do_input != []){
        var resultado_a_ser_clonado = document.querySelector('.resultado')
        var resultado = resultado_a_ser_clonado.cloneNode(true)
        var resultados_container = document.querySelector('.resultados-container')
        resultado.classList.remove('hide')
        resultado.children[0].children[0].innerHTML = valor_do_input
        document.querySelector('.resultados-container h1').classList.remove('hide')
        resultados_container.appendChild(resultado)
        total_de_tarefas.push(resultado)
        numero_total_de_tarefas.push(resultado)
        document.querySelector('.principal input').value = ''
        document.querySelector('#totalDeTarefas').innerHTML = `${total_de_tarefas.length}`
        document.querySelector('.btn-limpar').classList.remove('hide')
    } else{
        window.alert('Digite alguma tarefa!')
    }
}

function concluirTarefa(objeto){
    var resultados_pai = objeto.parentNode.parentNode
    if (resultados_pai.classList.contains('finalized') == true){
        window.alert('Tarefa Já Finalizada')
    } else{
        resultados_pai.classList.add('finalized')
        total_de_tarefas.splice(total_de_tarefas.indexOf(objeto), 1)
        document.querySelector('#totalDeTarefas').innerHTML = `${total_de_tarefas.length}`
    }
}

function excluirTarefa(objeto){
    var resultados_container_childrens = document.querySelector('.resultados-container').children
    if (resultados_container_childrens.length === 3){
        document.querySelector('.resultados-container h1').classList.add('hide')
        document.querySelector('.btn-limpar').classList.add('hide')
    }
    if (objeto.parentNode.parentNode.classList.contains('finalized') != true){
        total_de_tarefas.splice(total_de_tarefas.indexOf(objeto), 1)
        document.querySelector('#totalDeTarefas').innerHTML = `${total_de_tarefas.length}`
    }
    objeto.parentNode.parentNode.remove(true)
}

function limparTarefas(){
    numero_total_de_tarefas.forEach((el)=>{
        el.remove(true)
    })
    document.querySelector('.resultados-container h1').classList.add('hide')
    document.querySelector('.btn-limpar').classList.add('hide')
    document.querySelector('#totalDeTarefas').innerHTML = '0'
    total_de_tarefas.splice(0, total_de_tarefas.length)
}