<template>
    <v-sheet
        :elevation="border"
        :color="color"
        height="108"
        width="260"
    >
        <div class="center_wrapper" style="height:100%;width:50%;float:left;">
            <div class="center_wrapper mr-2" :style="icon_box_style" @mouseover="handleEnter" @mouseout="handleLeave">
                <v-icon :color="my_icon_color" style="font-size:64px">{{icon}}</v-icon>
            </div>
        </div>
        <div class="center_wrapper" style="height:100%;width:50%;float:left;">
            <div>
                <div class="card-text">{{title}}</div>
                <count-to class="card-num" :endVal="num" :duration='2000'></count-to>
            </div>
        </div>
    </v-sheet>
</template>

<script>
import countTo from 'vue-count-to';

export default {
    components: {
        countTo
    },
    props: {
        color: String,
        icon_color: String,
        icon: String,
        title: String,
        num: Number,
        border: {
            type: String,
            default: "1"
        }
    },
    data () {
      return {
        icon_box_style: {
                backgroundColor: null,
                width:"70%",
                height: "70%",
                transition: "all 0.38s ease-out",
                borderRadius: "6px"
            },
        my_icon_color: this.icon_color
      }
    },
    methods: {
      handleEnter() {
        this.icon_box_style.backgroundColor = this.icon_color;
        this.my_icon_color = "white";
      },
      handleLeave() {
        this.icon_box_style.backgroundColor = null;
        this.my_icon_color = this.icon_color;
      }
    }
}
</script>

<style scoped> 
    .center_wrapper {
        display: flex;
        justify-content: center;
        align-items: center; 
    }

    .card-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 12px;
    }

    .card-num {
        font-weight: bold;
        font-size: 20px;
    }

</style>