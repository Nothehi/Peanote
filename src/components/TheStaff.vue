<script setup lang="ts">
import HalfNote from '@/assets/half-note.png'
import { reactive } from 'vue'

interface Props {
  note?: string
}

defineProps<Props>()

interface Note<T> {
  [key: string]: T
}

const gClefNotePositions: Note<string> = reactive({
  g5: '-top-[45px]',
  f5: '-top-[34px]',
  e5: '-top-[23px]',
  d5: '-top-[12px]',
  c5: '-top-[1px]',
  b4: 'top-[10px]',
  a4: 'top-[21px]',
  g4: 'top-[32px]',
  f4: 'top-[43px]',
  e4: 'top-[54px]',
  d4: 'top-[65px]'
})
</script>

<template>
  <div class="relative w-full space-y-5">
    <img
      :src="HalfNote"
      alt="half note"
      class="absolute left-0 right-0 w-16 mx-auto"
      :class="[note ? gClefNotePositions[note] + ' static' : 'hidden']"
    />

    <div class="w-full border-t-2 border-secondary"></div>
    <div class="w-full border-t-2 border-secondary"></div>
    <div class="w-full border-t-2 border-secondary"></div>
    <div class="w-full border-t-2 border-secondary"></div>
    <div class="w-full border-t-2 border-secondary"></div>
  </div>
</template>
