<template>
  <h1>I am weather!</h1>
  <SearchBar/>
  
</template>

<script lang="ts">
import SearchBar from '../components/SearchBar.vue';
export default {
    name: 'WeatherView',
    components:{
      SearchBar
    }
}
</script>

<style>

</style>