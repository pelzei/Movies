<template>
 <div id='movies' class="bg-red-800">
  <top-100-movies/>
 </div>
</template>
<script>
import Top100Movies from '../components/movies/Top100Movies.vue';

export default {
  name: 'Top100',
  components: {
    Top100Movies,
  },
};
</script>
