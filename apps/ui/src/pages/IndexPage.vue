<template>

  <div class="q-py-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="home" icon="home" to="/" />
      <!-- <q-breadcrumbs-el label="Docs" icon="widgets" to="/start/pick-quasar-flavour" />
      <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" to="/vue-components/breadcrumbs" />
      <q-breadcrumbs-el label="Build" icon="build" /> -->
    </q-breadcrumbs>
  </div>

  <h6>Recently used workshops</h6>

  <div class="q-pa-md row items-start q-gutter-md">
    <d-card v-for="index in 3" :key="index" :title="index" :body1="body1" :body2="lorem" />
  </div>

  <h3>API</h3>
  <div>{{ endpoint }}</div>
  <q-btn label="loadData" @click="loadData" />
  <p>{{ data }}</p>

</template>

<script setup lang="ts">
import { api } from 'boot/axios'
import { Meta } from 'components/models'
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import DCard from '../components/DCard.vue'

const meta = ref<Meta>({
  totalCount: 1200,
})

const endpoint = ref(process.env.API)
const $q = useQuasar()
const data = ref(null)

function loadData() {
  api.get('/')
    .then((response) => {
      data.value = response.data
    })
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'top',
        message: 'Loading failed',
        icon: 'report_problem'
      })
    })
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const body1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 410px
</style>
