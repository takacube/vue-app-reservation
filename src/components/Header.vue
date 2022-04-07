<template>
    <div class="head">
        <h2 class="ui header">
            <i class="plug icon"></i>
            <div class="content">
                <ul class="nav justify-content-end list">
                    <li class="nav-item">
                        <router-link class="nav-link title-name" to="/">じらふ</router-link>
                    </li>
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
        </h2>
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
    .head {
        background: rgb(87, 86, 86);
    }
    ul.list{
        text-align: left;
        float: right;
    }
    ul.list li{
        display: inline;
        margin-left: 20px;
    }
    .title-name {
        color: rgb(254, 254, 254);
        margin-right: 40px;
    }
</style>
