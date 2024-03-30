<script setup lang="ts">
import { useToneStore } from '@/stores/tone'

const emit = defineEmits<{
  (e: 'keyPushed', keyName: string): void
}>()

const tone = useToneStore()

function keyPushDown(keyName: string) {
  tone.play(`${keyName}4`)
}

function keyPushUp(keyName: string) {
  emit('keyPushed', keyName)
  tone.stop(`${keyName}4`)
}
</script>

<template>
  <div class="box-border relative flex flex-row items-start justify-start w-full h-full">
    <button
      @mousedown="() => keyPushDown('c')"
      @mouseup="() => keyPushUp('c')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @mousedown="() => keyPushDown('c#')"
      @mouseup="() => keyPushUp('c#')"
      class="rounded-lg bg-stone-700 z-10 shadow-neuburtal-lg shadow-stone-800 border-2 border-stone-800 h-1/2 absolute w-1/12 left-[10%] -top-1 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2">
    </button>
    <button
      @mousedown="() => keyPushDown('d')"
      @mouseup="() => keyPushUp('d')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @mousedown="() => keyPushDown('d#')"
      @mouseup="() => keyPushUp('d#')"
      class="rounded-lg bg-stone-700 z-10 shadow-neuburtal-lg shadow-stone-800 border-2 border-stone-800 h-1/2 absolute w-1/12 left-[24%] -top-1 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2">
    </button>
    <button
      @mousedown="() => keyPushDown('e')"
      @mouseup="() => keyPushUp('e')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @mousedown="() => keyPushDown('f')"
      @mouseup="() => keyPushUp('f')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @mousedown="() => keyPushDown('f#')"
      @mouseup="() => keyPushUp('f#')"
      class="rounded-lg bg-stone-700 z-10 shadow-neuburtal-lg shadow-stone-800 border-2 border-stone-800 h-1/2 absolute w-1/12 left-[53%] -top-1 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2">
    </button>
    <button
      @mousedown="() => keyPushDown('g')"
      @mouseup="() => keyPushUp('g')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @mousedown="() => keyPushDown('g#')"
      @mouseup="() => keyPushUp('g#')"
      class="rounded-lg bg-stone-700 z-10 shadow-neuburtal-lg shadow-stone-800 border-2 border-stone-800 h-1/2 absolute w-1/12 left-[67%] -top-1 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2">
    </button>
    <button
      @mousedown="() => keyPushDown('a')"
      @mouseup="() => keyPushUp('a')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @mousedown="() => keyPushDown('a#')"
      @mouseup="() => keyPushUp('a#')"
      class="rounded-lg bg-stone-700 z-10 shadow-neuburtal-lg shadow-stone-800 border-2 border-stone-800 h-1/2 absolute w-1/12 left-[82%] -top-1 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2">
    </button>
    <button
      @mousedown="() => keyPushDown('b')"
      @mouseup="() => keyPushUp('b')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
  </div>
</template>
