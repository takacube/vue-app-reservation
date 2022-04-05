<template>
    <div>
        <header>
            <h1 class="title">じらふヘルパー</h1>
            <!--
            <nav class="gnav">
                <ul class="menu">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/calendar">Calendar</router-link> |
                    <router-link to="/description">description</router-link> |
                </ul>
            </nav>
            -->
            <!--<h1>{{ todaydate }}</h1>-->
            <div>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/calendar">Calendar</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/description">description</router-link>
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
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
        background: linear-gradient(to bottom left, cyan 50%, rgb(233, 215, 14) 50%);
        padding: 20px 50px;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        /*left: 0;*/
        display: flex;
        align-items: center;
    }

    header .gnav .menu {
        display: flex;
        align-items: flex-end;
    }

    header .gnav .menu li {
        list-style: none;
    }

    .title {
        color: rgb(255, 255, 255);
        font-size: 3vw;
    }
</style>
