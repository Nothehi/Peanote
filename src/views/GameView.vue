<script setup lang="ts">
import TheStaff from '@/components/TheStaff.vue'
import ThePiano from '@/components/ThePiano.vue'
import GClef from '@/assets/g-clef.png'
import { ref, watch } from 'vue';

const isRunning = ref(false)
const timerCount = ref(60)

watch(timerCount, () => {
  if (timerCount.value > 0 && isRunning.value) {
    setTimeout(() => timerCount.value -= 1, 1000)
  } else {
    timerCount.value = 60
    isRunning.value = false
  }
}, { immediate: true })
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <header class="flex flex-col items-center justify-center w-full h-1/3">
      <span class="mb-5 text-secondary">{{ timerCount }} s</span>
      <img :src="GClef" alt="G Clef" class="max-w-20" />
      <h4 class="mt-5 text-xl font-bold text-primary">G Clef</h4>
    </header>

    <main class="flex items-center justify-center w-full h-1/3">
      <the-staff />
    </main>

    <footer class="relative flex flex-row items-center justify-start w-full p-4 h-1/3">
      <div class="absolute top-0 left-0 z-40 w-full h-full opacity-90 bg-tertiary rounded-t-xl"></div>
      <div class="absolute top-0 left-0 z-40 flex items-center justify-center w-full h-full">
        <button class="px-4 py-2 text-xl bg-surface text-primary rounded-xl">Sing</button>
      </div>

      <the-piano />
    </footer>
  </div>
</template>
