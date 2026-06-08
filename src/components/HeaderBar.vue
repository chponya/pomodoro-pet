<script setup lang="ts">
import {
  Bell,
  Pin
} from 'lucide-vue-next'
</script>

<template>
  <header class="flex items-center justify-between">
    <button
      class="
        h-9
        w-9
        rounded-xl
        bg-white/40
        backdrop-blur-md
        flex
        items-center
        justify-center
        shadow-sm
      "
    >
      <Bell :size="16" />
    </button>

    <button
      class="
        h-9
        w-9
        rounded-xl
        bg-white/40
        backdrop-blur-md
        flex
        items-center
        justify-center
        shadow-sm
      "
    >
      <Pin :size="16" />
    </button>
  </header>
</template>
