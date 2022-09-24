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
            <q-form class="row q-col-gutter-xl" @submit.stop="onSubmit">
              <div class="col">
                <q-input outlined v-model="inputEmailText" label="participant email Id"
                  :rules="[ (val, rules) => rules.email(val) || 'Please enter a valid email address' ]" />
              </div>
              <div class="col">
                <q-btn size="lg" label="Invite Participant" v-model="inputEmailText" type="email" color="primary"
                  :disabled="(inputEmailText?.length > 2) ? false : true" />
              </div>
            </q-form>

            <div class="q-py-xl">
              <q-table title="Workshop Attendes List" :rows="rows" :columns="columns" row-key="name"
                :pagination="pagination">
                <template v-slot:body-cell-calories="props">
                  <q-td :props="props">
                    <q-icon v-if="props.value" name="done_outline" size="2em" color="positive" />
                    <q-icon v-else name="dangerous" size="2em"  color="negative"/>
                  </q-td>
                </template>
              </q-table>
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
const inputEmailText = ref(null)
const pagination = {
  rowsPerPage: 30
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
const rows = ref([
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
])

const onSubmit = () => {
  console.log(inputEmailText.value)
  const newEntry = {
    name: inputEmailText.value,
    calories: false,
  }
  const newRows = rows.value?.push(newEntry)
  console.dir(newRows)
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 420px
</style>
