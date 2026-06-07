<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import ModeSwitcher from './components/ModeSwitcher.vue'
import TimerCard from './components/TimerCard.vue'
import CurrentTaskCard from './components/CurrentTaskCard.vue'
import TaskList from './components/TaskList.vue'
import DailyProgress from './components/DailyProgress.vue'
import BottomNav from './components/BottomNav.vue'
</script>

<template>
  <main
    class="
      w-[420px]
      h-[700px]
      overflow-hidden
      bg-gradient-to-br
      from-pink-100
      via-purple-100
      to-pink-50
      p-4
    "
  >
    <div class="h-full flex flex-col gap-2">

      <HeaderBar />

      <ModeSwitcher />

      <TimerCard class="flex-none" />

      <CurrentTaskCard />

      <TaskList class="flex-1 min-h-0" />

      <DailyProgress />

      <BottomNav />

    </div>
  </main>
</template>