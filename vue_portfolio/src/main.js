import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Base from "./CSS/Base.vue";
import MainButton from "./components/MainButton.vue";

const app = createApp(App);
app.use(router);
app.component("base-css", Base);
app.component("main-btn", MainButton);
app.mount("#app");
