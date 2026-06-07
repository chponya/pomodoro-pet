<script setup lang="ts">
import {
  Timer,
  Coffee,
  CupSoda
} from 'lucide-vue-next'
</script>

<template>
  <div class="flex gap-2">
    <button
      class="
        flex-1
        h-10
        rounded-xl
        bg-violet-200/70
        border border-violet-200
        flex items-center justify-center gap-1.5
        text-xs font-medium
      "
    >
      <Timer :size="14" />
      Фокус
    </button>

    <button
      class="
        flex-1
        h-10
        rounded-xl
        bg-white/40
        border border-white/30
        flex items-center justify-center gap-1.5
        text-xs font-medium
      "
    >
      <Coffee :size="14" />
      Короткий
    </button>

    <button
      class="
        flex-1
        h-10
        rounded-xl
        bg-white/40
        border border-white/30
        flex items-center justify-center gap-1.5
        text-xs font-medium
      "
    >
      <CupSoda :size="14" />
      Длинный
    </button>
  </div>
</template>