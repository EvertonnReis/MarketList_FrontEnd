<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostraBotaoLogin: true
    };
  },
  methods: {
    redirecionaLogin() {
      this.$router.push({ name: "Login" });
      this.mostraBotaoLogin = false;
    }
  }
};
</script>
