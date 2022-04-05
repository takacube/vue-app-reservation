<template>
    {{ date }}
    <form>
        <div id="parent" class="calendar">
            <table>
                <tr>
                    <td>
                        月
                    </td>
                    <td>
                        火
                    </td>
                    <td>
                        水
                    </td>
                    <td>
                        木
                    </td>
                    <td>
                        金
                    </td>
                    <td>
                        土
                    </td>
                    <td>
                        日
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="fruits" value="1" id="date1" v-model="checkedDates">1
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="2" id="appple" v-model="checkedDates">2
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="3" id="appple" v-model="checkedDates">3
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="4" id="appple" v-model="checkedDates">4
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="5" id="appple" v-model="checkedDates">5
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="6" id="appple" v-model="checkedDates">6
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="7" id="appple" v-model="checkedDates">7
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="fruits" value="8" id="appple" v-model="checkedDates">8
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="9" id="appple" v-model="checkedDates">9
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="10" id="appple" v-model="checkedDates">10
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="11" id="appple" v-model="checkedDates">11
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="12" id="appple" v-model="checkedDates">12
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="13" id="appple" v-model="checkedDates">13
                    </td>
                    <td>
                        <input type="checkbox" name="fruits" value="14" id="appple" v-model="checkedDates">14
                    </td>
                </tr>
            </table>
        </div>
        <div>
            {{ checkedDates }}
            <button type="submit" value="リクエストを送信" @click="getReservation">詳細設定</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'Calendar',
    data() {
        return {
        date: new Date(),
        checkedDates: []
        };
    },
    computed: {
        createCalendar: function() {
            const today = new Date();
            console.log(today)
        },
    },
    methods: {
        getReservation: function(event) {
            this.$router.push('/description')
        }
    }
}
</script>

<style>
</style>