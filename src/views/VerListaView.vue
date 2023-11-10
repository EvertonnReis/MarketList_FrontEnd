<template>
  <div>
    <div class="black-background">
      <div class="container">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md-6 white-container">
            <h1>Listas de Compras</h1>
            <ul>
              <router-link
                v-for="lista in listas"
                :key="lista.id"
                :to="{ name: 'DetalhesLista', params: { listaId: lista.id } }"
              >
                <li>{{ lista.nome }}</li>
              </router-link>
            </ul>
            <router-link to="/criar-lista" class="btn btn-primary btn-block">Criar Lista</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  data() {
    return {
      listas: []
    };
  },
  created() {
    // Assumindo que você tem o ID do usuário disponível, substitua "ID_DO_USUARIO" pelo valor correto.
    const userId = 6;

    axios.get(`https://localhost:7099/api/listadecompras/${userId}`)
      .then(response => {
        this.listas = response.data;
      })
      .catch(error => {
        console.error('Erro ao buscar listas de compras:', error);
      });
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

button {
  margin-top: 10px;
}

.row {
  margin: 0;
  padding: 0;
}
</style>
