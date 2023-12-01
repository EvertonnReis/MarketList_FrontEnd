
<script>
import axios from "axios";
// const API_BASE_URL = "https://localhost:7099";

export default {
  data() {
    return {
      nomeGrupo: "",
      descricaoGrupo: "",
    };
  },
  methods: {
    async criarGrupo() {
      const grupos = {
        Nome: this.nomeGrupo,
        Descricao: this.descricaoGrupo,
        Usuario_Id: 1,
        Data_Criacao: new Date().toISOString(),
      };

      try {
        const response = await axios.post("https://localhost:7099/api/grupo", grupos);

        if (response.status === 200) {
          console.log("Nova grupo criado:", response.data);
          this.$router.push({ name: 'AdicionarPessoas', params: { grupoId: response.data.Id } });
        }
      } catch (error) {
        console.error("Erro ao criar grupo:", error);
      }
    },
  },
};
</script>

<template>
    <div>
      <div class="black-background">
        <div class="container">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-md-6 white-container">
              <h1>Criar grupo</h1>
              <form @submit.prevent="criarGrupo">
                <div class="form-group">
                  <label for="nomeGrupo">Nome do grupo:</label>
                  <input v-model="nomeGrupo" type="text" class="form-control" id="nomeGrupo">
                </div>
                <div class="form-group mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Descrição do grupo:</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="button-container">
                  <button type="submit" class="btn btn-primary btn-block">Criar grupo</button>
                  <router-link to="/home" class="btn btn-primary btn-block">Voltar</router-link>
                </div>
              </form>
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