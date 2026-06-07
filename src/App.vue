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
      overflow-hidden
      rounded-[28px]
      bg-gradient-to-br
      from-pink-100
      via-purple-100
      to-pink-50
      shadow-[0_12px_28px_rgba(255,255,255,0.9)]

      px-4
      py-3
    "
  >
    <div class="h-full min-h-0 flex flex-col gap-2">
      <HeaderBar />

      <TimerCard />

      <CurrentTaskCard />

      <div class="flex flex-1 min-h-0 gap-3">
        <div class="flex-[1.32] min-h-0">
          <TaskList />
        </div>

        <div class="flex-1 min-h-0">
          <DailyProgress />
        </div>
      </div>

      <BottomNav />
    </div>
  </main>
</template>
