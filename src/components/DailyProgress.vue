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
        px-4
        py-3
      "
    >
      <h3 class="text-[13px] font-semibold text-violet-900">
        Сегодня: 2 / 6
      </h3>

      <div class="mt-2 h-1.5 rounded-full bg-white/40 overflow-hidden">
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
        px-4
        py-3
        flex-1
        min-h-0
        overflow-hidden
      "
    >
      <h3 class="mb-2 text-[13px] font-semibold text-violet-900">
        Мотивация на сегодня:
      </h3>

      <p class="text-[14px] font-semibold leading-5 text-violet-950">
        Маленькие шаги —
        большие результаты 💜
      </p>
    </section>
  </div>
</template>
