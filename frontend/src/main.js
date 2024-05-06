import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

// Set up global base URL for Axios
axios.defaults.baseURL = 'http://localhost:3000'; // Adjust URL according to your backend server address

const app = createApp(App);

// Attach Axios instance to Vue prototype, making it available globally
app.config.globalProperties.$axios = axios;

app.mount('#app');
