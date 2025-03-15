import { api } from "./api";

export interface Contato {
  _id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  foto: string;
}

export const getContatos = async () => {
  try {
    const response = await api.get("/contatos"); // Verifique se esse endpoint está correto
    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};
  
  export const addContato = async (contato: Omit<Contato, "_id">) => {
    return await api.post("/contatos", contato);
  };
  
  export const deleteContato = async (id: string) => {
    return await api.delete(`/contatos/${id}`);
  };
  