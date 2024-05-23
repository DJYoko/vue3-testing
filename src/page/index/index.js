import { createApp } from 'vue';
import rootComponent from './App.vue';
import HeaderLoginInfo from '@/components/HeaderLoginInfo';

createApp({
  components: { HeaderLoginInfo },
}).mount('#header');

createApp({
  components: { rootComponent },
}).mount('#app');
