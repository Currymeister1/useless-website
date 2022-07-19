<template>
  <div class="train">
  <h1>Hello I am Train time</h1>

  <NumberDisplay/>
    <div class="search">
      <div class="station">
       <SearchBar @result="setQuery"/>
      </div>
       <div class="line">
       <SearchBar @result="setLine"/>
      </div>
       <div class="direction">
       <SearchBar @result="setDirection"/>
      </div>

      <div class="btn">
          <button @click="displayInfo">X</button>
      </div>
    </div>
  </div>
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
          BASE_URL: 'http://localhost:3000/',
          line: '' as string,
          direction: '' as string, 
          stopInfo: {} as any
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
        this.stopInfo = await this.getStopInfo(diva);
        console.log(this.line)

       
      },
      
      displayInfo(){
        if(this.query != '' && this.line != '' && this.direction != ''){
          for(let i = 0; i < this.stopInfo.data.monitors.length;i++){
            if(this.stopInfo.data.monitors[i].lines[0].name == this.line){
              console.log(this.stopInfo.data.monitors[i].lines[0].name)
              if(this.stopInfo.data.monitors[i].lines[0].towards == this.direction){
                console.log('Hello')
              }
            }
          }
        }
       
      },

      async getStopInfo(diva:any){
        console.log(`${this.BASE_URL}?diva=${diva}`)
        const response = await fetch(`${this.BASE_URL}?diva=${diva}`)
        return await response.json()

      },
      setLine(line:string){
        this.line = line;
      },
      setDirection(direction:string){
        this.direction = direction;
      }

    }
})

</script>

<style>

</style>