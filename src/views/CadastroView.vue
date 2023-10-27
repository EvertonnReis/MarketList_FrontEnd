<template>
  <div>
    <div class="black-background">
      <div class="container">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md-6 white-container">
            <img src="src/img/logo.png" alt="Logo" class="img-fluid mb-4">
            <h1 class="name"></h1>
            <form @submit.prevent="cadastrarUsuario">
              <div class="form-group">
                <label for="nome">Nome:</label>
                <input v-model="usuario.nome" type="text" class="form-control" id="nome">
              </div>
              <div class="form-group">
                <label for="email">E-mail:</label>
                <input v-model="usuario.email" type="email" class="form-control" id="email">
              </div>
              <div class="form-group">
                <label for="senha">Senha:</label>
                <input v-model="usuario.senha" type="password" class="form-control" id="senha">
              </div>
              <div class="button-container">
                <button type="submit" class="btn btn-primary btn-block">Cadastrar</button>
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
      usuario: {
        nome: "",
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    async cadastrarUsuario() {
      try {
        const response = await axios.post(`${API_BASE_URL}/api/usuario`, this.usuario);

        if (response.status === 200) {
          console.log("Usuário cadastrado com sucesso:", response.data);

          this.$router.push({ name: "Login" });
        }
      } catch (error) {
        console.error("Erro ao cadastrar o usuário:", error);
      }
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
