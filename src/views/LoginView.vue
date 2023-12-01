<template>
  <div>
    <div class="black-background">
      <div class="container">
        <div class="row align-items-center h-100">
          <div class="imgleft col-md-6">
            <!-- <img src="src/img/teste22.png" alt="Teste" class="img-fluid"> -->
          </div>
          <div class="col-md-6 white-container">
            <form @submit.prevent="loginUsuario" class="text-right">
              <div class="logo">
                <h1>Bem vindo ao MarketList!</h1>
                <img src="src/img/logo.png" alt="Logo" class="img-fluid mb-4">
                <h2>Login para continuar</h2>
              </div>
              <div class="form-group">
                <label for="nome_usuario">Nome de Usuário:</label>
                <input v-model="nome_usuario" type="nome_usuario" class="form-control" id="nome_usuario" placeholder="Nome de Usuário">
              </div>
              <div class="form-group2">
                <label for="senha">Senha:</label>
                <input v-model="senha" type="password" class="form-control" id="senha" placeholder="Senha">
              </div>
              <div class="button-container">
                <button type="submit" class="btn btn-outline-primary btn-block">Entrar</button>
                <router-link to="/cadastro" class="btn btn-outline-primary btn-cadastrar">Cadastrar-se</router-link>
              </div>
              <div v-if="loginError" class="error-message">
                Credenciais inválidas. Por favor, verifique seu nome de usuário e senha.
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
const API_BASE_URL = "https://localhost:7099";

export default {
  data() {
    return {
      isMobile: false,
      nome_usuario: "",
      senha: "",
      loginError: false,
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
        const response = await axios.post(`${API_BASE_URL}/v1/account/login`, {
          Nome_usuario: this.nome_usuario,
          Senha: this.senha,
        });

        if (response.status === 200 && response.data.token) {
          console.log("Login bem-sucedido.");
          userState.userId = response.data.user.id;
          this.token = response.data.token;
          this.$router.push({ name: "UsuarioHome" });
        } else {
          this.loginError = true;
          console.log("Credenciais inválidas.");
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        // Adicione tratamento de erro aqui, por exemplo:
        if (error.response.status === 401) {
          console.log("Credenciais inválidas.");
        } else {
          console.error("Erro desconhecido ao fazer login:", error);
        }
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

.form-group {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 15px;
}

.form-group2 {
  margin-bottom: 15px;
  text-align: center;
}

.button-container {
  margin-top: 10px;
  gap: 10px;
}

.row {
  margin: 0;
  padding: 0;
}

.logo {
  text-align: center;
  margin-top: 100px;
}

.logo img {
  width: 90px;
}

.logo h1 {
  text-align: center;
  font-size: 30px;
}

body {
  overflow: hidden;
}

.button-container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-cadastrar {
  margin-top: 10px;
}

/* .imgleft {
  position: absolute;
  width: 980px;
  height: 750px;
  z-index: 0;
  margin-left: -97px;
} */

.white-container {
  position: relative;
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-left: auto;
  margin-right: -72px;
  width: calc(100% - 800px);
  height: 100vh;
  z-index: 1;
}
</style>
