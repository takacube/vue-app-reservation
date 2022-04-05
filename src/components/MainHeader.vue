<template>
    <header>
        <h1>じらふヘルパー</h1>
        <nav class="gnav">
            <ul class="menu">
                <router-link to="/">Home</router-link> |
                <router-link to="/calendar">Calendar</router-link> |
                <router-link to="/description">description</router-link> |
            </ul>
        </nav>
        <!--<h1>{{ todaydate }}</h1>-->
    </header>
</template>

<script>
export default {
    name: 'MainHeader',
    data() {
        return {
            todaydate: ""
        }
    },
    mounted: function(){
        this.getDate()
    },
    methods: {
        getDate() {
            const today = new Date()
            const thisYear = today.getFullYear()
            const nextMonth = today.getMonth() + 2
            this.todaydate = `${thisYear}年${nextMonth}月分の予約`
        }
    }
}
</script>
<style>
    header {
        width: 100%;
        height: 50px;
        background: rgb(68, 235, 210);
        padding: 20px 50px;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
    }

    header .gnav .menu {
        display: flex;
    }

    header .gnav .menu li {
        list-style: none;
    }
    ul {
        margin-left: 10px;
        padding-left: 10px;
    }
    h1 {
        color: white;
    }
</style>
