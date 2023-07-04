import { card } from "./card.js";
import { Api } from "./api.js";

const clientes = await Api.listarClientes()

card.mostrarCards(clientes)

