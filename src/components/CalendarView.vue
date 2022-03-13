<template>
    {{ date }}
    <form>
        <div class="d-calendar">
            <div class="d-header">
                <i id="d-previous"></i>
                <p>
                    <span class="d-month">march</span>
                    <span class="d-year">22</span>
                </p>
                <i id="d-next"></i>
            </div>
            <div class="d-year-picker">
                <div data-year="-5">'17</div>
                <div data-year="-4">'18</div>
                <div data-year="-3">'19</div>
                <div data-year="-2">'20</div>
                <div data-year="-1">'21</div>
                <div data-year="0" class="current">'22</div>
                <div data-year="1">'23</div>
                <div data-year="2">'24</div>
                <div data-year="3">'25</div>
                <div data-year="4">'26</div>
                <div data-year="5">'27</div>
            </div>
            <div class="d-weekdays">
                <div class="d-week">
                    <div class="week-component">
                        <p>日</p>
                    </div>
                    <div class="week-component">
                        <p>月</p>
                    </div>
                    <div class="week-component">
                        <p>火</p>
                    </div>
                    <div class="week-component">
                        <p>水</p>
                    </div>
                    <div class="week-component">
                        <p>木</p>
                    </div>
                    <div class="week-component">
                        <p>金</p>
                    </div>
                    <div class="week-component">
                        <p>土</p>
                    </div>
                </div>
            </div>
            <div class="d-tables">
                <div class="d-table" data-month="march">
                    <input type="checkbox" id="1-0-d-day-0" data-date="2022-02-26T15:00:00.000Z"><label for="1-0-d-day-0" class="prev"><text>27</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-1" data-date="2022-02-27T15:00:00.000Z"><label for="1-0-d-day-1" class="prev"><text>28</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-2" data-date="2022-02-28T15:00:00.000Z"><label for="1-0-d-day-2" class=""><text>1</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-3" data-date="2022-03-01T15:00:00.000Z"><label for="1-0-d-day-3" class=""><text>2</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-4" data-date="2022-03-02T15:00:00.000Z"><label for="1-0-d-day-4" class=""><text>3</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-5" data-date="2022-03-03T15:00:00.000Z"><label for="1-0-d-day-5" class=""><text>4</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-6" data-date="2022-03-04T15:00:00.000Z"><label for="1-0-d-day-6" class=""><text>5</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-7" data-date="2022-03-05T15:00:00.000Z"><label for="1-0-d-day-7" class=""><text>6</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-8" data-date="2022-03-06T15:00:00.000Z"><label for="1-0-d-day-8" class=""><text>7</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-9" data-date="2022-03-07T15:00:00.000Z"><label for="1-0-d-day-9" class=""><text>8</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-10" data-date="2022-03-08T15:00:00.000Z"><label for="1-0-d-day-10" class=""><text>9</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-11" data-date="2022-03-09T15:00:00.000Z"><label for="1-0-d-day-11" class=""><text>10</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-12" data-date="2022-03-10T15:00:00.000Z"><label for="1-0-d-day-12" class=""><text>11</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-13" data-date="2022-03-11T15:00:00.000Z"><label for="1-0-d-day-13" class=""><text>12</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-14" data-date="2022-03-12T15:00:00.000Z"><label for="1-0-d-day-14" class="today"><text>13</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-15" data-date="2022-03-13T15:00:00.000Z"><label for="1-0-d-day-15" class=""><text>14</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-16" data-date="2022-03-14T15:00:00.000Z"><label for="1-0-d-day-16" class=""><text>15</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-17" data-date="2022-03-15T15:00:00.000Z"><label for="1-0-d-day-17" class=""><text>16</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-18" data-date="2022-03-16T15:00:00.000Z"><label for="1-0-d-day-18" class=""><text>17</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-19" data-date="2022-03-17T15:00:00.000Z"><label for="1-0-d-day-19" class=""><text>18</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-20" data-date="2022-03-18T15:00:00.000Z"><label for="1-0-d-day-20" class=""><text>19</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-21" data-date="2022-03-19T15:00:00.000Z"><label for="1-0-d-day-21" class=""><text>20</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-22" data-date="2022-03-20T15:00:00.000Z"><label for="1-0-d-day-22" class=""><text>21</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-23" data-date="2022-03-21T15:00:00.000Z"><label for="1-0-d-day-23" class=""><text>22</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-24" data-date="2022-03-22T15:00:00.000Z"><label for="1-0-d-day-24" class=""><text>23</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-25" data-date="2022-03-23T15:00:00.000Z"><label for="1-0-d-day-25" class=""><text>24</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-26" data-date="2022-03-24T15:00:00.000Z"><label for="1-0-d-day-26" class=""><text>25</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-27" data-date="2022-03-25T15:00:00.000Z"><label for="1-0-d-day-27" class=""><text>26</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-28" data-date="2022-03-26T15:00:00.000Z"><label for="1-0-d-day-28" class=""><text>27</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-29" data-date="2022-03-27T15:00:00.000Z"><label for="1-0-d-day-29" class=""><text>28</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-30" data-date="2022-03-28T15:00:00.000Z"><label for="1-0-d-day-30" class=""><text>29</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-31" data-date="2022-03-29T15:00:00.000Z"><label for="1-0-d-day-31" class=""><text>30</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-32" data-date="2022-03-30T15:00:00.000Z"><label for="1-0-d-day-32" class=""><text>31</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-33" data-date="2022-03-31T15:00:00.000Z"><label for="1-0-d-day-33" class="next"><text>1</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-34" data-date="2022-04-01T15:00:00.000Z"><label for="1-0-d-day-34" class="next"><text>2</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-35" data-date="2022-04-02T15:00:00.000Z"><label for="1-0-d-day-35" class="next"><text>3</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-36" data-date="2022-04-03T15:00:00.000Z"><label for="1-0-d-day-36" class="next"><text>4</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-37" data-date="2022-04-04T15:00:00.000Z"><label for="1-0-d-day-37" class="next"><text>5</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-38" data-date="2022-04-05T15:00:00.000Z"><label for="1-0-d-day-38" class="next"><text>6</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-39" data-date="2022-04-06T15:00:00.000Z"><label for="1-0-d-day-39" class="next"><text>7</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-40" data-date="2022-04-07T15:00:00.000Z"><label for="1-0-d-day-40" class="next"><text>8</text><span class="d-tooltip"></span></label>
                    <input type="checkbox" id="1-0-d-day-41" data-date="2022-04-08T15:00:00.000Z"><label for="1-0-d-day-41" class="next"><text>9</text><span class="d-tooltip"></span></label>
                </div>
            </div>
        </div>
    </form>
</template>

<script>

export default {
    name: 'CalendarSet',
    data() {
        return {
        date: new Date(),
        };
    },
}
</script>

<style>
    .d-calendar {
        margin: 0;
        background-color: #fff;
        box-shadow: 0 2px 10px -2px rgb(0 0 0 / 60%);
        font-size: 20px;
        width: 100%;
        max-height: 560px;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }
    #Datepickk {
        position: fixed;
        top: 0;
        left: 0;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        z-index: 999;
        width: 100%;
        height: 100%;
        font-family: Raleway,'Open Sans',Arial;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .d-week {
        background-color: #E95A5A;
        color: #fff;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        justify-content: space-between
    }
    .d-weekdays {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
    .d-year-picker {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        background-color: rgba(27,54,63,.9);
        height: 0;
        opacity: 1;
        pointer-events: none;
        transition: height .2s ease;
    }

    #Datepickk {
        position: fixed;
        top: 0;
        left: 0;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        z-index: 999;
        width: 100%;
        height: 100%;
        font-family: Raleway,'Open Sans',Arial;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .d-table {
        width: 100%;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .week-component {
        size: 20px;
        margin-right: 20px;
        margin-left: 20px;
    }
    .d-tooltip {
        position: absolute;
        background-color: #1B363F;
        color: #FFF;
        padding: 7px;
        font-size: .7em;
        z-index: 13;
        text-align: center;
        top: 100%;
        left: 50%;
        -webkit-transform: translate(-50%,-5px);
        transform: translate(-50%,-5px);
        display: none;
    }
    .d-table input+label.next, #Datepickk .d-table input+label.prev {
        color: #ccc;
    }
    .d-table input+label {
        -webkit-flex-basis: calc(100% / 7);
        flex-basis: calc(100% / 7);
        -ms-flex-preferred-size: 14.28%;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color .2s ease, background .2s ease,color .2s ease;
        position: relative;
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
    }
</style>



