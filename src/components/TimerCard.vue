<script setup lang="ts">
import mascot from '../assets/mascot/focus.png'
import { Play } from 'lucide-vue-next'

const progress = 25

const radius = 82
const circumference = 2 * Math.PI * radius
const offset = circumference - (progress / 100) * circumference
</script>

<template>
  <section class="h-[210px] overflow-visible rounded-[26px] bg-white/15 px-4 py-0">
    <div class="flex h-full items-center">
      <div class="flex h-full flex-1 items-end justify-center">
        <img
          :src="mascot"
          alt="Mascot"
          class="h-[218px] select-none object-contain"
          style="
            filter:
              drop-shadow(0 0 20px rgba(255,255,255,1))
              drop-shadow(0 0 35px rgba(255,255,255,.9))
              drop-shadow(0 0 55px rgba(255,255,255,.7));
          "
        />
      </div>

      <div class="flex flex-1 items-center justify-center">
        <div class="relative">
          <svg
            width="238"
            height="238"
            viewBox="0 0 190 190"
            class="-mt-8 -rotate-90"
          >
            <defs>
              <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#f9a8d4" />
                <stop offset="100%" stop-color="#c084fc" />
              </linearGradient>
            </defs>

            <circle
              cx="95"
              cy="95"
              :r="radius"
              fill="none"
              stroke="rgba(255,255,255,.35)"
              stroke-width="5"
            />

            <circle
              cx="95"
              cy="95"
              :r="radius"
              fill="none"
              stroke="url(#timerGradient)"
              stroke-width="5"
              stroke-linecap="round"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="offset"
            />
          </svg>

          <div
            class="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <span class="-mt-8 mb-2 text-[14px] text-violet-700/70">
              Фокус
            </span>

            <span class="text-[48px] font-light leading-none text-violet-950">
              25:00
            </span>

            <button
              class="
                mt-3
                h-[52px]
                w-[52px]
                rounded-full
                bg-pink-400
                flex
                items-center
                justify-center
                shadow-lg
                shadow-pink-200
                transition
                hover:scale-105
              "
              aria-label="Запустить таймер"
            >
              <Play :size="22" fill="white" color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
