<template>
    <div class="black-background">
        <div class="form-container">
            <h1>Itens da Lista de Compras</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Item</th>
                        <th>Descrição</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in itensLista" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.nomeItem }}</td>
                        <td>{{ item.descricao }}</td>
                        <td>{{ item.status ? 'Ativo' : 'Inativo' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            itensLista: [],
        };
    },
    created() {
        axios.get('https://localhost:7099/api/ItensListaDeCompras')
            .then(response => {
                console.log('Resposta da API:', response.data);

                this.itensLista = response.data.map(item => ({
                    id: item.id,
                    nomeItem: item.nome_item,
                    descricao: item.descricao,
                    status: item.status,
                }));
            })
            .catch(error => {
                console.error('Erro ao buscar itens da lista:', error);
            });
    },

};
</script>
  
<style scoped>
.black-background {
    background-color: black;
    color: white;
    text-align: center;
    min-height: 100vh;
    padding: 20px;
}

.form-container {
    background-color: black;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin-top: 20px;
}

.table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}

.table th,
.table td {
    border: 1px solid white;
    padding: 8px;
    text-align: left;
}

.table th {
    background-color: #3498db;
    color: white;
}
</style>
  