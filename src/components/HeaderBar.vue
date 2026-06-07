<script setup lang="ts">
import { PawPrint, Pin } from 'lucide-vue-next'
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div
        class="
          h-8
          w-8
          rounded-xl
          bg-white/40
          backdrop-blur-md
          flex
          items-center
          justify-center
        "
      >
        <PawPrint :size="16" />
      </div>

      <h1
        class="
          text-xl
          font-semibold
          text-violet-900
        "
      >
        Focus Nica
      </h1>
    </div>

    <button
      class="
        h-8
        w-8
        rounded-xl
        bg-white/40
        backdrop-blur-md
        flex
        items-center
        justify-center
      "
    >
      <Pin :size="14" />
    </button>
  </header>
</template>