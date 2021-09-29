<template>
  <div class='bg-red-800'>
    <div id='nav' class='p-30px justify-between'>
      <button class='px-10 py-5'><router-link to='/top100'>Top100</router-link></button>
      <button><router-link to='/search'>Search Movies</router-link></button>
      </div>

    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    loadTopMovies() {
      this.$store.dispatch('loadTopMovies');
    },
  },
  created() {
    this.loadTopMovies();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #191d20;
  background-color: #991B1B;
}

#nav a {
  font-weight: bold;
  color: #D97706;
}

#nav a.router-link-exact-active {
  color: #FCD34D;
  font-weight:  700;
  text-decoration:  overline;

}
</style>
