<script setup lang="ts">
import mascot from '../assets/mascot/focus.png'
import { Play } from 'lucide-vue-next'

const progress = 25

const radius = 82
const circumference = 2 * Math.PI * radius

const offset =
  circumference -
  (progress / 100) * circumference
</script>

<template>
  <section
    class="
      bg-white/25
      backdrop-blur-xl
      border
      border-white/30
      shadow-xl
      shadow-pink-100/60
      rounded-[32px]
      px-5
      py-3
      h-[210px]
      overflow-hidden
    "
  >
    <div class="flex h-full items-center">

  <!-- Mascot -->

  <div
    class="
      flex-1
      flex
      items-end
      justify-center
      h-full
    "
  >
    <img
      :src="mascot"
      alt="Mascot"
      class="
        h-[190px]
        object-contain
        select-none
      "
      style="
        filter:
          drop-shadow(0 0 20px rgba(255,255,255,1))
          drop-shadow(0 0 35px rgba(255,255,255,.9))
          drop-shadow(0 0 55px rgba(255,255,255,.7));
      "
    />
  </div>

  <!-- Timer -->

  <div
    class="
      flex-1
      flex
      items-center
      justify-center
    "
  >
    <div class="relative">

      <svg
        width="190"
        height="190"
        viewBox="0 0 190 190"
        class="-rotate-90"
      >
        <defs>
          <linearGradient
            id="timerGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stop-color="#f9a8d4"
            />

            <stop
              offset="100%"
              stop-color="#c084fc"
            />
          </linearGradient>
        </defs>

        <!-- Background Circle -->

        <circle
          cx="95"
          cy="95"
          :r="radius"
          fill="none"
          stroke="rgba(255,255,255,.30)"
          stroke-width="6"
        />

        <!-- Progress Circle -->

        <circle
          cx="95"
          cy="95"
          :r="radius"
          fill="none"
          stroke="url(#timerGradient)"
          stroke-width="6"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="offset"
        />
      </svg>

      <!-- Content -->

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
        <span
          class="
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-slate-500
            mb-1
          "
        >
          Фокус
        </span>

        <span
          class="
            text-[42px]
            font-light
            text-violet-950
            leading-none
          "
        >
          25:00
        </span>

        <button
          class="
            mt-3
            h-10
            w-10
            rounded-full
            bg-gradient-to-r
            from-pink-300
            to-purple-300
            flex
            items-center
            justify-center
            shadow-lg
            shadow-pink-200
            transition
            hover:scale-105
          "
        >
          <Play
            :size="16"
            fill="white"
            color="white"
          />
        </button>
      </div>

    </div>
  </div>

</div>

  </section>
</template>
