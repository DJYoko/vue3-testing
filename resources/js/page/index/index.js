import { createApp } from 'vue'
import { createPinia } from 'pinia'
import rootComponent from '@/vue/page/index.vue'
import HeaderLoginInfo from '@/vue/layout/HeaderLoginInfo'
import IncrementBox from '@/vue/project/IncrementBox'

const _piniaInstance = createPinia()

const _header = createApp({
    components: { HeaderLoginInfo },
})
_header.use(_piniaInstance)
_header.mount('#header')

const _page = createApp({
    components: { rootComponent },
})
_page.use(_piniaInstance)
_page.mount('#app')

const incrementBox01 = createApp({
    components: { IncrementBox },
})
incrementBox01.use(_piniaInstance)
incrementBox01.mount('#incrementBox01')

const incrementBox02 = createApp({
    components: { IncrementBox },
})
incrementBox02.use(_piniaInstance)
incrementBox02.mount('#incrementBox02')
