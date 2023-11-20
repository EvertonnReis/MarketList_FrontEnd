<template>
  <div>
    <div class="black-background">
      <div class="container">
        <div class="row align-items-center h-100">
          <div class="imgleft col-md-6">
            <img src="src/img/teste22.png" alt="Teste" class="img-fluid h-100">
          </div>
          <div class="col-md-6 white-container">
            <form @submit.prevent="cadastrarUsuario">
              <div class="logo">
                <h1>Welcome to MarketList!</h1>
                <img src="src/img/logo.png" alt="Logo" class="img-fluid mb-4">
                <h2>Register</h2>
              </div>
              <div class="form-group">
                <label for="nome">Nome:</label>
                <input v-model="usuario.nome" type="text" class="form-control" id="nome">
              </div>
              <div class="form-group2">
                <label for="email">E-mail:</label>
                <input v-model="usuario.email" type="email" class="form-control" id="email">
              </div>
              <div class="form-group2">
                <label for="senha">Senha:</label>
                <input v-model="usuario.senha" type="password" class="form-control" id="senha">
              </div>
              <div class="button-container">
                <button type="submit" class="btn btn-outline-primary btn-block">Cadastrar</button>
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
  margin-top: 60px;
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
