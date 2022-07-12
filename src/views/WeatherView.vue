<template>
  <h1>I am weather!</h1>
 
<div>
  <NumberDisplay/>
</div>
<div>
  <SearchBar/>
  </div>
</template>

<script lang="ts">
import SearchBar from '../components/SearchBar.vue';
import NumberDisplay from '../components/NumberDisplay.vue';
export default {
    name: 'WeatherView',
    components:{
      SearchBar,
      NumberDisplay
    }
}
</script>

<style>

</style>