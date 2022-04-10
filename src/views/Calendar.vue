<template>
    <h2>Calendar{{ currentDate }}</h2>
        <div class="week-title">
            <div v-for="column in weekList" :key="column.item" class="each-week">
                {{column.item}}
            </div>
        </div>
        <div class="calendar-ui">
            <div v-for="(week, index) in calendars" :key="index" class="ui buttons capcher-calendar">
                <form class="form-ui" v-for="(day, index) in week" :key="index">
                    <button v-bind:id="{ active: isActive}" class="ui button button-1" @click="modalOpen=day.date;">{{ day.date }}</button>
                </form>
            </div>
        </div>
    <teleport to="body">
        <div v-if="modalOpen" class="modal">
            <div class="modalButton">
                <h3>{{modalOpen}}日</h3>
                <form class="ui form">
                    <div class="field">
                        <label>開始時間</label>
                        <input v-model="startTime" type="time" name="first-name">
                    </div>
                    <div class="field">
                        <label>終了時間</label>
                        <input v-model="endTime" type="time" name="first-name">
                    </div>
                    <div class="field">
                        <label>目的地</label>
                        <input v-model="destination" type="text" name="last-name" placeholder="目的地を入力してください">
                    </div>
                    <div class="field">
                        <label>ご要望があれば入力ください</label>
                        <input v-model="description" type="text" name="last-name">
                    </div>

                    <button class="ui button" @click="modalOpen=false">閉じる</button>
                    <button class="blue ui button" type="submit" @click="addToList(modalOpen)">　完了　</button>
                </form>
            </div>
        </div>
    </teleport>
    <teleport to="body" :scrollable=true>
        <div v-if="checkModalOpen" class="modal">
            <div class="modalButton scroll">
                <form class="ui form">
                    <div v-for="item in JSON.parse(this.$cookies.get('reservationAllList'))" :key="item.destination">
                        <a class="ui teal tag label">{{item.date}}</a>
                        <div class="field">
                            <label>開始時間</label>
                            <input type="time" name="first-name" v-bind:value="item.startTime">
                            <label>終了時間</label>
                            <input type="time" name="first-name" v-bind:value="item.endTime">
                            <label>目的地</label>
                            <input type="text" name="last-name" placeholder="目的地を入力してください" v-bind:value="item.destination">
                            <label>ご要望</label>
                            <p>{{item.description}}</p>
                        </div>
                    </div>
                    <button class="ui button" @click="checkModalOpen=false">戻る</button>
                    <button class="blue ui button" type="submit" @click="finishReservation()">　予約を確定　</button>
                </form>
            </div>
        </div>
    </teleport>
    <div class="submit-button-div">
        <button class="massive blue ui button submit-button" @click="checkModalOpen = true;">
            予約確認へ
        </button>
    </div>
</template>
<script>
import moment from "moment"
export default {
    name: 'Calendar',
    data() {
        return {
            currentDate: moment(),
            modalOpen: false,
            weekList: [{item: "日"}, {item: '月'}, {item: '火'}, {item: '水'}, {item: '木'}, {item: '金'}, {item: '土'}],
            pushedDate: [],
            isActive: true,
            checkModalOpen: false,
            reservationList: [],
        };
    },
    methods: {
        getStartDate() {
            let date = moment(this.currentDate);
            date.startOf("month");
            const youbiNum = date.day();
            return date.subtract(youbiNum, "days");
        },
        getEndDate() {
            let date = moment(this.currentDate);
            date.endOf("month");
            const youbiNum = date.day();
            return date.add(6 - youbiNum, "days");
        },
        getCalendar() {
            let startDate = this.getStartDate();
            const endDate = this.getEndDate();
            const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);

            let calendars = [];
            for (let week = 0; week < weekNumber; week++) {
                let weekRow = [];
                for (let day = 0;  day < 7; day++) {
                    weekRow.push({
                        date: startDate.get("date"),
                    });
                    startDate.add(1, "days");
                }
                calendars.push(weekRow);
            }
            return calendars;
        },
        showModal() {
            this.$router.push('./')
        },
        addToList(selectedDate) {
            const list = { date: selectedDate, startTime: this.startTime, endTime: this.endTime, destination: this.destination, description: this.description}
            let existedList = []

            if(this.$cookies.isKey("reservationAllList")　&& this.$cookies.get("reservationAllList").length > 0){
                existedList = JSON.parse(this.$cookies.get("reservationAllList"))
                existedList.push(list)
            } else {
                existedList.push(list)
            }
            this.$cookies.set("reservationAllList", JSON.stringify(existedList))
            /*this.reservationList.push(list)*/
        },
        finishReservation() {
            this.$cookies.remove("reservationAllList")
            this.$router.push('./description')
        }
    },
    computed: {
        calendars() {
            return this.getCalendar();
        }
    }
}
</script>

<style scoped>
    .modal {
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background-color: rgba(0,0,0,.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .modal div {
        display: fix;
        justify-content: center;
        width: 400px;
        padding: 20px;
        border-radius: 20px 20px 20px 20px;
    }
    .modalButton {
        background: rgb(255, 255, 255);
        align-items: center;
    }
    .field{
        max-width: 100%;
    }
    .capcher-calendar {
        background: rgb(223, 223, 223);
        margin: 0 auto;
        width: 80%;
        display: flex;
        justify-content: space-between;
    }
    .calendar-ui {
        max-width: 100%;
        width: 100%;
        /*padding: 1.5rem 2rem;*/
        padding-right: 0px;
        padding-left: 0px;
        margin: 0 auto;
        text-align: justify;
    }
    .button-1 {
        background-color: rgb(234, 234, 234);
        color: white;
        margin: 0%;
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
        color: rgb(0, 0, 0);
    }
    .form-ui {
        margin: 0%;
        padding: 0;
        width: 100%;
    }
    .week-title {
        display: flex;
        margin: 0 auto;
        width: 80%;
        padding: 0;
        justify-content: space-between;
    }
    .each-week {
        text-align: center;
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: rgb(153, 239, 236);
    }
    #calendar-1 {
        background-color: red;
    }
    .active {
        background-color: red;
    }
    .submit-button-div {
        width: 80%;
        margin: 0 auto;
        text-align: right;
    }
    .submit-button {
        margin-top: 20px;
        text-align: right;
        margin-left: auto;
        margin-right: 0;
    }
    .scroll{
        height: 80%;
        overflow: auto;
    }
</style>