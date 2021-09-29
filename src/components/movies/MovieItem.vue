<template>
  <li class='inline-block bg-red-800' @click='flipSides'>
    <!-- The router-link below makes the entire poster a link that redirects
    to the movie details page     -->
<router-link :to='movieDetailsLink'> 
  <div class='w-48 p-2 m-2'>
      <img :src='img' :alt='title' />
      </div>
      </router-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'img'],
  computed: {
    movieDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

