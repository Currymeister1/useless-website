<template>
    <main>
        <h1>About</h1>
            <p>
                If you ever been to the metro station Karlsplatz, 
                <br/>you probably have seen the numbers on different facts (e.g. how many people are alive right now). 
                <br/>Well this website isn't really about displaying some numeric facts.<br/>
                I wanted to build an all in one app that contains useful information. <br/>
                For now, it's just weather and train schedule. 
            </p>

            <h2>Used APIs</h2>
            <p>
                <ul>
                    <li><a href="https://openweathermap.org/">Open Weather</a> </li>
                    <li><a href="https://openweathermap.org/">Wiener Linien</a></li>
                </ul>
            </p>
    </main>
</template>

<script>
export default {
    beforeCreate(){
        this.$emit('state','');
    }
}
</script>

<style scoped>


main {
    margin: 10px;
}

ul {
    list-style: none;
}
li {
   
    display: inline;
    margin-right: 25px;
}

li a{
    color: rgba(3, 34, 100, 0.918);
}


</style>    