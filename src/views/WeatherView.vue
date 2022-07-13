<template>
  <h1>I am weather!</h1>
<div>
  <p>{{query}}</p>
  <NumberDisplay/>
</div>
<div>
  <SearchBar  @result="setQuery" />
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
          API_KEY: '5f6dd7d7a5e746e8f9f02a55f6139296',
          BASE_URL: 'http://api.openweathermap.org/data/2.5/',
          weather: {} as any,
          query: '' as string
        }
    },
    components:{
      SearchBar,
      NumberDisplay
    },

    methods:{
      
      setQuery(q:string){
        this.query = q;
        this.weather = this.getWeather().then(this.setWeather)
        
      },

      async setWeather(values:any){
          this.weather = values
      },
      async getWeather(){
            const fetched = await fetch(`${this.BASE_URL}weather?q=${this.query}&APPID=${this.API_KEY}`); 
            return await fetched.json()
      }

    }

})
</script>

<style>

</style>