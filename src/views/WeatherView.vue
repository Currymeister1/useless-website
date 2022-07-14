<template>
  <div class="weather">
    <div class="name">
      <h1 v-if="weather.name">{{weather.name+', '+weather.sys.country}}</h1>
      <h1 v-else>Select a city!</h1>
    </div>
  

    <div class="number-display">
      <NumberDisplay v-if="weather.main" :value="Math.round(weather.main.temp) + '° c'" />
      <NumberDisplay v-else :value="'0°c'"/>
    </div>

    <div class="search-bar">
      <SearchBar  @result="setQuery" />
    </div>

    <div class="additional-info"  v-if="weather.weather">
        <h1>{{weather.weather[0].main}}</h1> 
    </div>
  </div>


</template>

<script lang="ts">
import SearchBar from '../components/SearchBar.vue';
import NumberDisplay from '../components/NumberDisplay.vue';
import { defineComponent } from 'vue'; 

export default defineComponent ({
    name: 'WeatherView',
    emits: ['state'],
    data(){
        return{
          API_KEY: '5f6dd7d7a5e746e8f9f02a55f6139296',
          BASE_URL: 'http://api.openweathermap.org/data/2.5/',
          weather: {} as any,
          query: '' as string,
          background: 'clear' as string,
          word: 'hello'
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
         this.setBackground();
      },
      async getWeather(){
            const fetched = await fetch(`${this.BASE_URL}weather?q=${this.query}&APPID=${this.API_KEY}&units=metric`); 
            if(fetched.status == 404){
                this.weather = {}
                return;

            } 
            return await fetched.json()
      },

      setBackground(){
          if(this.weather.main){
              switch (this.weather.weather[0].main){
                case 'Rain':
                  this.$emit('state', 'rainy');
                  break;
                case 'Clouds':
                  this.$emit('state', 'cloudy');
                  break;
                default:  
                  this.$emit('state','clear');    
              }
          }
          else{
              this.$emit('state','clear');
          }
      }
    },
    beforeCreate(){
      this.$emit('state','clear');
    }


})
</script>

<style>

.weather{
  color: rgb(31, 29, 29);
  position: relative;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%); 
}


.name{
  color: rgb(31, 29, 29);
  font-style: italic;
}

.number-disply{
  color: rgb(31, 29, 29)

}

.search-bar{
  padding: 20px;

}

.additional-info{
    color: rgb(31, 29, 29);
  font-style: italic;
}

.additional-info h1{
  margin: 0;
}

</style>