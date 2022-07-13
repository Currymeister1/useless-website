<template>
    <div class="display">
        {{value}}
    </div>

</template>

<script>
export default {
    name: 'NumberDisplay',

    props: {
        value: String,
    }
}
</script>

<style>

.display {
    margin:0 auto;
    box-shadow: 1.5px 2.5px rgb(0,0,0,0.25);
    width: 250px;
    border-style: solid;
    border-radius: 15px;
    padding: 20px;
    font-size: 100px;
    background-color: rgb(255,255,255,0.35);
    
}

</style>