import { Api } from "./api.js";

const selectId = document.getElementById("cliente")
const clientes = await Api.listarClientes()

class listaId {
    static MostrarId(arr){
        arr.forEach(element => {
        const cliente = document.createElement("option")
          cliente.innerHTML = element.nome 
          cliente.value = element.id
          selectId.appendChild(cliente)
        })
    }
}
listaId.MostrarId(clientes)

const formulario = document.getElementById("form-deletar")
formulario.addEventListener("submit", async (e) =>{
    e.preventDefault()
    const response = selectId.value
    if(response <= 6){
        alert('Usuário padrão não pode ser deletado')
    } 
     const apagarusuario = await Api.deletarCliente(response)
    if(apagarusuario.status === 204){
        alert('Usuário apagado com sucesso!')
    }
})