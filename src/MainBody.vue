<template>
    <CalendarSet/>
</template>

<script>
import CalendarSet from './components/CalendarView.vue'
export default {
    name: 'MainBody',
    components: {
        CalendarSet
    },
    data() {
        return {
        date: new Date(),
        };
    },
}
</script>