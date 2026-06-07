<script setup lang="ts">
import { Pencil } from 'lucide-vue-next'
</script>

<template>
  <section
    class="
      bg-white/25
      backdrop-blur-xl
      border
      border-white/30
      shadow-md
      shadow-pink-100/30
      rounded-[22px]
      px-3
      py-2.5
    "
  >
    <div class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-2.5 min-w-0">
        <div
          class="
            h-3.5
            w-3.5
            rounded-full
            bg-gradient-to-br
            from-purple-300
            to-pink-300
            shrink-0
          "
        />

        <div class="min-w-0">
          <p class="text-[10px] text-slate-500 leading-none mb-1">
            Текущая задача
          </p>

          <p class="text-sm font-medium text-violet-950 truncate">
            Изучить Vue 3
          </p>
        </div>
      </div>

      <button class="text-slate-400 hover:text-violet-500 transition shrink-0">
        <Pencil :size="14" />
      </button>
    </div>
  </section>
</template>