<script setup lang="ts">
import { useToneStore } from '@/stores/tone'
import PianoKey from './PianoKey.vue'

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
		<piano-key note="c"/>
		<piano-key note="c#"/>
		<piano-key note="d"/>
		<piano-key note="d#"/>
		<piano-key note="e"/>
		<piano-key note="f"/>
		<piano-key note="f#"/>
		<piano-key note="g"/>
		<piano-key note="g#"/>
		<piano-key note="a"/>
		<piano-key note="a#"/>
		<piano-key note="b"/>
    </div>
</template>
