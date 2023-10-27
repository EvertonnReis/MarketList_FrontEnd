<template>
  <div>
    <div class="black-background">
      <div class="container">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md-6 white-container">
            <img src="src/img/logo.png" alt="Logo" class="img-fluid mb-4">
            <h1 class="name"></h1>
            <form @submit.prevent="loginUsuario">
              <div class="form-group">
                <label for="email">E-mail</label>
                <input v-model="email" type="email" class="form-control" id="email">
              </div>
              <div class="form-group">
                <label for="senha">Senha</label>
                <input v-model="senha" type="password" class="form-control" id="senha">
              </div>
              <div class="button-container">
                <button type="submit" class="btn btn-primary btn-block">Entrar</button>
                <router-link to="/cadastro" class="btn btn-primary btn-block">Cadastrar-se</router-link>
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
      isMobile: false,
      email: "",
      senha: ""
    };
  },
  mounted() {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    }
  },
  methods: {
      async loginUsuario() {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/usuario?email=${this.email}&senha=${this.senha}`);

          if (response.status === 200 && response.data !== null) {
            console.log("Login bem-sucedido:", response.data);
            this.$router.push({ name: "UsuarioHome" });
          } else {
            console.log("Credenciais inválidas.");
          }
        } catch (error) {
          console.error("Erro ao fazer login:", error);
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
  margin-right: 10px;
  margin-top: 10px;
  gap: 10px;
}

.row {
  margin: 0;
  padding: 0;
}
</style>
