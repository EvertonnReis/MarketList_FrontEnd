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
                  <label for="username">Nome de usuário</label>
                  <input v-model="username" type="text" class="form-control" id="username">
                </div>
                <div class="form-group">
                  <label for="password">Senha</label>
                  <input v-model="password" type="password" class="form-control" id="password">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Entrar</button>
                <button type="button" class="btn btn-secondary btn-block">Cadastrar-se</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMobile: false,
        username: "",
        password: ""
      };
    },
    mounted() {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      }
    },
    methods: {
      loginUsuario() {
        if (this.username === "seuusuario" && this.password === "suasenha") {
          this.$router.push({ name: "UsuarioHome" });
        } else {
          console.log("Login malsucedido");
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
  button{
    margin-left: 10px;
    margin-top: 10px;
  }
  .row {
    margin: 0;
    padding: 0;
  }
  </style>
  