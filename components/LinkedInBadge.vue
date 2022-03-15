<template>
  <div class="flex items-center justify-center">
    <div class="flex max-w-xl flex-col items-center justify-center">
      <div
        class="flex w-full justify-center rounded-t-xl py-2 md:py-5"
        style="background: #39424f"
      >
        <nuxt-img
          alt="LinkedIn"
          class="select-none"
          :height="$vuetify.breakpoint.smAndDown ? '25' : '37.5'"
          provider="static"
          src="/images/linkedin.svg"
          style="
            filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(87deg)
              brightness(99%) contrast(104%);
          "
          title="LinkedIn"
          :width="$vuetify.breakpoint.smAndDown ? '100' : '150'"
        />
      </div>
      <div
        class="flex w-full flex-col items-center justify-center rounded-b-xl bg-black p-5"
      >
        <nuxt-img
          alt="@emretepedev"
          class="inline rounded-full"
          height="100"
          provider="static"
          src="/images/avatar.jpg"
          title="@emretepedev"
          width="100"
        />
        <h1 class="my-4 text-lg font-bold md:text-xl" style="color: #2c9dec">
          <a
            class="my-2 px-2 text-center"
            href="https://www.linkedin.com/in/emretepedev/"
            target="_blank"
          >
            Emre Tepe
          </a>
        </h1>
        <h2 class="mb-3 text-center text-sm md:mb-0 md:text-xl">
          Blockchain Developer at Bixos Incorporation
        </h2>
        <div
          class="flex flex-col text-base sm:flex-row sm:divide-x-2 md:text-lg"
        >
          <a
            class="my-1 px-2 text-center md:my-4"
            href="https://www.linkedin.com/company/bixosinc/"
            target="_blank"
          >
            Bixos Incorporation
          </a>
          <a
            class="my-1 px-2 text-center md:my-4"
            href="https://www.linkedin.com/school/esogu/"
            style="color: #2c9dec"
            target="_blank"
          >
            Eskisehir Osmangazi University
          </a>
        </div>
        <a
          class="my-3 rounded-full border-2 px-8 py-2 text-lg font-bold text-white md:text-xl"
          href="https://www.linkedin.com/in/emretepedev/"
          target="_blank"
          >View Profile</a
        >
      </div>
    </div>
  </div>
</template>
