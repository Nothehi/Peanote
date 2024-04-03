<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useToneStore } from '@/stores/tone'
import Hammer from 'hammerjs'

interface Props {
    note: string,
    octave?: number,
    black?: boolean,
}
const props = withDefaults(defineProps<Props>(), { octave: 4 })

const tone = useToneStore()
const key: any = ref(null)

onMounted(() => {
    const hammer = new Hammer(key.value)
    hammer.get('press').set({time: 0})

    hammer.on('press', () => tone.play(`${props.note}${props.octave}`))
    hammer.on('pressup panstart tap', () => {
        tone.stop(`${props.note}${props.octave}`)
        hammer.stop(true)
    })
})
</script>

<template>
    <button
        v-if="black"
        ref="key"
        class="w-full h-full border-2 rounded-lg bg-stone-700 shadow-neuburtal-lg shadow-stone-800 border-stone-800 active:shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2"></button>
        
    <button 
        v-else
        ref="key"
        class="w-full h-full bg-white border-2 border-gray-200 rounded-lg shadow-neuburtal-lg shadow-gray-200 active:shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2"></button>
</template>