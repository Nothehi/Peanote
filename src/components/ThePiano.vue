<script setup lang="ts">
import PianoKey from './PianoKey.vue'

interface Props {
	sheet: Array<string>
}
defineProps<Props>()

function keyPush(note: string) {
	console.log(note);

}
</script>

<template>
	<div class="grid w-full h-full grid-cols-1">
		<div class="flex flex-row w-full h-full col-start-1 row-start-1 space-x-0.5">
			<piano-key note="c" :pushed="keyPush" />
			<piano-key note="d" :pushed="keyPush" />
			<piano-key note="e" :pushed="keyPush" />
			<piano-key note="f" :pushed="keyPush" />
			<piano-key note="g" :pushed="keyPush" />
			<piano-key note="a" :pushed="keyPush" />
			<piano-key note="b" :pushed="keyPush" />
		</div>

		<div class="z-10 flex flex-row w-full col-start-1 row-start-1 px-10 -mt-1 space-x-5 h-1/2">
			<piano-key black note="c#" />
			<piano-key black note="d#" />
			<piano-key black note="" class="invisible" />
			<piano-key black note="f#" />
			<piano-key black note="g#" />
			<piano-key black note="a#" />
		</div>
	</div>
</template>
