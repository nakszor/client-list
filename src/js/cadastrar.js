import { Api } from "./api.js"

const cadastro = document.querySelector("#newclient")

const inputCadastro = [...cadastro]

cadastro.addEventListener("submit", async (e) =>{
        e.preventDefault()
        const data = {
        nome: inputCadastro[0].value,
        idade: inputCadastro[2].value,
        cpf: inputCadastro[3].value,
        sexo: inputCadastro[4].value,
        email: inputCadastro[1].value,
        endereco:{
            cep: inputCadastro[5].value,
            rua: inputCadastro[6].value,
            numero: inputCadastro[7].value,
            bairro: inputCadastro[8].value,
            cidade: inputCadastro[9].value,
            estado: inputCadastro[10].value
        }
    }
    const registro = await Api.cadastrarCliente(data)
    if(registro){
        alert('usuário cadastrado com sucesso')
        location.reload()
    }else{
        alert('Erro ao cadastrar usuário')
    }
})

