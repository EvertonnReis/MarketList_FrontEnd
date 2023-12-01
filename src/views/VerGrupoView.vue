
<script>
import axios from "axios";

export default {
  data() {
    return {
      grupos: []
    };
  },
  created() {
    // Assumindo que você tem o ID do usuário disponível, substitua "ID_DO_USUARIO" pelo valor correto.
    const userId = 6;

    axios.get(`https://localhost:7099/api/grupo/${userId}`)
      .then(response => {
        this.grupos = response.data;
      })
      .catch(error => {
        console.error('Erro ao buscar grupos:', error);
      });
  }
};
</script>

<template>
    <div>
      <div class="black-background">
        <div class="container">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-md-6 white-container">
              <h1>Grupos</h1>
              <ul>
                <router-link
                  v-for="grupo in grupos"
                  :key="grupo.id"
                  :to="{ name: 'DetalhesGrupo', params: { grupoId: grupo.id } }"
                >
                  <li>{{ grupo.nome }}</li>
                </router-link>
              </ul>
              <router-link to="/criar-grupo" class="btn btn-primary btn-block">Criar Grupo</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

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