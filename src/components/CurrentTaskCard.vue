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
      rounded-[14px]
      px-4
      py-2.5
    "
  >
    <div class="flex items-center justify-between gap-3">
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

        <div class="min-w-0">
          <p class="mb-1.5 text-[11px] leading-none text-slate-500">
            Текущая задача
          </p>

          <p class="truncate text-[17px] font-semibold leading-none text-violet-950">
            Изучить Vue 3
          </p>
        </div>
      </div>

      <button
        class="text-slate-400 transition hover:text-violet-500 shrink-0"
        aria-label="Редактировать текущую задачу"
      >
        <Pencil :size="18" :stroke-width="1.7" />
      </button>
    </div>
  </section>
</template>
