<template>
  <div class="text-h6">Workshop Methods</div>
  <p>some help text here</p>
  <q-btn unelevated outline rounded no-caps color="primary" label="see how it works" class="q-my-md" />
  <div class="q-my-md">Selected Methods</div>

  <div class="text-h5">
    Selected Methods
    <q-badge>{{ selectedCount }}</q-badge>
  </div>
  <div class="q-py-md">
    <q-list bordered separator>
      <q-item v-for="method in selected" :key="method.name">
        <q-item-section>
          <q-item-label>{{ method.name }}</q-item-label>
          <q-item-label caption>{{ method.description }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>
            <q-btn outline color="primary" size="sm" label="Remove" icon="delete_outline"
              @click="removeMethod(method)" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <br>

  <div class="text-h5">
    Methods Library
    <q-badge>{{ methodsCount }}</q-badge>
    <q-tooltip anchor="bottom middle">
      List of all avilable methods
    </q-tooltip>
  </div>

  <div class="q-py-md">
    <q-list bordered separator>

      <q-item v-for="method in methods" :key="method.name">
        <q-item-section>
          <q-item-label>{{ method.name }}</q-item-label>
          <q-item-label caption>{{ method.description }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>
            <q-btn outline color="primary" size="sm" icon="add" label="Add" @click="addMethod(method)" />
          </q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  label: String,
})

props.label

interface Method {
  name: string;
  description: string;
}

const methods = ref<Method[]>([
  {
    name: 'Empathy Map',
    description: "An empathy map is a widely-used visualization tool within the field of UX and HCI practice. In relation to empathetic design, the primary purpose of an empathy map is to bridge the understanding of the end user. Within context of its application, this tool is used to build a shared understanding of the user's needs and provide context to a user-centered solution.",
  },
  {
    name: 'User Personas',
    description: 'A persona, in user-centered design and marketing is a fictional character created to represent a user type that might use a site, brand, or product in a similar way. Marketers may use personas together with market segmentation, where the qualitative personas are constructed to be representative of specific segments.',
  },
  {
    name: 'Customer Journey Maps',
    description: 'A customer journey map is a diagram (or several diagrams) that depict the stages customers go through when interacting with a company, from buying products online to accessing customer service on the phone to airing grievances on social media.',
  },
  {
    name: 'Interviews',
    description: '',
  },
  {
    name: 'SWOT Analysis',
    description: '',
  },
  {
    name: '6 Thinking Heads',
    description: 'some description',
  },
  {
    name: 'Yes and No',
    description: '',
  },
  // {
  //   name: '',
  //   description: '',
  // },
  // {
  //   name: '',
  //   description: '',
  // },
])

let selected = ref<Method[]>(methods.value.slice(0, 1));
const selectedCount = computed(() => {
  return selected.value.length
})

const methodsCount = computed(() => {
  return methods.value.length
})

function addMethod(item: Method) {
  selected.value.push(item)
}

function removeMethod(item: Method) {
  let itemIndex = selected.value.findIndex(obj => obj === item)
  selected.value.splice(itemIndex, 1)
}

</script>



          