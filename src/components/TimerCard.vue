<script setup lang="ts">
import mascot from '../assets/mascot/focus.png'
import { Play } from 'lucide-vue-next'

const progress = 25

const radius = 78
const circumference = 2 * Math.PI * radius
const offset = circumference - (progress / 100) * circumference
</script>

<template>
  <section class="h-[190px] overflow-visible rounded-[24px] bg-white/15 px-4 py-0">
    <div class="flex h-full items-center">
      <div class="flex h-full flex-[3] items-end justify-center">
        <img
          :src="mascot"
          alt="Mascot"
          class="h-[196px] select-none object-contain"
          style="
            filter:
              drop-shadow(0 0 20px rgba(255,255,255,1))
              drop-shadow(0 0 35px rgba(255,255,255,.9))
              drop-shadow(0 0 55px rgba(255,255,255,.7));
          "
        />
      </div>

      <div class="flex flex-[2] items-center justify-center">
        <div class="relative">
          <svg
            width="214"
            height="214"
            viewBox="0 0 190 190"
            class="-mt-7 -rotate-90"
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
              stroke-width="4.5"
            />

            <circle
              cx="95"
              cy="95"
              :r="radius"
              fill="none"
              stroke="url(#timerGradient)"
              stroke-width="4.5"
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
            <span class="-mt-7 mb-2 text-[13px] text-violet-700/70">
              Фокус
            </span>

            <span class="text-[43px] font-light leading-none text-violet-950">
              25:00
            </span>

            <button
              class="
                mt-3
                h-[47px]
                w-[47px]
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
              <Play :size="20" fill="white" color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
