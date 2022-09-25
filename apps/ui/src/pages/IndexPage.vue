<template>

  <div class="q-py-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="home" icon="home" to="/" />
      <!-- <q-breadcrumbs-el label="Docs" icon="widgets" to="/start/pick-quasar-flavour" />
      <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" to="/vue-components/breadcrumbs" />
      <q-breadcrumbs-el label="Build" icon="build" /> -->
    </q-breadcrumbs>
  </div>

  <h3>Home Page</h3>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>

  <h3>API</h3>
  <q-btn label="loadData" @click="loadData" />
  <p>{{ data }}</p>

  </div>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

const meta = ref<Meta>({
  totalCount: 1200,
})

// const api = ref(process.env.API)
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
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 410px
</style>
