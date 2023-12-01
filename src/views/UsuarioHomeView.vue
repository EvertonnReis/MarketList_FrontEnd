<template>
  <div>
    <Navbar />
    <div class="menu">
      <div class="criarlista">
        <div class="text-container">
          <img src="src/img/ImgCreateOFC.jpeg" class="img-group">
          <div class="text-content">
            <p>
              Cansado de perder tempo escrevendo suas compras em papel e sempre esquecer algo importante?
            </p>
            <p>
              Use o <p class="txt">MarketList!</p> 
            </p>
            <p>
              Experimente a praticidade de uma lista digital!
            </p>
            <div class="button-container">
              <router-link to="/criar-lista" type="button" class="button btn btn-primary">Criar lista</router-link>
              <router-link to="/ver-lista" type="button" class="button btn btn-primary">Ver listas</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="group">
        <div class="foto">
          <img src="src/img/ImgGroupp.jpeg" class="img-group">
        </div>
        <div class="txt2">
          <p>Deseja compartilhar a sua lista com seus amigos ou familiares?</p>
          <p>Crie seu grupo já!</p>
        </div>
        <div class="button-container2">
          <router-link to="/criar-grupo" type="button" class="button btn btn-primary">Criar grupo</router-link>
          <router-link to="/ver-grupo" type="button" class="button btn btn-primary">Ver grupos</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/navbar.vue";
</script>

<script>
import userState from '../../userState'; 

export default {
  methods: {
    getUserId() {
      return userState.userId;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem;
}

.menu {
  background-color: black;
  display: block;
  height: 100vh;
}
.criarlista {
  flex: 1;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  justify-content: flex-start; 
}

.text-container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.text-container img {
  width: 30%; 
  height: auto;
  margin-right: 20px; 
}

.text-content {
  display: flex;
  flex-direction: column;
}

.text-content p {
  color: white; 
  font-size: 15px; 
  margin: 0;
  white-space: normal;
}


.text-content .txt{
  font-size: 18px;
  color: red;

}

.button-container {
  gap: 20px; 
  margin-top: 30px; 
  white-space: normal;
}

.button-container router-link {
  display: flex;
  padding: 5px 100px; 
  font-size: 18px; 
  margin-top: 20px;
}
.group {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}

.foto {
  width: 40%;
  height: auto;
  margin-top: 30px;
  flex-shrink: 0;
}
.txt2 {
  color: white;
  margin-top: 30px;
  margin-left: -110px;
  white-space: normal;
  flex: 1;
}

.button-container2 {
  position: relative;
  margin-top: 100px; 
  left: -650px; 
}
.button-container2 router-link{
  display: block;
  white-space: normal;
  padding: 5px 100px;
  font-size: 18px;
  margin-top: 20px;
  gap: 10px;
}
#img{
  width: 500px;
}
</style>
