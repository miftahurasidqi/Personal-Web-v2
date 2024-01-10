import { MotionPlugin } from "@vueuse/motion";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
// import router from "./router";
// global componets
// import NavBar from "./components/navbar/NavBar.vue";
const app = createApp(App);
// app.use(router);
// use global componets
// app.component("NavBar", NavBar);

app.use(MotionPlugin);
app.mount("#app");
