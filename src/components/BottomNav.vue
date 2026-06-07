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
      bg-white/45
      backdrop-blur-xl
      border
      border-white/30
      rounded-[24px]
      px-4
      py-3
      shadow-sm
    "
  >
    <div class="flex items-center justify-around">
      <button class="text-violet-500">
        <House :size="24" />
      </button>

      <button class="text-slate-400">
        <NotebookPen :size="24" />
      </button>

      <button class="text-slate-400">
        <ChartColumn :size="24" />
      </button>

      <button class="text-slate-400">
        <Settings :size="24" />
      </button>
    </div>
  </nav>
</template>