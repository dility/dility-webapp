<template>
  <div class="q-py-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="home" icon="home" to="/" />
      <q-breadcrumbs-el label="workshop" icon="build" />
    </q-breadcrumbs>
  </div>

  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card flat>
        <q-tabs v-model="tab" class="text-grey" active-color="primary" indicator-color="primary" align="justify">
          <q-tab name="overview" label="overview" />
          <q-tab name="participants" label="participants" />
          <q-tab name="stakeholders" label="stakeholders" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="overview">
            <div class="text-h6">overview</div>
            {{ lorem }}
          </q-tab-panel>
          <q-tab-panel name="participants">
            <div class="row">
              <h4>Participant Handling</h4>
            </div>
            <div class="row q-col-gutter-xl">
              <div class="col">
                <q-input outlined v-model="inputEmailText" label="participant email Id" />
              </div>
              <div class="col">
                <q-btn outline size="lg" label="Invite Participant" color="primary" @click="inviteNewParticipant" />
              </div>
            </div>

            <div class="q-py-xl">
              <q-table title="Workshop Attendes List" :rows="rows" :columns="columns" row-key="name" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="stakeholders">
            <div class="text-h6">stakeholders</div>
            {{ lorem }}
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const tab = ref('participants')
const inputEmailText = ref('')

const inviteNewParticipant = () => {
  console.log(inputEmailText.value)
}

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Email ID',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'invite accepted', field: 'calories', sortable: true },
]

// TODO: featch from database / backend. Append when new attende is added
const rows = [
  {
    name: 'john.doe@gmail.com',
    calories: true,
  },
  {
    name: 'abc@xyz.com',
    calories: false,
  },
  {
    name: 'pqr@email.com',
    calories: true,
  },
]
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 420px
</style>
