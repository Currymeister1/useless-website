<template>
  <h1>Hello I am Train time</h1>

  <NumberDisplay/>
  <SearchBar @result="setQuery"/>
</template>

<script lang="ts">
import SearchBar from '../components/SearchBar.vue';
import NumberDisplay from '../components/NumberDisplay.vue';
import { defineComponent } from 'vue'; 
import Divas from '../assets/stops/wienerlinien-ogd-haltestellen.json';

export default defineComponent({
    name: 'TrainTimeView',
    data() {
        return{
          val: Number,
          divas: Divas,
          query: '' as string,
          BASE_URL: 'http://localhost:3000/'
        }
    },
    components: {
      SearchBar,
      NumberDisplay,
    },  
    methods: {
      async setQuery(q:string){
        this.query = q;
        const diva = this.divas.find(d => d.PlatformText === q)?.DIVA;
        const stopInfo = await this.getStopInfo(diva).then(console.log);

      },  

      async getStopInfo(diva:any){
        console.log(`${this.BASE_URL}?diva=${diva}`)
        const response = await fetch(`${this.BASE_URL}?diva=${diva}`)
        return await response.json()

      }

    }
})

</script>

<style>

</style>