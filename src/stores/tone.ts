import { defineStore } from 'pinia'
import * as Tone from 'tone'
import { ref } from 'vue';

const samples = {
    urls: {
        "C4": "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        "A4": "A4.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/salamander/",
};

export const useToneStore = defineStore('tone', () => {
    const sampler = new Tone.Sampler(samples).toDestination()
    const storedSampler = ref<Tone.Sampler | null>(null)

    function play(note: string) {
        sampler.triggerAttack(note);
        storedSampler.value = sampler;
    }

    function stop(note: string) {
        if (storedSampler.value) {
            storedSampler.value.triggerRelease(note);
            storedSampler.value = null;
        }
    }

    return { play, stop }
})