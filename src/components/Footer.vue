<template>
    <footer>
        <h1 class="title">じらふヘルパー</h1>
        <nav class="gnav">
            <ul class="menu">
                <router-link to="/">Home</router-link> |
                <router-link to="/calendar">Calendar</router-link> |
                <router-link to="/description">description</router-link> |
            </ul>
        </nav>
        <!--<h1>{{ todaydate }}</h1>-->
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>
<style>
    footer{
        position: absolute;/*←絶対位置*/
        bottom: 0; /*下に固定*/
        width: 100%;
    }
</style>
