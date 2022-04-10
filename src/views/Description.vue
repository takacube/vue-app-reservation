<template>
   <div class="ui placeholder segment">
        <div class="ui icon header">
            <i class="birthday cake icon"></i>
                <h1>予約が完了しました！</h1>
                <h2>予約が確定次第ラインでお知らせします！</h2>
                <br>
                予約内容の変更、キャンセルなどは
        </div>
        <div class="ui primary button">OK</div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Description",
        data() {
            return {
                date: "xxx",
                info: "test"
            }
        },
        methods: {
            handle: function () {
                this.$router.push('./calendar')
            }
        }
    }
</script>
<style scoped>
    .ui {
        width: 80%;
        text-align: center;
        margin: 0 auto;
    }
    .button {
        width: 25%;
    }
</style>