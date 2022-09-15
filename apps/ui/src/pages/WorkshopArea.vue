<template>
  <div class="q-py-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="home" icon="home" to="/" />
      <!-- <q-breadcrumbs-el label="Docs" icon="widgets" to="/start/pick-quasar-flavour" />
      <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" to="/vue-components/breadcrumbs" /> -->
      <q-breadcrumbs-el label="workshop" icon="build" />
    </q-breadcrumbs>
  </div>

  <q-tabs v-model="tab" inline-label>
    <q-tab name="mails" icon="mail" label="Overview" />
    <q-tab name="alarms" icon="alarm" label="Participant Handling" />
    <q-tab name="movies" icon="movie" label="Stakeholder Handling" />
    <q-tab name="home" icon="home" label="Agenda" />
    <q-tab name="lock" icon="lock" label="Q & A" />
  </q-tabs>

  <h3>WOrkshop Page</h3>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-purple text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-teal text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-actions vertical align="right">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-grey-8 text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-actions vertical align="center">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const tab = ref('mails')
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 420px
</style>