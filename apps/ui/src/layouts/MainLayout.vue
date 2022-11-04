<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-dark">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>{{ APP_NAME }}</q-toolbar-title>
        <div>user | notification</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item class="justify-around">
          <!-- <q-icon name="img:/assets/dility_logo_text_pink.svg" size="8em" /> -->
          <q-icon name="img:/icons/Logo-written.svg" size="12em" />
        </q-item>

        <q-item-label header>--workshop switcher radio here--</q-item-label>
        <q-separator />
        <q-item-label header>Primary menu </q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />

        <div class="bottom">
          <q-item-label header>Secondary menu </q-item-label>
          <EssentialLink v-for="link in secondaryLinks" :key="link.title" v-bind="link" />
        </div>

      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="q-px-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'
import { APP_NAME } from '../constants'

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Homebase',
    caption: 'home page and common view',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Workshop',
    caption: 'workshop area',
    icon: 'home_repair_service',
    link: '/workshop',
    // isExternal: true
  },
]

const secondaryLinks: EssentialLinkProps[] = [
  {
    icon: 'settings',
    title: 'Settings',
    caption: 'Settings',
    link: '/'
    // separator: false
  },
  {
    title: 'Integration',
    caption: 'dility/twitter',
    icon: 'rss_feed',
    link: '/'
  },
  {
    icon: 'feedback',
    title: 'Send Feedback',
    caption: 'Send Feedback',
    link: '/'
    // separator: false
  },
  {
    icon: 'help',
    // iconColor: 'primary',
    title: 'Help',
    caption: 'Help',
    link: '#'
    // separator: false
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped lang="sass">
.bottom
  position: fixed
  bottom: 0
</style>
