<template>
  <q-card flat bordered class="my-card">

    <q-card-section>
      <div class="text-h6">Demo Workshop {{ title }}</div>
    </q-card-section>

    <q-img src="/assets/ws_img.jpg" height="10em">
      <div>
        WS - {{ title }}
      </div>
    </q-img>

    <q-card-section>
      {{ body1 }}
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      {{ body2 }}
    </q-card-section>

    <q-card-actions>
      <d-button label="Join" style="width: 48%" />
      <q-btn unelevated rounded color="primary" label="Edit" style="width: 49%" />
    </q-card-actions>

  </q-card>
</template>

<script setup lang="ts">
import DButton from './DButton.vue'

const props = defineProps({
  title: Number,
  body1: String,
  body2: String,
})

props.title
props.body1
props.body2
</script>
