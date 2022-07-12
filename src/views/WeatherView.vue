<template>
  <h1>I am weather!</h1>
 
<div>
  <p>{{query}}</p>
  <NumberDisplay/>
</div>
<div>
  <SearchBar  @result="setQuery"/>
  </div>
</template>

<script lang="ts">
import SearchBar from '../components/SearchBar.vue';
import NumberDisplay from '../components/NumberDisplay.vue';
import { defineComponent } from 'vue'; 

export default defineComponent({
    name: 'WeatherView',

    data: function() {
        return{
          API_KEY: '27d87126e47057406c28faede276cea5',
          BASE_URL: 'http://api.openweathermap.org/data/2.5/',
          weather: {},
          query: '' as string
        }
    },
    components:{
      SearchBar,
      NumberDisplay
    },

    methods:{
      setQuery(q:string) : void{
        this.query = q;
      }
    }

})
</script>

<style>

</style>