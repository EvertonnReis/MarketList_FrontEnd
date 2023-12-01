<template>
    <div class="black-background">
        <div class="form-container">
            <h1>Lista de Compras</h1>
            <form @submit.prevent="salvarItemListaDeCompras">
                <div v-for="(item, index) in itensLista" :key="index">
                    <label for="nomeItem">Nome do Item:</label>
                    <input type="text" v-model="item.Nome_item" required>

                    <label for="descricao">Descrição:</label>
                    <textarea v-model="item.Descricao" required></textarea>

                    <label for="status">Status:</label>
                    <select v-model="item.status" required>
                        <option value="true">Ativo</option>
                        <option value="false">Inativo</option>
                    </select>

                    <label for="listaDeCompras_Id">Lista de Compras ID:</label>
                    <input type="number" v-model="item.listaDeCompras_Id" required>

                    <hr>
                </div>

                <button type="button" @click="adicionarNovoItem">Adicionar Item</button>
                <button type="submit">Salvar Itens</button>
            </form>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            novoItem: { Nome_item: '', Descricao: '', status: true, listaDeCompras_Id: 0 },
            itensLista: [],
        };
    },
    methods: {
        adicionarNovoItem() {
            // Cria um clone do novoItem para evitar a referência direta
            const cloneItem = Object.assign({}, this.novoItem);
            this.itensLista.push(cloneItem);

            // Limpa o novoItem para a próxima adição
            this.novoItem = { Nome_item: '', Descricao: '', status: true, listaDeCompras_Id: 0 };
        },
        salvarItemListaDeCompras() {
            if (this.itensLista.length === 0) {
                console.log('Nenhum item preenchido para ser salvo.');
                return;
            }

            const listaDeComprasId = this.itensLista[0].listaDeComprasId; // Obtém o ID da lista

            this.itensLista.forEach(item => {
                axios.post('https://localhost:7099/api/ItensListaDeCompras', item)
                    .then(response => {
                        console.log('Item adicionado com sucesso:', response.data);
                    })
                    .catch(error => {
                        console.error('Erro ao adicionar item:', error);
                    });
            });

            // Limpa a lista após a conclusão do envio
            this.limparItens();
        },

        limparItens() {
            this.itensLista = [];
        },
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

label {
    display: block;
    margin-bottom: 5px;
    color: white;
}

input,
textarea,
select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

button {
    background-color: #3498db;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
}

hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid white;
}
</style>
  