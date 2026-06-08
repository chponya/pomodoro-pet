<script setup lang="ts">
import { Pencil } from 'lucide-vue-next'
</script>

<template>
  <section
    class="
      h-[58px]
      bg-white/25
      backdrop-blur-xl
      border
      border-white/30
      shadow-md
      shadow-pink-100/30
      rounded-[14px]
      px-4
      py-2
      flex
      flex-col
      justify-center
      shrink-0
    "
  >
    <p class="mb-1 text-[11px] font-semibold leading-none text-violet-700/70">
      Текущая задача
    </p>

    <div class="flex w-full items-center justify-between gap-3">
      <div class="flex min-w-0 items-center gap-2.5">
        <div
          class="
            h-5
            w-5
            rounded-full
            bg-gradient-to-br
            from-purple-300
            to-pink-300
            shrink-0
          "
        />

        <p class="truncate text-[14px] font-semibold leading-none text-violet-950">
          Изучить Vue 3
        </p>
      </div>

      <button
        class="grid h-6 w-6 shrink-0 place-items-center text-violet-500 transition hover:text-violet-700"
        aria-label="Редактировать текущую задачу"
      >
        <Pencil :size="17" :stroke-width="1.8" />
      </button>
    </div>
  </section>
</template>
