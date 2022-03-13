<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col items-center justify-center max-w-xl">
      <div
        class="flex justify-center w-full py-2 md:py-5 rounded-t-xl"
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
        class="flex flex-col items-center justify-center w-full p-5 bg-black rounded-b-xl"
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
            class="px-2 my-2 text-center"
            href="https://www.linkedin.com/in/emretepedev/"
            target="_blank"
          >
            Emre Tepe
          </a>
        </h1>
        <h2 class="mb-3 text-sm text-center md:text-xl md:mb-0">
          Blockchain Developer at Bixos Incorporation
        </h2>
        <div
          class="flex flex-col text-base md:text-lg sm:divide-x-2 sm:flex-row"
        >
          <a
            class="px-2 my-1 text-center md:my-4"
            href="https://www.linkedin.com/company/bixosinc/"
            target="_blank"
          >
            Bixos Incorporation
          </a>
          <a
            class="px-2 my-1 text-center md:my-4"
            href="https://www.linkedin.com/school/esogu/"
            style="color: #2c9dec"
            target="_blank"
          >
            Eskisehir Osmangazi University
          </a>
        </div>
        <a
          class="px-8 py-2 my-3 text-lg font-bold text-white border-2 rounded-full md:text-xl"
          href="https://www.linkedin.com/in/emretepedev/"
          target="_blank"
          >View Profile</a
        >
      </div>
    </div>
  </div>
</template>
