import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: () => import('./../views/Layouts/Docs.vue'),
    children: [
      {
        path: "/docs/installation",
        component: () =>
          import("./../views/GettingStarted/Installation.vue"),
      },
      {
        path: "/docs/laravel-integration",
        component: () => import("./../views/Integration/Laravel.vue"),
      },
      {
        path: "/components/alert",
        name: "components.alert",
        component: () => import("../views/Components/ComponentAlert.vue"),
        meta: {
          title: "Alert - Kait Admin",
        },
      },
      {
        path: "/components/avatar",
        name: "components.avatar",
        component: () => import("../views/Components/ComponentAvatar.vue"),
        meta: {
          title: "Avatar - Kait Admin",
        },
      },
      {
        path: "/components/buttons",
        name: "components.buttons",
        component: () => import("../views/Components/ComponentButton.vue"),
        meta: {
          title: "Buttons - Kait Admin",
        },
      },
      {
        path: "/components/badge",
        name: "components.badge",
        component: () => import("../views/Components/ComponentBadge.vue"),
        meta: {
          title: "Badge - Kait Admin",
        },
      },
      {
        path: "/components/breadcrumb",
        name: "components.breadcrumb",
        component: () => import("../views/Components/ComponentBreadcrumb.vue"),
        meta: {
          title: "Breadcrumb - Kait Admin",
        },
      },
      {
        path: "/components/card",
        name: "components.card",
        component: () => import("../views/Components/ComponentCard.vue"),
      },
      {
        path: "/components/checkbox",
        name: "components.checkbox",
        component: () => import("../views/Components/ComponentCheckbox.vue"),
      },
      {
        path: "/components/dropdown",
        name: "components.dropdown",
        component: () => import("../views/Components/ComponentDropdown.vue"),
      },
      {
        path: "/components/input",
        name: "components.input",
        component: () => import("../views/Components/ComponentInput.vue"),
      },
      {
        path: "/components/modal",
        name: "components.modal",
        component: () => import("../views/Components/ComponentModal.vue"),
      },
      {
        path: "/components/pagination",
        name: "components.pagination",
        component: () => import("../views/Components/ComponentPagination.vue"),
      },
      {
        path: "/components/progress",
        name: "components.progress",
        component: () => import("../views/Components/ComponentProgress.vue"),
      },
      {
        path: "/components/select",
        name: "components.select",
        component: () => import("../views/Components/ComponentSelect.vue"),
      },
      {
        path: "/components/radio",
        name: "components.radio",
        component: () => import("../views/Components/ComponentRadio.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
