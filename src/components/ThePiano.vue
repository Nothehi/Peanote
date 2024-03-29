<script setup lang="ts">
import * as Tone from 'tone'

const emit = defineEmits<{
  (e: 'keyPushed', keyName: string): void
}>()

const synth = new Tone.Synth().toDestination()

function keyPushed(keyName: string) {
  emit('keyPushed', keyName)

  synth.triggerAttackRelease(keyName + '4', '8n')
}
</script>

<template>
  <div class="box-border relative flex flex-row items-start justify-start w-full h-full">
    <button
      @click="() => keyPushed('c')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @click="() => keyPushed('c#')"
      class="rounded-lg bg-stone-700 z-10 shadow-neuburtal-lg shadow-stone-800 border-2 border-stone-800 h-1/2 absolute w-1/12 left-[10%] -top-1 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2">
    </button>
    <button
      @click="() => keyPushed('d')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @click="() => keyPushed('d#')"
      class="rounded-lg bg-stone-700 z-10 shadow-neuburtal-lg shadow-stone-800 border-2 border-stone-800 h-1/2 absolute w-1/12 left-[24%] -top-1 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2">
    </button>
    <button
      @click="() => keyPushed('e')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @click="() => keyPushed('f')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @click="() => keyPushed('f#')"
      class="rounded-lg bg-stone-700 z-10 shadow-neuburtal-lg shadow-stone-800 border-2 border-stone-800 h-1/2 absolute w-1/12 left-[53%] -top-1 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2">
    </button>
    <button
      @click="() => keyPushed('g')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @click="() => keyPushed('g#')"
      class="rounded-lg bg-stone-700 z-10 shadow-neuburtal-lg shadow-stone-800 border-2 border-stone-800 h-1/2 absolute w-1/12 left-[67%] -top-1 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2">
    </button>
    <button
      @click="() => keyPushed('a')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
    <button
      @click="() => keyPushed('a#')"
      class="rounded-lg bg-stone-700 z-10 shadow-neuburtal-lg shadow-stone-800 border-2 border-stone-800 h-1/2 absolute w-1/12 left-[82%] -top-1 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2">
    </button>
    <button
      @click="() => keyPushed('b')"
      class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
  </div>
</template>
