import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useGameStore = defineStore('game', () => {
  const score = ref(0)
  const isRunning = ref(false)
  const timerCount = ref(0)
  const currentKey = ref('')

  watch(timerCount, () => {
    if (timerCount.value > 0 && isRunning.value) {
      setTimeout(() => {
        timerCount.value -= 1
      }, 1000)
    } else {
      timerCount.value = 60
      isRunning.value = false
      currentKey.value = ''

      if (score.value > Number(localStorage.getItem('record'))) {
        localStorage.setItem('record', String(score.value))
      }
    }
  })

  function run() {
    isRunning.value = true
    timerCount.value = 60

    currentKey.value = pickRandomNote()
  }

  function compareNote(keyName: string) {
    if (keyName == currentKey.value.split('')[0]) {
      score.value += 1

      currentKey.value = pickRandomNote()
    } else {
      timerCount.value -= 2
    }
  }

  function pickRandomNote(): string {
    const gClefNotes = ['g5', 'f5', 'e5', 'd5', 'c5', 'b4', 'a4', 'g4', 'f4', 'e4', 'd4']

    const random = Math.floor(Math.random() * gClefNotes.length)
    return gClefNotes[random]
  }

  return {
    score,
    isRunning,
    timerCount,
    currentKey,
    compareNote,
    run
  }
})
