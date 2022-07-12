<template>
  <input class= "search" type="text" placeholder="Search..."/>
</template>

<script>

export default {
       name: 'SearchBar'
}
</script>

<style>

.search {
    border-radius: 7px 0px 7px 0px;
    width: 250px;
    padding: 6px;
    background-color: rgb(255, 255, 255, 0.50);
    border: none;
    transition-delay: 0.4s;
    box-shadow: 1.5px 2.5px rgb(0,0,0,0.25);
}

.search:focus{
    box-shadow: 2.5px 3.5px rgb(0,0,0,0.25);
    background-color: rgb(255, 255, 255, 0.75);
    border-radius: 0px 7px 0px 7px;
    outline: none
}




</style>