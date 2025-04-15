import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './router/index.js';
import cors from 'cors';

import { createApp } from 'vue';
import App from './App.vue';


const app = createApp(App)
app.use(router);
app.use(Toast);
app.use(cors({ origin: true }));

app.mount('#app');
