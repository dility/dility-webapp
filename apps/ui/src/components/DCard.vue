<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ body1 }}
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      {{ body2 }}
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  body1: String,
  body2: String,
})

props.title
props.body1
props.body2
</script>
