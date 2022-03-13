<template>
    <div id="title">
        <h1>じらふ</h1>
        <h1>{{ todaydate }}</h1>
    </div>
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
    #title {
        color: black;
    }
</style>
