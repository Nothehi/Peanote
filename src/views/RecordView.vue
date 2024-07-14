<script setup lang="ts">
import { RouterLink } from 'vue-router'

const records: GameData[] = JSON.parse(String(localStorage.getItem('records')))
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(records);

interface GameData {
  created_at: string;
  result: {
    pushed_at: string;
    currentKey: string;
    pushedKey: string;
    result: boolean;
    pushCount: number;
  }[];
}

interface PlayerReport {
  wrongPushCount: number;
  streakCount: number;
  averageTimeBetweenPushes: number;
}

function generatePlayerReport(gameData: GameData[]): PlayerReport {
  let wrongPushCount = 0;
  let streakCount = 0;
  let totalStreakCount = 0;
  let totalTimeInterval = 0;

  gameData.forEach((game) => {
    let currentStreakCount = 0;
    let lastPushedAt: Date | null = null;

    game.result.forEach((result) => {
      if (!result.result) {
        wrongPushCount++;
        currentStreakCount = 0;
      } else {
        currentStreakCount++;
        totalStreakCount = Math.max(totalStreakCount, currentStreakCount);
      }

      if (lastPushedAt !== null) {
        const currentTime = new Date(result.pushed_at).getTime();
        totalTimeInterval += currentTime - lastPushedAt.getTime();
      }

      lastPushedAt = new Date(result.pushed_at);
    });
  });

  const averageTimeBetweenPushes =
    gameData.length > 0
      ? totalTimeInterval / (gameData.length - wrongPushCount)
      : 0;

  return {
    wrongPushCount,
    streakCount: totalStreakCount,
    averageTimeBetweenPushes,
  };
}

const playerReport = generatePlayerReport(records);
console.log(playerReport);


</script>

<template>
    <div class="flex flex-col items-center justify-start w-full">
        <header class="relative w-full p-4 border-b border-primary">
            <h1 class="text-2xl text-center text-primary">Records</h1>
            <router-link to="/" class="absolute top-5 left-5 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
            </router-link>
        </header>

        <main class="flex flex-col w-full grow">

            <article v-for="record, idx in records" :key="idx" class="px-4 py-2 text-secondary">
                {{ 
                    (new Date(record.created_at)).toLocaleDateString('en-us', {
                        year: 'numeric',
                        month: 'short', 
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                    })
                }}
            </article>
        </main>
    </div>
</template>