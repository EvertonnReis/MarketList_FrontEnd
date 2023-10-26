<script setup>
import Navbar from "../components/NavBar.vue";
</script>

<template>
  <div class="black-background">
    <Navbar />
    <div class="button-container">
      <button class="btn btn-secondary">Criar Lista de Compras</button>
      <button class="btn btn-secondary">Ver Lista de Compras</button>
      <button class="btn btn-secondary">Criar Grupo</button>
      <button class="btn btn-secondary">Ver Meus Grupos</button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.black-background {
  background-color: black;
  color: white;
  text-align: center;
  min-height: 100vh;
  padding: 0;
}
.button-container{
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 10px;
}
</style>


