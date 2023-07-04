import { Api } from "./api.js";

const clientes = await Api.listarClientes()

const selectEditar = document.getElementById("select-buscar")

class ListaIdEditar {
    static MostrarIdEditar(arr){
        arr.forEach(element => {
        const cliente = document.createElement("option")
          cliente.innerText = element.nome
          cliente.value = element.id
          selectEditar.appendChild(cliente)
        })
    }

    static async EditarCliente(){
    const editar = document.querySelector("#form-editar")

    const inputEditar = [...editar]
        const data = {
            nome: inputEditar[0].value,
            idade: inputEditar[2].value,
            cpf: inputEditar[3].value,
            sexo: inputEditar[4].value,
            email: inputEditar[1].value,
            endereco:{
                cep: inputEditar[5].value,
                rua: inputEditar[6].value,
                numero: inputEditar[7].value,
                bairro: inputEditar[8].value,
                cidade: inputEditar[9].value,
                estado: inputEditar[10].value
            }
        }
         await Api.editarCliente(data,selectEditar.value)
    }
}

ListaIdEditar.MostrarIdEditar(clientes)

 const btnEdit = document.querySelector("#btnEdit")

 btnEdit.addEventListener("click", async (e) =>{
    e.preventDefault()
    ListaIdEditar.EditarCliente()
 })

