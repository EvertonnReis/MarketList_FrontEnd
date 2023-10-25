<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black">
    <div class="container">
      <a class="navbar-brand" href="#">MarketList</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Sobre</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

};
</script>
<style>
.bg-black {
  background-color: black;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;
}
</style>
