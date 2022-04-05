<template>
    <MainHeader/>
    <div id="body">
        <router-link to="/">Home</router-link> |
        <router-link to="/calendar">Calendar</router-link> |
        <router-link to="/description">description</router-link> |
        <router-view/>
    </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
export default {
    name: 'App',
    components: {
        MainHeader,
    },
}
</script>
<style>
    #body {
        padding-top: 50px; /* ヘッダーの後ろに要素が隠れないようにするため */
    }
</style>

