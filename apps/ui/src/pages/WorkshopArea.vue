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
          <q-tab name="agenda" label="agenda" />
          <q-tab name="methods" label="methods" />
          <q-tab name="qa" label="Q&A" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="overview">
            <div class="text-h6">overview</div>

            <div class="q-pa-md row items-start q-gutter-md">
              <d-card v-for="index in 2" :key="index" title="Demo Workshop" :body1="body1" :body2="lorem" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="participants">
            <div>
              <h5>Participant Handling</h5>
              <p>Invite participants to the workshop. You can add people either directly from computer by typing theor
                name or invite external people via email</p><br />
            </div>
            <q-form class="row q-col-gutter-xl" @submit.stop="onSubmit">
              <div class="col">
                <q-input outlined v-model="inputEmailText" label="participant email Id"
                  :rules="[(val, rules) => rules.email(val) || 'Please enter a valid email address']">
                  <template v-slot:append>
                    <q-icon name="close" @click="inputEmailText = null" class="cursor-pointer" />
                  </template>
                </q-input>
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
                    <q-icon v-if="props.value" name="check_circle" size="2em" color="positive" />
                    <q-icon v-else name="dangerous" size="2em" color="negative" />
                  </q-td>
                </template>
                <template v-slot:body-cell-remove="props">
                  <q-td :props="props">
                    <q-btn round color="negative" size="xs" @click="deleteAttendee(props.key)" icon="delete_outline" />
                  </q-td>
                </template>
              </q-table>
            </div>
            <div>
              <h5>Schedule Invites</h5>
              <p>Here you can schedule invites to the participants</p>
            </div>
          </q-tab-panel>

          <q-tab-panel name="stakeholders">
            <div class="text-h6">stakeholders</div>
            <p>Add stakeholder</p>
            <p>Stakeholder list</p>
          </q-tab-panel>

          <q-tab-panel name="agenda">
            <div class="text-h6">agenda</div>
            <div>help text</div>
            <div>Add new agenda item</div>
            <div>agenda list</div>
          </q-tab-panel>

          <q-tab-panel name="methods">
            <d-methods />
          </q-tab-panel>

          <q-tab-panel name="qa">
            <div class="text-h6">qa</div>
            <div>search questions</div>
            <div>Ask New questions</div>
            <div>View all questions</div>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar'
import { api } from 'boot/axios'
import DCard from '../components/DCard.vue'
import DMethods from '../components/DMethods.vue'

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
  { name: 'remove', align: 'center', label: 'remove', field: 'remove', sortable: true },
]

// TODO: featch from database / backend. Append when new attende is added
const rows = ref([
  {
    name: 'john.doe@gmail.com',
    calories: true,
    remove: true,
  },
  {
    name: 'abc@xyz.com',
    calories: false,
    remove: true,
  },
  {
    name: 'pqr@email.com',
    calories: true,
    remove: true,
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

  api.post('/mail/send-email', {}, {
    params: {
      email: inputEmailText.value
    }
  })
    .then((response) => {
      console.log(response)
      $q.notify({
        message: `Invitation Email sent to participant ${inputEmailText.value}`,
        color: 'accent',
        icon: 'announcement',
        actions: [{ icon: 'close', color: 'white' }]
      })
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

const $q = useQuasar()

const deleteAttendee = (key) => {
  console.dir(key)
  rows.value.map((item, index) => {
    (item.name === key) && delete rows.value[index]
  })
  $q.notify({
    message: `Participant with email ${key} is removed !!`,
    color: 'accent',
    icon: 'announcement',
    actions: [{ icon: 'close', color: 'white' }]
  })
}

const body1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 420px
</style>
