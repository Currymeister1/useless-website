<template>
  <div class="train">
  <h1>Find The Time!</h1>

      <NumberDisplay v-if="time" :value="time"/>
      <NumberDisplay v-else :value="'0'"/>
  
    <div class="searching">
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
            <button @click="displayInfo">Search!</button>
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
          stopInfo: {} as any,
          time: '' as string,
          type: '' as string
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
        console.log(this.stopInfo)

       
      },
    

      displayInfo(){
        if(this.query != '' && this.line != '' && this.direction != ''){
          for(let i = 0; i < this.stopInfo.data.monitors.length;i++){
            if(this.stopInfo.data.monitors[i].lines[0].name == this.line){              
              if(this.stopInfo.data.monitors[i].lines[0].towards.toUpperCase() == this.direction.toUpperCase()){
                this.type = this.stopInfo.data.monitors[i].lines[0].type
                this.$emit('state',this.type)
                this.time = this.stopInfo.data.monitors[i].lines[0].departures.departure[0].departureTime.countdown
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
    },
     beforeCreate(){
        this.$emit('state','ptMetro')
      },
})

</script>

<style>
.searching{
  padding: 20px;  
}

.line{
  margin: 10px;
}

.btn{
  margin:10px
}
.btn button{
  background-color: rgb(255,255,255,0.35);
  border-color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
}

</style>