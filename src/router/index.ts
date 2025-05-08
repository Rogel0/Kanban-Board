import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import KanbanBoard from "@/views/KanbanBoard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Kanban",
      name: "kanban",
      component: KanbanBoard,
    },
  ],
});

export default router;
