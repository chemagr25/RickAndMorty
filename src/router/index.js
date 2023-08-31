import { createRouter, createWebHashHistory } from "vue-router";

import CharactersAll from "@/views/CharactersAll.vue";
import LocationsAll from "@/views/LocationsAll.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "all-characters" },
  },
  {
    path: "/characters",
    name: "all-characters",
    component: CharactersAll,
  },
  {
    path: "/locations",
    name: "all-locations",
    component: LocationsAll,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
