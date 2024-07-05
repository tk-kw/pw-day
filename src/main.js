import { createApp } from 'vue'
import './assets/style.css'
import './assets/animation.css'
import lazyLoading from './utils/lazy-loading';
import App from './App.vue'


createApp(App).mount('#app')
lazyLoading();