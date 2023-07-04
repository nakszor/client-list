export class card{
    static mostrarCards(arr){
        const ul = document.querySelector(".container")
        arr.forEach(cliente => {

            const titulo = document.createElement("h3")
            const email = document.createElement("p")
            const idade = document.createElement("p")
            const cpf = document.createElement("p")
            const sexo = document.createElement("p")
            const div1 = document.createElement("div")

            const enderecoobj = document.createElement("h3")
            const cep = document.createElement("p")
            const estado = document.createElement("p")
            const cidade = document.createElement("p")
            const bairro = document.createElement("p")
            const rua = document.createElement("p")
            const numero = document.createElement("p")
            const div2 = document.createElement("div")

            const nome = document.createElement("h2")
            const li = document.createElement("li")

            titulo.innerHTML = "Dados Pessoais"
            email.innerHTML = cliente.email
            idade.innerHTML = cliente.idade
            cpf.innerHTML = cliente.cpf
            sexo.innerHTML = cliente.sexo

            enderecoobj.innerHTML = "Endereço"
            cep.innerHTML = cliente.endereco.cep
            estado.innerHTML = cliente.endereco.estado
            cidade.innerHTML = cliente.endereco.cidade
            bairro.innerHTML = cliente.endereco.bairro
            rua.innerHTML = cliente.endereco.rua
            numero.innerHTML = cliente.endereco.numero

            nome.innerHTML = cliente.nome

            div1.append(titulo, email, idade, cpf, sexo)
            div2.append(enderecoobj, cep, estado, cidade, bairro, rua, numero)
            li.append(nome, div1,div2)
            ul.appendChild(li)
        })
    }
}    