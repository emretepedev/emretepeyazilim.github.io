<template>
  <div class="flex items-center justify-center">
    <div class="flex max-w-xl flex-col items-center justify-center">
      <div
        class="flex w-full justify-center rounded-t-xl py-2 md:py-5"
        style="background: #39424f"
      >
        <v-img
          alt="LinkedIn"
          class="select-none"
          contain
          :height="$vuetify.breakpoint.smAndDown ? '25' : '37.5'"
          src="images/linkedin.svg"
          style="
            filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(87deg)
              brightness(99%) contrast(104%);
          "
          title="LinkedIn"
          :width="$vuetify.breakpoint.smAndDown ? '100' : '150'"
        />
      </div>
      <div
        class="flex w-full flex-col items-center justify-center rounded-b-xl bg-neutral-900 p-5"
      >
        <v-img
          alt="@emretepedev"
          class="border-gradient-br-blue-green-gray-900 inline rounded-full border border-solid border-transparent"
          height="100"
          src="images/avatar.png"
          title="@emretepedev"
          width="100"
        />
        <h1 class="my-4 text-lg font-bold md:text-xl" style="color: #2c9dec">
          <a
            class="my-2 px-2 text-center"
            href="https://linkedin.in/in/emretepedev/"
            target="_blank"
          >
            Emre Tepe
          </a>
        </h1>
        <h2 class="mb-3 text-center text-sm md:mb-0 md:text-xl">
          Blockchain Developer
        </h2>
        <a
          class="my-3 rounded-full border-2 px-8 py-2 text-lg font-bold text-white md:text-xl"
          href="https://linkedin.in/in/emretepedev/"
          target="_blank"
          >View Profile</a
        >
      </div>
    </div>
  </div>
</template>
