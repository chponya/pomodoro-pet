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
      h-[52px]
      bg-white/45
      backdrop-blur-xl
      border
      border-white/30
      rounded-[14px]
      px-5
      py-2
    "
  >
    <div class="flex h-full items-center justify-around">
      <button class="text-violet-500" aria-label="Главная">
        <House :size="24" fill="currentColor" />
      </button>

      <button class="text-slate-400" aria-label="Задачи">
        <NotebookPen :size="23" />
      </button>

      <button class="text-slate-400" aria-label="Статистика">
        <ChartColumn :size="23" />
      </button>

      <button class="text-slate-400" aria-label="Настройки">
        <Settings :size="23" />
      </button>
    </div>
  </nav>
</template>
