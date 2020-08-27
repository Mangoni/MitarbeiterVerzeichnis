<template>
    <div>
        Dies ist die Startseite.
        <input type="text"   v-bind:value="message" v-on:input="message = $event.target.value">
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data (){
            return {message:''}
        }
    }
</script>

<style scoped>

</style>