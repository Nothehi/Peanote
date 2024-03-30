<script setup lang="ts">
import { computed, ref, type Ref, type ComputedRef, onMounted } from 'vue';
import { useToneStore } from '@/stores/tone'
import Hammer from 'hammerjs'

interface Props {
    note: string,
}

const props = defineProps<Props>()

const tone = useToneStore()

const blackKeys: {[key: string]: string} = {
    'c#': '10%',
    'db': '10%',
    'd#': '24%',
    'eb': '24%',
    'f#': '53%',
    'gb': '53%',
    'g#': '67%',
    'ab': '67%',
    'a#': '82%',
    'bb': '82%'
}
const isBlack: ComputedRef<boolean> = computed(() => Object.keys(blackKeys).includes(props.note))

const key: any = ref(null)

onMounted(() => {
    const hammer = new Hammer(key.value)

    hammer.on('press', () => tone.play(`${props.note}4`))
    hammer.on('pressup', () => tone.stop(`${props.note}4`))
})
</script>

<template>
    <!-- left-[10%] left-[24%] left-[53%] left-[67%] left-[82%] -->
    <button
        v-if="isBlack"
        ref="key"
        class="absolute z-10 w-1/12 border-2 rounded-lg bg-stone-700 shadow-neuburtal-lg shadow-stone-800 border-stone-800 h-1/2 -top-1 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2"
        :class="`left-[${blackKeys[note]}]`">
    </button>
    <button
        v-else
        ref="key"
        class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2">
    </button>
</template>