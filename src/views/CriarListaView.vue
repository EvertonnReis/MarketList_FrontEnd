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
                <div class="form-group">
                  <label for="itemsLista">Itens da Lista:</label>
                  <textarea v-model="itemsLista" class="form-control" id="itemsLista" rows="4"></textarea>
                </div>
                <div class="button-container">
                  <button type="submit" class="btn btn-primary btn-block">Criar Lista</button>
                  <router-link to="/usuario-home" class="btn btn-primary btn-block">Voltar</router-link>
                </div>
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
        nomeLista: "",
        itemsLista: ""
      };
    },
    methods: {
      criarLista() {
        console.log("Nova lista de compras criada:", {
          nome: this.nomeLista,
          items: this.itemsLista
        });
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
  