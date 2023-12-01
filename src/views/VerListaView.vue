<template>
  <div>
    <div class="black-background">
      <div class="container">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md-8 white-container">
            <h1>Listas de Compras</h1>
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome da Lista</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="lista in listas" :key="lista.id">
                  <td>{{ lista.id }}</td>
                  <td>{{ lista.nome }}</td>
                  <td>
                    <router-link :to="{ name: 'AdicionarItens', params: { listaId: lista.id } }" class="btn btn-primary btn-sm">
                      Adicionar Itens
                    </router-link>
                    <router-link :to="{ name: 'VerItensLista', params: { listaId: lista.id } }" class="btn btn-success btn-sm">
                      Ver Itens
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
            <router-link to="/criar-lista" class="btn btn-primary btn-block">Criar Lista</router-link>
          </div>
        </div>
      </div>
    </div>
    />
  </div>
</template>

<script>
import axios from "axios";
import userState from '../../userState';

export default {
  data() {
    return {
      listas: [],
      modalAdicionarItensAberto: false,
      listaIdSelecionada: null
    };
  },
  created() {
    this.loading = true;

    const userId = userState.userId;

    axios.get(`https://localhost:7099/api/listadecompras?Usuario_Id=${userId}`)
      .then(response => {
        this.listas = response.data;
      })
      .catch(error => {
        console.error('Erro ao buscar listas de compras:', error);
        this.error = 'Erro ao buscar listas de compras. Por favor, tente novamente.';
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    abrirModalAdicionarItens(listaId) {
      this.modalAdicionarItensAberto = true;
      this.listaIdSelecionada = listaId;
    },
    fecharModalAdicionarItens() {
      this.modalAdicionarItensAberto = false;
      this.listaIdSelecionada = null;
    },
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
  margin-top: 10px;
}

.row {
  margin: 0;
  padding: 0;
}
</style>
