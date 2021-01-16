<template>
    <v-toolbar dense height="30" flat outlined tile>
        <v-chip-group
            active-class="primary--text"
            column
        >
            <v-chip
                v-for="chip in chips"
                :key="chip.title"
                small
                close
                label
                @click="handleChipClick(chip)"
                @click:close="remove_chip(chip)"
            >
                {{chip.title}}
            </v-chip>
        </v-chip-group>
    </v-toolbar>
</template>

<script>

import { navigator } from '@/config/routes'
import conf from '@/config'


export default {
    data () {
        return {
            chips: [
                {title: '首页', path: '/home'},
            ]
        }
    },
    mounted () {
        this.$router.afterEach((to) => {
            if (this.find_chip(to.path) == null) {
                this.add_chip(to.path);
            }
        })
    },
    methods: {
        handleChipClick(chip) {
            this.$router.push(chip.path);
        },
        add_chip(path) {
            if (this.chips.length == conf.link_tags.max) {
                this.chips.splice(1, 1);
            }
            this.chips.push({
                title: navigator[path] != null ? navigator[path].title : "未定义",
                path: path
            })
        },
        find_chip(path) {
            for (let i = 0; i < this.chips.length; i++) {
                const chip = this.chips[i];
                if (chip.path == path) {
                    return chip;
                }
            }
            return null;
        },
        remove_chip(chip) {
            for (const key in this.chips) {
                if (this.chips[key] == chip) {
                    this.chips.splice(key, 1);
                    return;
                } 
            }
        }
    }
}
</script>