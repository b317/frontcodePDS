<template>
    <div>
        <el-menu
        default-active="1"
        class="el-menu-vertical-demo left-tab"
        active-text-color="#000"
        >
        <el-menu-item class="left-tab-item" v-for="(item,index) of routeArr" :key ="index" :index="index" @click="click(index)">
            <span slot="title">{{item}}</span>
        </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        mounted(){
            console.log(this.routeArr)
        },
        props:{
            routeArr: {
                type: Object,
            },
        },
        data() {
            return {
            }
        },
        methods:{
            click(a){
                console.log(a)
            }
        }
    }
</script>
<style scoped>
@import '../../css/leftTab.scss';
</style>

