import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";
import HomePage from "@/components/HomePage.vue";

const routes = [
    {
        path: "/",
        name: "Login-page",
        component: LoginPage,
        meta: {public: true}
    },
    {
        path: "/home-page",
        name: "Home-page",
        component: HomePage,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;