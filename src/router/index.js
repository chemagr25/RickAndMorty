import { createRouter, createWebHashHistory } from "vue-router";

import CharactersAll from "@/views/CharactersAll.vue";
import LocationsAll from "@/views/LocationsAll.vue";
import CharacterDetails from "@/views/CharacterDetails.vue";

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
    path: "/characters/:id",
    name: "character-details",
    component: CharacterDetails,
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
