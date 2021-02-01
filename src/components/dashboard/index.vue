<template>
    <div>
        <!-- <div class="" style="width:100%; height:30px"></div> -->
        <v-row class="mt-10 mb-5">
            <v-col
                cols="12"
                sm="6"
                lg="3"
                class="center"
            >
                <stats-card icon="mdi-account" title="New Visits" :num="837912" icon_color="#40c9c6"/>
            </v-col>

            <v-col
                cols="12"
                sm="6"
                lg="3"
                class="center"
            >
                <stats-card icon="mdi-message-processing-outline" title="Messages" :num="99132" icon_color="#36a3f7"/>
            </v-col>

            <v-col
                cols="12"
                sm="6"
                lg="3"
                class="center"
            >
                <stats-card icon="mdi-currency-cny" title="Purchases" :num="8731" icon_color="#f4516c"/>
            </v-col>

            <v-col
                cols="12"
                sm="6"
                lg="3"
                class="center"
            >
                <stats-card icon="mdi-cart" title="Shoppings" :num="30041" icon_color="#34bfa3"/>
            </v-col>
        </v-row>
    <v-row>
        <v-col
            cols="12"
            lg="4"
        >
            <LineChartCard />
        </v-col>
        <v-col
            cols="12"
            lg="4"
        >
            <LineChartCard />
        </v-col>
        <v-col
            cols="12"
            lg="4"
        >
            <LineChartCard />
        </v-col>
    </v-row>
    </div>
</template>

<script>
import LineChartCard from '@/components/dashboard/LineChartCard'
import StatsCard from '@/components/dashboard/StatsCard'

export default {
    components: {
        LineChartCard,
        StatsCard
    },
    data () {
        return {
        }
    }
}
</script>

<style>
    .center {
        display: flex;
        justify-content: center;
        align-items: center; 
    }
</style>