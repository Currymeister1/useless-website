<template>

  <input 
    v-model="query"
    class= "search" 
    type="text" 
    placeholder="Search..."
    @keypress="fetchWeather"
    />
</template>

<script>

export default {
    name: 'SearchBar',
    emits: ['query'],
    data(){
        return{
            query: ''
        }
    },
    methods: {
        fetchWeather(e) {
            if(e.key == "Enter"){
                this.$emit('result',this.query);
            }
        }
    }
}


</script>

<style>

.search {
    border-radius: 7px 0px 7px 0px;
    width: 250px;
    padding: 10px;
    background-color: rgb(255, 255, 255, 0.50);
    border: none;
    transition-delay: 0.4s;
    box-shadow: 2.5px 3.5px rgb(0,0,0,0.25);
    text-align: center;
}

.search:focus{
    box-shadow: 3.5px 4.5px rgb(0,0,0,0.25);
    background-color: rgb(255, 255, 255, 0.75);
    border-radius: 0px 7px 0px 7px;
    outline: none
}




</style>