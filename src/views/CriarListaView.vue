<template>
  <div>
    <div class="black-background">
      <div class="container">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md-6 white-container">
            <h1>Criar Lista de Compras</h1>
            <form @submit.prevent="criarLista">
              <div class="form-group">
                <label for="nomeLista">Nome da Lista:</label>
                <input v-model="nomeLista" type="text" class="form-control" id="nomeLista">
              </div>
              <div class="form-group">
                <label for="itemsLista">Itens da Lista:</label>
                <div v-for="(item, index) in listaItens" :key="index">
                  <div class="d-flex align-items-center">
                    <input type="checkbox" v-model="item.checked" class="mr-2">
                    <input v-model="item.nome" type="text" placeholder="Nome do item" class="form-control mr-2">
                    <input v-model="item.valor" type="text" placeholder="Valor (opcional)" class="form-control">
                    <button @click="removerItem(index)" class="btn btn-danger btn-sm ml-2">Remover</button>
                  </div>
                </div>
                <button @click="adicionarItem" class="btn btn-primary mt-2">Adicionar Item</button>
              </div>
              <div class="button-container">
                <button type="submit" class="btn btn-primary btn-block">Criar Lista</button>
                <router-link to="/home" class="btn btn-primary btn-block">Voltar</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API_BASE_URL = "https://localhost:7099";

export default {
  data() {
    return {
      nomeLista: "",
      listaItens: [{ nome: "", valor: "", checked: false }]
    };
  },
  methods: {
    async criarLista() {
      const novaLista = {
        Nome: this.nomeLista,
        DataCriacao: new Date().toISOString(), // Data atual no formato ISO
        Descricao: "Descrição da lista (opcional)", // Substitua pela descrição desejada
        UsuarioId: 1 // Substitua pelo ID do usuário apropriado
      };

      try {
        const response = await axios.post(`${API_BASE_URL}/api/listadecompras`, novaLista);
        if (response.status === 200) {
          console.log("Nova lista de compras criada:", response.data);
          this.nomeLista = "";
          this.listaItens = [{ nome: "", valor: "", checked: false }];
        }
      } catch (error) {
        console.error("Erro ao criar a lista de compras:", error);
      }
    },
    adicionarItem() {
      this.listaItens.push({ nome: "", valor: "", checked: false });
    },
    removerItem(index) {
      this.listaItens.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.black-background {
  background-color: black;
  text-align: center;
  min-height: 100vh;
  padding: 0;
}

.white-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-top: 100px;
}

.button-container {
  margin-left: 10px;
  margin-top: 10px;
}

.row {
  margin: 0;
  padding: 0;
}
</style>
