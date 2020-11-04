<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list dense nav>
        <v-list-item v-for="link in links" :key="link.title" :to="link.url">
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-tabs>
          <v-tab
            class="hidden-sm-and-down"
            v-for="link in links"
            :key="link.title"
            :to="link.url"
            >{{ link.title }}</v-tab
          >
        </v-tabs>
      </v-app-bar>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: 'Главная', url: '/' },
        { title: 'История', url: '/history' },
      ],
    };
  },
};
</script>
