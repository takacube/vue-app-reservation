import { createApp } from 'vue'
import App from './App.vue'
import HeaderSet from './HeaderSet.vue'
import MainBody from './MainBody.vue'
createApp(App).mount('#app')
createApp(HeaderSet).mount('#header')
createApp(MainBody).mount('#main')
