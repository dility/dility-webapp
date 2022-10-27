<template>
  <q-btn unelevated outline rounded color="primary" :label="label" />
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
})

props.label
</script>
