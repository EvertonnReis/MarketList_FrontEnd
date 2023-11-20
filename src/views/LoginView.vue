<template>
  <div>
    <div class="black-background">
      <div class="container">
        <div class="row align-items-center h-100">
          <!-- Coluna com a imagem à esquerda -->
          <div class="imgleft col-md-6">
            <img src="src/img/teste22.png" alt="Teste" class="img-fluid h-100">
          </div>
          <!-- Coluna com o formulário à direita -->
          <div class="col-md-6 white-container">
            <form @submit.prevent="loginUsuario" class="text-right">
              <div class="logo">
                <h1>Welcome to MarketList!</h1>
                <img src="src/img/logo.png" alt="Logo" class="img-fluid mb-4">
                <h2>Login to continue</h2>
              </div>
              <div class="form-group">
                <label for="email">E-mail:</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="E-mail">
              </div>
              <div class="form-group2">
                <label for="senha">Senha:</label>
                <input v-model="senha" type="password" class="form-control" id="senha" placeholder="Senha">
              </div>
              <div class="button-container">
                <button type="submit" class="btn btn-outline-primary btn-block">Entrar</button>
                <router-link to="/cadastro" class="btn btn-outline-primary btn-cadastrar">Cadastrar-se</router-link>
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

.form-group {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
}

.form-group2 {
  margin-bottom: 20px;
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
.imgleft {
  position: absolute;
  width: 980px;
  height: 750px;
  z-index: 0;
  margin-left: -97px;
}

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
