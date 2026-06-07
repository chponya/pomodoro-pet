<script setup lang="ts">
import {
  Plus,
  Pencil,
  Star
} from 'lucide-vue-next'

const tasks = [
  {
    id: 1,
    title: 'Изучить Vue 3',
    completed: true,
    color: 'text-violet-400'
  },
  {
    id: 2,
    title: 'Сделать проект',
    completed: false,
    color: 'text-pink-400'
  },
  {
    id: 3,
    title: 'Прочитать статью',
    completed: false,
    color: 'text-amber-400'
  },
  {
    id: 4,
    title: 'Тренировка',
    completed: false,
    color: 'text-green-400'
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
      shadow-lg
      shadow-pink-100/40
      rounded-[28px]
      px-4
      py-3
      flex
      flex-col
      min-h-[190px]
      flex
      flex-col
    "
  >
    <!-- Header -->

    <div
      class="
        flex
        items-center
        justify-between
        mb-3
      "
    >
      <h3
        class="
          text-[15px]
          font-semibold
          text-violet-900
        "
      >
        План на день
      </h3>

      <button
        class="
          flex
          items-center
          gap-1
          text-violet-500
          text-sm
        "
      >
        <Plus :size="16" />
        Добавить задачу
      </button>
    </div>

    <!-- Tasks -->

    <div
      class="
        flex-1
        overflow-y-auto
      "
    >
      <div
        v-for="task in tasks"
        :key="task.id"
        class="
          flex
          items-center
          justify-between
          py-1.5
          border-b
          border-white/20
        "
      >
        <!-- Left -->

        <div
          class="
            flex
            items-center
            gap-3
          "
        >
          <div
            v-if="task.completed"
            class="
              h-6
              w-6
              rounded-md
              bg-violet-400
              text-white
              flex
              items-center
              justify-center
              text-xs
            "
          >
            ✓
          </div>

          <div
            v-else
            class="
              h-6
              w-6
              rounded-md
              border-2
              border-slate-300
            "
          />

          <span
            class="
              text-sm
              text-violet-950
            "
          >
            {{ task.title }}
          </span>
        </div>

        <!-- Right -->

        <div
          class="
            flex
            items-center
            gap-4
          "
        >
          <Star
            :size="20"
            fill="currentColor"
            :class="task.color"
          />

          <button
            class="
              text-slate-400
            "
          >
            <Pencil :size="15" />
          </button>
        </div>
      </div>

      <div
        class="
          py-2
          text-xl
          text-slate-400
        "
      >
        ...
      </div>
    </div>
  </section>
</template>