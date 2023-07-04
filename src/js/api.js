class Api {
    static baseURL = "https://atividade-api-clientes.herokuapp.com/clientes"
    
    static async listarClientes(){
        const response = await fetch(this.baseURL)
        const data = response.json()

        return data
    }

    static async cadastrarCliente(data){
        const response = await fetch(this.baseURL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => (res))
        
        return response 
    }
    

    static async editarCliente(data, id){
        const response = await fetch(`${this.baseURL}/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
      .then(res => res.json())
      .catch(err => console.error(err))
        return response
    }

    static async deletarCliente(id){
        const response = fetch(`${this.baseURL}/${id}`, {
            method: "DELETE"
        })
      .then(res => res)
        return response
    }
}
  
export {Api}