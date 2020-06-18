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
        path: "/docs/components/alert",
        name: "components.alert",
        component: () => import("../views/Components/ComponentAlert.vue"),
        meta: {
          title: "Alert - Kait Admin",
        },
      },
      {
        path: "/docs/components/avatar",
        name: "components.avatar",
        component: () => import("../views/Components/ComponentAvatar.vue"),
        meta: {
          title: "Avatar - Kait Admin",
        },
      },
      {
        path: "/docs/components/buttons",
        name: "components.buttons",
        component: () => import("../views/Components/ComponentButton.vue"),
        meta: {
          title: "Buttons - Kait Admin",
        },
      },
      {
        path: "/docs/components/badge",
        name: "components.badge",
        component: () => import("../views/Components/ComponentBadge.vue"),
        meta: {
          title: "Badge - Kait Admin",
        },
      },
      {
        path: "/docs/components/breadcrumb",
        name: "components.breadcrumb",
        component: () => import("../views/Components/ComponentBreadcrumb.vue"),
        meta: {
          title: "Breadcrumb - Kait Admin",
        },
      },
      {
        path: "/docs/components/card",
        name: "components.card",
        component: () => import("../views/Components/ComponentCard.vue"),
      },
      {
        path: "/docs/components/checkbox",
        name: "components.checkbox",
        component: () => import("../views/Components/ComponentCheckbox.vue"),
      },
      {
        path: "/docs/components/dropdown",
        name: "components.dropdown",
        component: () => import("../views/Components/ComponentDropdown.vue"),
      },
      {
        path: "/docs/components/input",
        name: "components.input",
        component: () => import("../views/Components/ComponentInput.vue"),
      },
      {
        path: "/docs/components/modal",
        name: "components.modal",
        component: () => import("../views/Components/ComponentModal.vue"),
      },
      {
        path: "/docs/components/pagination",
        name: "components.pagination",
        component: () => import("../views/Components/ComponentPagination.vue"),
      },
      {
        path: "/docs/components/progress",
        name: "components.progress",
        component: () => import("../views/Components/ComponentProgress.vue"),
      },
      {
        path: "/docs/components/select",
        name: "components.select",
        component: () => import("../views/Components/ComponentSelect.vue"),
      },
      {
        path: "/docs/components/radio",
        name: "components.radio",
        component: () => import("../views/Components/ComponentRadio.vue"),
      },
    ],
  },
  {
    path:"*",
    component: () => import('./../views/Errors/404.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
