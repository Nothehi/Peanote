<script setup lang="ts">
import PianoKey from './PianoKey.vue'
</script>

<template>
	<div class="grid w-full h-full grid-cols-1">
		<div class="flex flex-row w-full h-full col-start-1 row-start-1">
			<piano-key note="c" />
			<piano-key note="d" />
			<piano-key note="e" />
			<piano-key note="f" />
			<piano-key note="g" />
			<piano-key note="a" />
			<piano-key note="b" />
		</div>

		<div class="z-10 flex flex-row w-full col-start-1 row-start-1 -mt-1 space-x-2 px-7 h-1/2">
			<piano-key black note="c#" />
			<piano-key black note="d#" />
			<piano-key black note="" class="invisible" />
			<piano-key black note="f#" />
			<piano-key black note="g#" />
			<piano-key black note="a#" />
		</div>
	</div>
</template>
