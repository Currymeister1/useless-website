<template>
  <h1>{{msg}}!</h1>
</template>

<script>
export default {
    name: 'ErrorDisplay',
    props:{
        msg: String
    }
}
</script>

<style scoped>

h1{
    color: red
}

</style>