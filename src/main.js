import './assets/main.css';

// de import bootstrap va font awesome
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import router from "./router";
createApp(App).use(router).mount("#app");


