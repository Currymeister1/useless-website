<template>
  <h1>Hello I am Train time</h1>

  <NumberDisplay/>
  <SearchBar/>

</template>

<script lang="ts">
import SearchBar from '../components/SearchBar.vue';
import NumberDisplay from '../components/NumberDisplay.vue';
export default {
  
    name: 'TrainTimeView',
    components: {
      SearchBar,
      NumberDisplay,
    },
    methods: {
      loger(){
        console.log(1)
      }
    }
}

</script>

<style>

</style>