<script setup lang="ts">
import { reactive } from 'vue';

const positions = reactive({
    D4: 'mt-[3.7rem]',
    E4: 'mt-[2.7rem]',
    F4: 'mt-[1.5rem]',
    G4: 'mt-[0.5rem]',
    A4: 'mt-[-0.8rem]',
    B4: 'mt-[1.8rem] rotate-180',
    C5: 'mt-[0.8rem] rotate-180',
    D5: 'mt-[-0.3rem] rotate-180',
    E5: 'mt-[-1.3rem] rotate-180',
    F5: 'mt-[-2.5rem] rotate-180',
    G5: 'mt-[-3.5rem] rotate-180',
})
</script>

<template>
    <div class="grid items-center justify-center w-full h-full grid-cols-1">
        <div class="relative z-0 w-full col-start-1 row-start-1 space-y-4 border-l-2">
            <div class="w-full border-t-2 border-gray-200"></div>
            <div class="w-full border-t-2 border-gray-200"></div>
            <div class="w-full border-t-2 border-gray-200"></div>
            <div class="w-full border-t-2 border-gray-200"></div>
            <div class="w-full border-t-2 border-gray-200"></div>
        </div>

        <div class="relative z-10 flex flex-row items-center h-full col-start-1 row-start-1">
            <svg class="w-10 mt-2 ml-4 mr-8 stroke-gray-300" viewBox="0 0 46 136" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.5743 75.6079C19.8513 65.5382 42.1948 58.7636 43 83.7789C43 89.7612 41.0276 93.6404 38.5741 96.14C33.7224 101.083 25.8288 102.079 18.9962 100.945C7.32466 99.0074 3.8714 88.2674 3.24464 83.7789C1.23171 69.3633 12.1351 51.9798 17.8384 45.09C18.5464 44.2087 19.1961 43.3453 19.821 42.4819C25.7465 34.2952 32.169 25.6427 32.6529 15.5481C32.9009 10.3743 31.6531 6.30375 28.9095 4.28112C21.8642 0.0412397 18.8448 7.46103 17.8384 10.111C16.4878 14.062 15.7945 17.4669 15.4561 20.36C14.65 27.2511 16.0443 34.2023 17.4767 40.9909L27.2199 87.1664C27.3398 87.7346 27.4537 88.2968 27.555 88.8686C28.1235 92.0758 30.076 103.962 30.4192 117.698C30.4192 118.717 30.4525 119.511 30.5054 120.143C30.9389 125.314 29.5335 131.05 24.5568 132.521C22.1818 133.223 19.6834 133.152 18.097 132.316C15.0776 130.726 14.0711 128.606 14.5743 125.427C14.7573 124.271 15.039 123.424 15.4927 122.764C17.3925 119.999 21.4739 120.606 24.639 121.717V121.717"
                    stroke-width="5" stroke-linecap="round" />
            </svg>

            <div class="absolute w-2 bg-gray-300 rounded-lg h-1/2 left-24 opacity-35"></div>

            <div class="flex items-center justify-start w-full h-full overflow-hidden">
                <div class="flex flex-row *:ml-16 " :style="`transform: translate(${sheetPos}px, 0);`">
                <slot :positions="positions"></slot>
                </div>
            </div>
        </div>

    </div>
</template>
