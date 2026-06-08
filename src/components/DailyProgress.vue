<script setup lang="ts">
const weekStats = [
  { day: 'Пн', value: 82, color: 'bg-purple-300' },
  { day: 'Вт', value: 60, color: 'bg-violet-300' },
  { day: 'Ср', value: 48, color: 'bg-pink-300' },
  { day: 'Чт', value: 76, color: 'bg-fuchsia-300' },
  { day: 'Пт', value: 38, color: 'bg-indigo-200' },
  { day: 'Сб', value: 56, color: 'bg-blue-200' },
  { day: 'Вс', value: 28, color: 'bg-sky-200' }
]
</script>

<template>
  <div class="flex h-full min-h-0 flex-col gap-2.5">
    <section
      class="
        h-[58px]
        bg-white/25
        backdrop-blur-xl
        border
        border-white/30
        rounded-[14px]
        px-3
        py-3
        shrink-0
      "
    >
      <h3 class="truncate text-[12px] font-semibold text-violet-900">
        Сегодня: 2 / 6
      </h3>

      <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-white/40">
        <div
          class="
            h-full
            w-[33%]
            rounded-full
            bg-gradient-to-r
            from-purple-400
            to-violet-300
          "
        />
      </div>
    </section>

    <section
      class="
        bg-white/25
        backdrop-blur-xl
        border
        border-white/30
        rounded-[14px]
        px-3
        pt-4
        pb-2.5
        flex-1
        min-h-0
        overflow-hidden
      "
    >
      <h3 class="text-[12px] font-semibold text-violet-900">
        Статистика
      </h3>

      <div class="mt-3 grid h-[calc(100%-28px)] grid-cols-7 items-end gap-1.5">
        <div
          v-for="item in weekStats"
          :key="item.day"
          class="flex h-full min-w-0 flex-col items-center justify-end gap-1.5"
        >
          <div class="flex h-full w-full items-end justify-center">
            <span
              class="w-full max-w-[16px] rounded-t-[5px] rounded-b-[2px] shadow-sm"
              :class="item.color"
              :style="{ height: `${item.value}%` }"
            />
          </div>

          <span class="text-[10px] font-semibold leading-none text-violet-900/55">
            {{ item.day }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
