import { createApp } from 'vue';
import App from './App.vue';

// eslint-disable-next-line import/extensions
import { store, key } from './store/index';

createApp(App)
  .use(store, key)
  .mount('#app');
