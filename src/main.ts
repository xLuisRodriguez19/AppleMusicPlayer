import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messages from './i18n/index'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: messages
})

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
