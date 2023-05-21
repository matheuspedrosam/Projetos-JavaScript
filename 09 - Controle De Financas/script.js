var tabela = document.getElementById("tabela")
var tabela_container = document.querySelector("#table-container")
var spanEntrada = document.querySelector('#entrada span')
var spanSaida = document.querySelector('#saida span')
var spanTotal = document.querySelector('#total span')
var totalSaida = 0;
var totalEntrada = 0;


function mudaCorDoSpanTotal(){
  if (totalEntrada - totalSaida < 0){
    spanTotal.style.color = 'Red'
  } else{
    spanTotal.style.color = 'Green'
  }
}

function incluir(event){
    event.preventDefault()
    let tipoES = ""
    var inputdescricao = document.getElementById("desc");
    var inputvalor = document.getElementById("valor");
    var inputtipo = document.getElementById("tipo");

    if(inputdescricao.value == "" || inputvalor.value ==""){
        window.alert("Os campos não podem estar vazios!")
    } else if(!Number(inputvalor.value) || Number(inputdescricao.value)){
        window.alert("O valor só poder numérico e a descrição apenas texto!")
    } else{
        if(inputtipo.value == "saida"){
            tipoES = "tipo-saida"
            totalSaida += Number(inputvalor.value)
            spanSaida.innerHTML = `${totalSaida}`
            entradaOuSaida = "saida"
        }else{
            tipoES = "tipo-entrada"
            totalEntrada += Number(inputvalor.value)
            spanEntrada.innerHTML = `${totalEntrada}`
            entradaOuSaida = "entrada"
        }
        tabela.innerHTML += `
          <tr>
            <td>${inputdescricao.value}</td>
            <td>R$ ${inputvalor.value}</td> 
            <td> 
              <span class="${tipoES} material-symbols-outlined">
                  expand_circle_down
              </span> 
            </td>
            <td> 
              <span id="delete" class="material-symbols-outlined">
                  delete
              </span>  
            </td>
      
          </tr> 
        `

        mudaCorDoSpanTotal()
        spanTotal.innerHTML  = `${totalEntrada - totalSaida}`
    }
}


//Função de Deletar

tabela.addEventListener("click", (event)=>{
  if(event.target.id == "delete"){
    let linha_lixo = event.target.parentNode.parentNode
    let valor = Number(linha_lixo.children[1].innerHTML.replace("R$ ", "").replace(',', '.'))

    if (linha_lixo.children[2].children[0].className.includes('tipo-entrada')){
      totalEntrada -= valor
    } else{
      totalSaida -= valor
    }

    mudaCorDoSpanTotal()
    
    spanSaida.innerHTML = `${totalSaida}`
    spanEntrada.innerHTML = `${totalEntrada}`
    spanTotal.innerHTML  = `${totalEntrada - totalSaida}`
    linha_lixo.remove()
  }
})