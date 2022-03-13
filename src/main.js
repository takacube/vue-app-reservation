import { createApp } from 'vue'
import HeaderSet from './HeaderSet.vue'
import MainBody from './MainBody.vue'
createApp(HeaderSet).mount('#header')
createApp(MainBody).mount('#main')
