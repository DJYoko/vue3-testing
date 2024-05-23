import { createApp } from 'vue';
import App from './App.vue';

const pageInstance = createApp({
  components: { pageComponent: App },
});

pageInstance.mount('#app');
