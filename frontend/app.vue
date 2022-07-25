<template>
  <NuxtLayout :name="layoutName">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// You might choose this based on an API call or logged-in status
const layoutName = "default";
</script>