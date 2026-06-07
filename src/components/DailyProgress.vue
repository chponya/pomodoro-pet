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
      px-3
      py-2
    "
  >
    <!-- Header -->

    <div class="flex items-center justify-between mb-3">
      <h3
        class="
          text-sm
          font-semibold
          text-violet-900
        "
      >
        Сегодня
      </h3>

      <span
        class="
          text-[11px]
          text-slate-400
        "
      >
        16 мая
      </span>
    </div>

    <!-- Rewards -->

    <div class="flex justify-between gap-2 mb-3">

      <div
        class="
          h-10
          w-10
          rounded-2xl
          bg-white/30
          border border-white/30
          flex items-center justify-center
        "
      >
        <div
          class="
            h-6
            w-6
            rounded-full
            bg-yellow-300
          "
        />
      </div>

      <div
        class="
          h-12
          w-12
          rounded-2xl
          bg-white/30
          border border-white/30
          flex items-center justify-center
        "
      >
        <div
          class="
            h-6
            w-6
            rounded-full
            bg-pink-300
          "
        />
      </div>

      <div
        class="
          h-12
          w-12
          rounded-2xl
          bg-white/30
          border border-white/30
          flex items-center justify-center
        "
      >
        <div
          class="
            h-6
            w-6
            rounded-full
            bg-purple-300
          "
        />
      </div>

      <div
        class="
          h-12
          w-12
          rounded-2xl
          bg-white/30
          border border-white/30
          flex items-center justify-center
        "
      >
        <div
          class="
            h-6
            w-6
            rounded-full
            bg-green-300
          "
        />
      </div>

      <button
        class="
          h-12
          w-12
          rounded-2xl
          border-2
          border-dashed
          border-violet-200
          flex
          items-center
          justify-center
          text-violet-400
          text-xl
        "
      >
        +
      </button>

    </div>

    <!-- Progress -->

    <div
      class="
        text-xs
        text-violet-950
        mb-2
      "
    >
      Циклов завершено: 2 / 6
    </div>

    <div
      class="
        h-1.5
        rounded-full
        bg-white/40
        overflow-hidden
      "
    >
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
</template>