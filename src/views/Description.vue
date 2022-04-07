<template>
    <div class="ui placeholder segment">
        <div class="ui two column very relaxed stackable grid">
            <div class="column">
                <div class="ui form">
                    <div class="field">
                        <label>名前</label>
                        <div class="ui left icon input">
                            <input type="text" placeholder="なまえ" v-model="name">
                            <i class="user icon"></i>
                        </div>
                    </div>
                    <div class="field">
                        <label>パスワード</label>
                        <div class="ui left icon input">
                            <input type="password" v-model="password">
                            <i class="lock icon"></i>
                        </div>
                    </div>
                    <button class="ui blue submit button" type="submit" @click="handle()">ログイン</button>
                </div>
            </div>
            <div class="middle aligned column">
                <div class="ui big button">
                    <i class="signup icon"></i>
                    初めての方
                </div>
            </div>
        </div>
        <div class="ui vertical divider">
            Or
        </div>
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
<style>
</style>