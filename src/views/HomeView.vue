<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="flex flex-col items-center justify-center">
    <h1 class="my-24 text-6xl font-bold text-center text-primary">Peanote</h1>

    <router-link to="/game" class="px-4 py-2 mt-4 text-2xl rounded-xl bg-primary text-surface"
      >Play</router-link
    >
    <router-link to="/" class="px-4 py-2 mt-4 text-2xl rounded-xl bg-primary text-surface"
      >Records</router-link
    >
  </main>
</template>
