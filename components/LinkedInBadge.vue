<template>
    <div class="flex items-center justify-center">
        <div class="flex flex-col items-center justify-center max-w-xl">
            <div
                class="flex justify-center w-full py-2 md:py-5 rounded-t-xl"
                style="background: #39424f"
            >
                <nuxt-img
                    src="/images/linkedin.svg"
                    :width="$vuetify.breakpoint.smAndDown ? '100' : '150'"
                    :height="$vuetify.breakpoint.smAndDown ? '25' : '37.5'"
                    alt="LinkedIn"
                    title="LinkedIn"
                    style="
                        filter: invert(100%) sepia(0%) saturate(7500%)
                            hue-rotate(87deg) brightness(99%) contrast(104%);
                    "
                    provider="static"
                    class="select-none"
                />
            </div>
            <div
                class="flex flex-col items-center justify-center w-full p-5 bg-black rounded-b-xl"
            >
                <nuxt-img
                    class="rounded-full inline"
                    src="/images/avatar.jpg"
                    width="100"
                    height="100"
                    title="@emretepedev"
                    alt="@emretepedev"
                    provider="static"
                />
                <h1
                    class="my-4 text-lg md:text-xl font-bold"
                    style="color: #2c9dec"
                >
                    <a
                        href="https://www.linkedin.com/in/emretepedev/"
                        target="_blank"
                        class="px-2 my-2 text-center"
                    >
                        Emre Tepe
                    </a>
                </h1>
                <h2 class="text-sm md:text-xl text-center mb-3 md:mb-0">
                    Blockchain Developer at Bixos Incorporation
                </h2>
                <div
                    class="flex flex-col text-base md:text-lg sm:divide-x-2 sm:flex-row"
                >
                    <a
                        href="https://www.linkedin.com/company/bixosinc/"
                        target="_blank"
                        class="px-2 my-1 md:my-4 text-center"
                    >
                        Bixos Incorporation
                    </a>
                    <a
                        href="https://www.linkedin.com/school/esogu/"
                        target="_blank"
                        class="px-2 my-1 md:my-4 text-center"
                        style="color: #2c9dec"
                    >
                        Eskisehir Osmangazi University
                    </a>
                </div>
                <a
                    href="https://www.linkedin.com/in/emretepedev/"
                    target="_blank"
                    class="px-8 py-2 my-3 text-lg md:text-xl font-bold text-white border-2 rounded-full"
                    >View Profile</a
                >
            </div>
        </div>
    </div>
</template>

// for suppress $vuetify not found error
<script></script>
