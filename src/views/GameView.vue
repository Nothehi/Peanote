<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { RouterLink } from 'vue-router'
import TheStaff from '@/components/TheStaff.vue'
import ThePiano from '@/components/ThePiano.vue'
import GClef from '@/assets/g-clef.png'

const game = useGameStore()
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <header class="flex flex-col items-center justify-center w-full h-1/3">
      <span class="absolute mb-5 right-5 top-5 text-secondary">{{ game.timerCount }} s</span>
      <span class="absolute left-5 top-5 text-secondary">score: {{ game.score }}</span>
      <img :src="GClef" alt="G Clef" class="max-w-20" />
      <h4 class="mt-5 text-xl font-bold text-primary">G Clef</h4>
    </header>

    <main class="flex items-center justify-center w-full h-1/3">
      <the-staff :note="game.currentKey" />
    </main>

    <footer class="relative flex flex-row items-center justify-start w-full p-4 h-1/3">
      <div
        v-if="!game.isRunning"
        class="absolute top-0 left-0 z-40 w-full h-full opacity-90 bg-tertiary rounded-t-xl"
      ></div>
      <div
        v-if="!game.isRunning"
        class="absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-full space-y-2"
      >
        <button class="px-6 py-2 text-xl bg-surface text-primary rounded-xl" @click="game.run">
          Sing
        </button>
        <router-link
          to="/"
          class="px-4 py-1 border bg-secondary border-surface text-surface rounded-xl"
          @click="game.run"
          >Back</router-link
        >
      </div>

      <the-piano @key-pushed="game.compareNote" />
    </footer>
  </div>
</template>
