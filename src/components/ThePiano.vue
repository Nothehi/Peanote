<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
	start?: number,
	octaves?: number,
	whiteLable?: boolean,
	blackLable?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
	start: 4,
	octaves: 1,
	whiteLable: true,
	blackLable: false
})

const basicNotes = ref(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
const keyWidth = ref(80)
const keyMargin = ref(4)

const octaveWidth = computed(() => 7 * (keyWidth.value + keyMargin.value))
const widthPerOctave = computed(() => octaveWidth.value * props.octaves)

function calculateKeyXPosition(starterPosistion: number, octave: number, key: number): number {
	const keyPosition = key * (keyWidth.value + keyMargin.value)
	const octavePosition = octaveWidth.value * octave

	return starterPosistion + keyPosition + octavePosition
}
</script>

<template>
	<svg class="w-full" xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 ${widthPerOctave} 335`">
		<template v-for="octave in octaves" :key="octave">
			<g>
				<template v-for="(key, idx) in basicNotes" :key="idx">
					<g>
						<rect
							class="w-20 stroke-gray-200 stroke-2 drop-shadow-[0_0.5rem_0rem_rgba(229,231,235,1)] fill-white h-80 active:drop-shadow-none active:border-sky-200 active:bg-sky-50 active:translate-y-2"
							:x="calculateKeyXPosition(2, octave - 1, idx)" y="5" rx="12" ry="12"></rect>

						<text v-if="whiteLable" :x="calculateKeyXPosition(42, octave - 1, idx)" y="300"
							class="fill-gray-400" text-anchor="middle">
							{{ key }}{{ start + (octave - 1) }}
						</text>
					</g>
				</template>

				<template v-for="(key, idx) in basicNotes" :key="idx">
					<g v-if="idx != 2 && idx < 6">
						<rect
							class="w-10 stroke-stone-800 stroke-2 drop-shadow-[0_0.5rem_0rem_rgba(41,37,36,1)] fill-stone-700 h-48 active:drop-shadow-none active:border-gray-800 active:bg-gray-950 active:translate-y-2"
							:x="calculateKeyXPosition(64, octave - 1, idx)" y="1" rx="10" ry="10"></rect>

						<text v-if="blackLable" :x="calculateKeyXPosition(85, octave - 1, idx)" y="180"
							class="text-sm fill-stone-400" text-anchor="middle">
							{{ key }}#{{ start + (octave - 1) }}
						</text>

						<text v-if="blackLable" :x="calculateKeyXPosition(85, octave - 1, idx)" y="160"
							class="text-sm fill-stone-400" text-anchor="middle">
							{{ basicNotes[idx + 1] }}b{{ start + (octave - 1) }}
						</text>
					</g>
				</template>
			</g>
		</template>
	</svg>
</template>
