<template>
    <v-card class="overflow-y-auto" outlined ripple>
        <v-card-title>
            <v-spacer v-if="$vuetify.breakpoint.mdAndDown"></v-spacer>
            <v-icon>
                {{ mdiPoll }}
            </v-icon>
        </v-card-title>
        <v-card-subtitle class="text-center">
            <div class="text-caption grey--text text-uppercase">
                <strong>GitHub</strong> contributions in the last
                <strong>30 days</strong> (<strong>exclude</strong>
                GitLab etc.)
            </div>
        </v-card-subtitle>
        <v-sheet color="transparent">
            <v-sparkline
                :value="graphData"
                :gradient="gradients"
                :smooth="10"
                :padding="8"
                :line-width="1"
                stroke-linecap="round"
                gradient-direction="top"
                :fill="false"
                type="trend"
                auto-draw
                :show-labels="true"
                :auto-line-width="false"
                :auto-draw-duration="5000"
            >
            </v-sparkline>
        </v-sheet>
    </v-card>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { mdiPoll } from '@mdi/js'

export default defineComponent({
    // props
    props: {
        graphData: {
            type: Array,
            default() {
                return []
            },
        },
        gradients: {
            type: Array,
            default() {
                return []
            },
        },
    },
    setup() {
        // return
        return {
            mdiPoll,
        }
    },
})
</script>
