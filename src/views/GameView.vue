<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import TheStaff from '@/components/TheStaff.vue'
import ThePiano from '@/components/ThePiano.vue'
import { onUnmounted, ref } from 'vue'

const game = useGameStore()
const pushCount = ref(0)
const sheet = ref(['D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5'])

function keyPushed(keyName: string) {
	game.result.push({
		pushed_at: new Date(),
		currentKey: game.currentKey,
		pushedKey: keyName,
		result: game.compareNote(keyName),
		pushCount: pushCount.value
	})

	pushCount.value += 1
}

onUnmounted(() => game.end())
</script>

<template>
	<div class="flex flex-col items-center justify-between h-full p-4">
		<header class="flex flex-row items-start justify-between w-full">
			<span class="">Score: {{ game.score }}</span>
			<span class="">{{ game.timerCount }} s</span>
		</header>

		<main class="flex items-center justify-center flex-grow w-full h-1/3">
			<the-staff :sheet="sheet" />
		</main>

		<footer class="relative flex flex-row items-center justify-start w-full h-1/3">
			<the-piano :sheet="sheet" />
		</footer>
	</div>
</template>
