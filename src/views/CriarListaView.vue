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
              <div class="form-group mb-3">
                <label for="descricaoLista" class="form-label">Descrição da Lista:</label>
                <textarea v-model="descricaoLista" class="form-control" id="descricaoLista" rows="3"></textarea>
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
import userState from '../../userState';
// const API_BASE_URL = "https://localhost:7099";

export default {
  data() {
    return {
      nomeLista: "",
      descricaoLista: "",
    };
  },
  methods: {
    async criarLista() {
      const listaDeCompras = {
        Nome: this.nomeLista,
        Descricao: this.descricaoLista,
        Usuario_Id: userState.userId,
        Data_Criacao: new Date().toISOString(),
      };

      try {
        const response = await axios.post("https://localhost:7099/api/listadecompras", listaDeCompras);

        if (response.status === 200) {
          console.log("Nova lista de compras criada:", response.data);
          this.$router.push({ name: 'VerListas' });

        }
      } catch (error) {
        console.error("Erro ao criar a lista de compras:", error);
      }
    },
  },
};
</script>

<style scoped>
.btn-block {
  margin-left: 10px;
}

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
  margin-top: 70px;
  margin-bottom: 70px;
  margin-left: 70px;
  margin-right: 70px;
  width: 1000px;
  height: 600px;
}

.button-container {
  margin-left: 10px;
  margin-top: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  margin: 0;
  padding: 0;
}
</style>
