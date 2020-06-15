<template>
  <div id="app">
    <div class="container mx-auto">
      <div class="flex flex-row min-h-screen">
        <div class="sidebar-wrapper">
          <div class="sidebar h-screen overflow-hidden flex flex-col">
              <div class="logo flex flex-row py-8 items-center">
                <a href="#" class="logo block py-5 flex flex-col">
                <img alt="Vue logo" src="@/assets/logo.png" class='w-12'/>
                </a>
                <h1 class='text-3xl ml-3 text-gray-700'>KAIT Docs</h1>
              </div>
              <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
                <nav class='overflow-auto'>
                  <div class="nav-content overflow-hidden">
                    <ul class='menu'>
                      <li v-for="(sidebarItem,index) in sidebarItems" :key="index" class='menu-item mt-2 '>
                        <router-link to="#" class='font-semibold text-gray-700 hover:ml-1  duration-150 block'>{{ sidebarItem.text }}</router-link>
                        <ul class="submenu" v-if="sidebarItem.submenu.length > 0" >
                          <li v-for="(submenu, indexsub) in sidebarItem.submenu" :key="indexsub" class='submenu-item py-3'>
                            <router-link :to="submenu.url" class='font-light pl-5 hover:ml-1 block'>{{submenu.text}}</router-link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
            </VuePerfectScrollbar>
          </div>
        </div>
        <div class="main-content pl-16 flex flex-col flex-1">
          <div class="content-header my-5">
            <input type="text" class='border-b px-4 py-2 w-full' placeholder="Search..">
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sidebarMenuItems from "./sidebarItems.json";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  mounted() {
    console.log(this.sidebarItems);
  },
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      sidebarItems: sidebarMenuItems,
      settings: {
        maxScrollbarLength: 60
      }
    }
  }
}
</script>