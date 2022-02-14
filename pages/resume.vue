<template>
    <div>
        <div class="flex justify-center mt-12">
            <v-container>
                <div class="flex items-center justify-center">
                    <div
                        class="flex flex-col items-center justify-center max-w-xl"
                    >
                        <div
                            class="flex justify-center w-full py-2 md:py-5 rounded-t-xl card-header"
                        >
                            <nuxt-img
                                src="/images/linkedin.svg"
                                :width="
                                    $vuetify.breakpoint.smAndDown
                                        ? '100'
                                        : '150'
                                "
                                :height="
                                    $vuetify.breakpoint.smAndDown
                                        ? '25'
                                        : '37.5'
                                "
                                alt="LinkedIn"
                                title="LinkedIn"
                                style="
                                    filter: invert(100%) sepia(0%)
                                        saturate(7500%) hue-rotate(87deg)
                                        brightness(99%) contrast(104%);
                                "
                                provider="static"
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
                                class="my-4 text-lg md:text-xl font-bold card-title"
                            >
                                <a
                                    href="https://www.linkedin.com/in/emretepedev/"
                                    target="_blank"
                                    class="px-2 my-2 text-center"
                                >
                                    Emre Tepe
                                </a>
                            </h1>
                            <h2
                                class="text-sm md:text-xl text-center mb-3 md:mb-0"
                            >
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
                                    class="px-2 my-1 md:my-4 text-center card-title"
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
                <Timeline :items="experience" />
                <DataTable :headers="data.headers" :items="data.skills" />
            </v-container>
        </div>
    </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

import {
    mdiNetworkStrengthOffOutline,
    mdiNetworkStrengthOutline,
    mdiNetworkStrength1Alert,
    mdiNetworkStrength1,
    mdiNetworkStrength2Alert,
    mdiNetworkStrength2,
    mdiNetworkStrength3,
} from '@mdi/js'

import data from '~/data/resume/resume.json'
import Timeline from '~/components/Timeline.vue'
import DataTable from '~/components/DataTable.vue'

export default defineComponent({
    // components
    components: { Timeline, DataTable },

    // setup
    setup() {
        // meta
        useMeta({
            title: 'Resume | ',
        })

        // return
        return {
            data,
            experience: [
                {
                    detail: 'Blockchain Developer',
                    name: 'Bixos Incorporation',
                    icon: mdiNetworkStrength3,
                    year: '2021 - Present',
                    type: 'Remote',
                    description:
                        'Cryptocurrency asset management and investment company.',
                },
                {
                    detail: 'Full Stack Developer',
                    name: 'LandIndex',
                    icon: mdiNetworkStrength2,
                    year: '2021 - Present',
                    type: 'Remote',
                    description:
                        'LandIndex provides digital land prices and analytics. Land investing basics, guides and resources.',
                },
                {
                    detail: 'Backend Developer',
                    name: 'Bixos Incorporation',
                    icon: mdiNetworkStrength2Alert,
                    year: '2021 - Present',
                    type: 'Remote',
                    description:
                        'Cryptocurrency asset management and investment company.',
                },
                {
                    detail: 'Backend Developer',
                    name: 'Q Digital Agency',
                    icon: mdiNetworkStrength1,
                    year: '2020 - 2021',
                    description:
                        'Getting online is easy. Succeeding online is a different story. You’ll need more than just a beautiful website to stand out these days. Online marketing solutions. Conversion-based web design coupled with a lead generating marketing plan, your online success is inevitable.',
                },
                {
                    detail: 'Intern',
                    name: 'E-Yaz',
                    icon: mdiNetworkStrength1Alert,
                    year: '2019 - 2020',
                },
                {
                    detail: 'Intern',
                    name: 'MyData',
                    icon: mdiNetworkStrengthOutline,
                    year: '2018 - 2019',
                },
                {
                    detail: 'Mathematics and Computer Science',
                    name: 'Eskisehir Osmangazi University',
                    icon: mdiNetworkStrengthOffOutline,
                    year: '2016 - 2022',
                },
            ],
        }
    },

    // head
    head: {},
})
</script>

<style>
.card-header {
    background: #39424f;
}
.card-title {
    color: #2c9dec;
}

.v-data-table-header th {
    white-space: nowrap !important;
}

.v-data-table-header th.hide-icon-to-sortable:hover .v-data-table-header__icon {
    display: inline-flex !important;
}
.v-data-table-header
    tr
    > th.hide-icon-to-sortable
    > .v-data-table-header__icon {
    display: none !important;
}

@media (max-width: 425px) {
    .v-data-footer__pagination {
        width: 100% !important;
    }

    .v-data-footer__icons-before,
    .v-data-footer__icons-after,
    .v-data-footer__select {
        margin: auto !important;
    }
}
</style>
