import { createApp } from 'vue';
import App from './App.vue';
import SectionHeader from './components/ui/SectionHeader.vue';

import "bootstrap/dist/css/bootstrap.css";
import "./assets/sass/theme.scss";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);
app.component("SectionHeader", SectionHeader);
app.mount('#app');