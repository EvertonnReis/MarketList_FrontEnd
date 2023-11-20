<template>
  <div>
    <Navbar />
    <div class="menu">
      <div class="criarlista">
        <div class="text-container">
          <img src="src/img/ImgCreateOFC.jpeg" alt="">
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
              <button type="button" class="button btn btn-primary">Criar lista</button>
              <button type="button" class="button btn btn-primary">Ver listas</button>
            </div>
          </div>
        </div>
      </div>
      <div class="group">
        <div class="foto">
          <img src="src/img/ImgGroupp.jpeg" alt="">
        </div>
        <div class="txt2">
          <p>Deseja compartilhar a sua lista com seus amigos ou familiares?</p>
          <p>Crie seu grupo já!</p>
        </div>
          <div class="button-container2">
            <button type="button" class="button btn btn-primary">Criar Grupo</button>
            <button type="button" class="button btn btn-primary">Ver Grupos</button>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/NavBar.vue";
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
  display: flex;
  gap: 20px; 
  margin-top: 30px; 
  white-space: normal;
}

.button-container button {
  white-space: normal;
  padding: 5px 100px; 
  font-size: 18px; 
}
.group {
  display: flex;
  align-items: flex-start;
  justify-content: space-between; 
}

.foto {
  width: 40%;
  height: auto;
  margin-top: 30px;
}

.txt2 {
  color: white;
  margin-top: 10px;
  margin-right: 20px; 
}

.button-container2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}

.button-container2 button {
  white-space: normal;
  padding: 5px 50px;
  font-size: 18px;
  margin-top: 5px;
}

</style>
