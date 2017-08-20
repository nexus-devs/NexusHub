<template>
    <div>
        <img src="/img/catboy.png">
        <h1>ayy lmao</h1>
        <p>
            {{test}}
        </p>
    </div>
</template>

<style>
    h1 {
        font-family: sans-serif;
    }
</style>

<script>
    export default {
        props: ['test']
    }
</script>
