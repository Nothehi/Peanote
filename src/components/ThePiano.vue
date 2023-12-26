<script setup lang="ts">
const emit = defineEmits<{
  (e: 'keyPushed', keyName: string): void
}>()

function keyPushed(keyName: string) {
  emit('keyPushed', keyName)
}
</script>

<template>
  <div class="box-border relative flex flex-row items-start justify-start w-full h-full">
    <button
      @click="() => keyPushed('c')"
      class="w-full h-full bg-white border-2 rounded-lg border-surface focus:bg-stone-300"
    ></button>
    <button
      @click="() => keyPushed('c#')"
      class="rounded-lg bg-black h-1/2 absolute w-1/12 left-[10%] border-surface border-2 focus:bg-stone-900"
    ></button>
    <button
      @click="() => keyPushed('d')"
      class="w-full h-full bg-white border-2 rounded-lg border-surface focus:bg-stone-300"
    ></button>
    <button
      @click="() => keyPushed('d#')"
      class="rounded-lg bg-black h-1/2 absolute w-1/12 left-[24%] border-surface border-2 focus:bg-stone-900"
    ></button>
    <button
      @click="() => keyPushed('e')"
      class="w-full h-full bg-white border-2 rounded-lg border-surface focus:bg-stone-300"
    ></button>
    <button
      @click="() => keyPushed('f')"
      class="w-full h-full bg-white border-2 rounded-lg border-surface focus:bg-stone-300"
    ></button>
    <button
      @click="() => keyPushed('f#')"
      class="rounded-lg bg-black h-1/2 absolute w-1/12 left-[53%] border-surface border-2 focus:bg-stone-900"
    ></button>
    <button
      @click="() => keyPushed('g')"
      class="w-full h-full bg-white border-2 rounded-lg border-surface focus:bg-stone-300"
    ></button>
    <button
      @click="() => keyPushed('g#')"
      class="rounded-lg bg-black h-1/2 absolute w-1/12 left-[67%] border-surface border-2 focus:bg-stone-900"
    ></button>
    <button
      @click="() => keyPushed('a')"
      class="w-full h-full bg-white border-2 rounded-lg border-surface focus:bg-stone-300"
    ></button>
    <button
      @click="() => keyPushed('a#')"
      class="rounded-lg bg-black h-1/2 absolute w-1/12 left-[82%] border-surface border-2 focus:bg-stone-900"
    ></button>
    <button
      @click="() => keyPushed('b')"
      class="w-full h-full bg-white border-2 rounded-lg border-surface focus:bg-stone-300"
    ></button>
  </div>
</template>
