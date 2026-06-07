<script setup lang="ts">
import { Plus } from 'lucide-vue-next'

const tasks = [
  {
    id: 1,
    title: 'Изучить Vue 3',
    color: 'bg-violet-400',
    ring: 'border-violet-300'
  },
  {
    id: 2,
    title: 'Сделать проект',
    color: 'bg-pink-400',
    ring: 'border-pink-300'
  },
  {
    id: 3,
    title: 'Прочитать статью',
    color: 'bg-amber-300',
    ring: 'border-pink-300'
  },
  {
    id: 4,
    title: 'Тренировка',
    color: 'bg-emerald-300',
    ring: 'border-pink-300'
  }
]
</script>

<template>
  <section
    class="
      bg-white/25
      backdrop-blur-xl
      border
      border-white/30
      rounded-[14px]
      p-4
      h-full
      min-h-0
      flex
      flex-col
      shadow-md
      shadow-pink-100/20
    "
  >
    <div class="mb-2 flex items-center justify-between">
      <h3 class="text-[14px] font-semibold text-violet-900">
        Задачи
      </h3>

      <button
        class="
          h-6
          w-6
          grid
          place-items-center
          text-violet-500
          transition
          hover:text-violet-700
        "
        aria-label="Добавить задачу"
      >
        <Plus :size="20" :stroke-width="1.7" />
      </button>
    </div>

    <div
      class="
        flex
        flex-1
        min-h-0
        flex-col
        gap-2.5
        overflow-y-auto
        pr-1.5
        [&::-webkit-scrollbar]:w-1.5
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-violet-200
      "
    >
      <div
        v-for="task in tasks"
        :key="task.id"
        class="flex items-center justify-between gap-3"
      >
        <div class="flex min-w-0 items-center gap-2.5">
          <span
            class="
              h-4
              w-4
              shrink-0
              rounded-full
              border-2
              bg-white/25
            "
            :class="task.ring"
          />

          <span class="truncate text-[13px] font-semibold text-violet-950">
            {{ task.title }}
          </span>
        </div>

        <span
          class="h-3.5 w-3.5 shrink-0 rounded-full shadow-sm"
          :class="task.color"
        />
      </div>
    </div>
  </section>
</template>
