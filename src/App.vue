<template>
    <Header/>
    <div id="body">
        <router-view/>
    </div>
    <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
    name: 'App',
    components: {
        Header,
        Footer
    },
}
</script>
<style>
    #body {
        padding-top: 50px; /* ヘッダーの後ろに要素が隠れないようにするため */
    }
</style>

