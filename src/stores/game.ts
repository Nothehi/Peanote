import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

interface Result {
  pushed_at: Date,
  currentKey: string
  pushedKey: string
  result: boolean,
  pushCount: number
}

export const useGameStore = defineStore('game', () => {
  const score = ref(0)
  const isRunning = ref(false)
  const timerCount = ref(0)
  const currentKey = ref('')
  const result: Ref<Array<Result>> = ref([])

  function run() {
    isRunning.value = true
    timerCount.value = 30
    currentKey.value = pickRandomNote()

    startTimer()
  }

  function startTimer() {
    const timer = setInterval(() => {
      if (isRunning.value && timerCount.value > 0) {
        timerCount.value -= 1
      } else {
        clearInterval(timer)
        end()
      }
    }, 1000)
  }

  function end() {
    isRunning.value = false
    currentKey.value = ''

    storeRecord()

    storeHighestScore()
    score.value = 0
  }

  function storeRecord() {
    let records = JSON.parse(String(localStorage.getItem('records')))

    console.log(records);

    if (records) {
      records.push({
        created_at: new Date(),
        result: result.value
      })
    } else {
      records = [
        {
          created_at: new Date(),
          result: result.value
        }
      ]
    }

    localStorage.setItem('records', JSON.stringify(records))
    result.value = []
  }

  function storeHighestScore() {
    if (score.value > Number(localStorage.getItem('highest_score'))) {
      localStorage.setItem('highest_score', String(score.value))
    }
  }

  function compareNote(keyName: string): boolean {
    if (keyName == currentKey.value.split('')[0]) {
      score.value += 1
      currentKey.value = pickRandomNote()

      return true
    }

    timerCount.value -= 2
    return false
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
    result,
    currentKey,
    compareNote,
    run,
    end
  }
})
