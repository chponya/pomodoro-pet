<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import TimerCard from './components/TimerCard.vue'
import CurrentTaskCard from './components/CurrentTaskCard.vue'
import TaskList from './components/TaskList.vue'
import DailyProgress from './components/DailyProgress.vue'
import BottomNav from './components/BottomNav.vue'
</script>

<template>
  <main
    class="
      w-full
      h-full

      rounded-[24px]
      overflow-hidden

      bg-gradient-to-br
      from-pink-100
      via-purple-100
      to-pink-50

      shadow-xl
      shadow-purple-200/30

      px-4
      pt-3
      pb-2
    "
  >
    <div class="h-full min-h-0 flex flex-col gap-2">

      <HeaderBar />

      <TimerCard />

      <div class="flex flex-1 min-h-0 gap-2.5">

        <div
          class="
            flex-[1.45]
            min-h-0
            flex
            flex-col
            gap-2.5
          "
        >
          <CurrentTaskCard />
          <TaskList />
        </div>

        <div
          class="
            flex-[1.05]
            min-h-0
          "
        >
          <DailyProgress />
        </div>

      </div>

      <BottomNav />

    </div>
  </main>
</template>