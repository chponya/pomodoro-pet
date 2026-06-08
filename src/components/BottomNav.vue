<script setup lang="ts">
import {
  House,
  NotebookPen,
  ChartColumn,
  Settings
} from 'lucide-vue-next'
</script>

<template>
  <nav
    class="
      h-[40px]
      w-full
      mt-auto
      bg-white/45
      backdrop-blur-xl
      border
      border-white/30
      rounded-[13px]
      px-5
      py-1
      shrink-0
    "
  >
    <div class="flex h-full items-center justify-around">
      <button class="grid h-9 w-9 place-items-center text-violet-500" aria-label="Главная">
        <House :size="19" fill="currentColor" />
      </button>

      <button class="grid h-9 w-9 place-items-center text-slate-400" aria-label="Задачи">
        <NotebookPen :size="19" />
      </button>

      <button class="grid h-9 w-9 place-items-center text-slate-400" aria-label="Статистика">
        <ChartColumn :size="19" />
      </button>

      <button class="grid h-9 w-9 place-items-center text-slate-400" aria-label="Настройки">
        <Settings :size="19" />
      </button>
    </div>
  </nav>
</template>
