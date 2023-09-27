const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/WelcomePage.vue"),
        name: "welcome",
      },
      {
        path: "/home",
        component: () => import("pages/IndexPage.vue"),
        name: "explore",
      },
      {
        path: "/barber",
        component: () => import("pages/BarberDetail.vue"),
        name: "barber",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
