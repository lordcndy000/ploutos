<template>
  <div class="navigation">
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Pluotos</span>
        <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
      class="navigation-wrapper"
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <router-link
          class="navigation-item-wrapper"
          active-class="navigation-item-wrapper--active"
          v-bind:to="`${item.route}`"
          v-for="item in items"
          :key="item.title"
          >
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="navigation-item">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      drawer: null,
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          route: '/admin/dashboard'
        },
        {
          title: 'Treasury',
          icon: 'mdi-treasure-chest',
          route: '/admin/treasury'
        }
      ],
      mini: false,
      right: null
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  &-item-wrapper {
    display: block;
    position: relative;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
    &--active,
    &:hover {
      background-color: $primary;
    }
    .navigation-item {
      color: #fff;
      display: flex;
      position: relative;
    }
  }
}
</style>
