<template>
  <div class="content">
    <div><bigcard class="my-ref" :data-title="arr2[key]" :ref="arr2[key]" v-for="(item,key) in arr" :key = key :dataArr=item.data :title = item.title></bigcard>
    </div>
    <div class="top-btn">
        <transition name="fade" mode="out-in">
            <top-btn :title='title' @nav='goToNav' v-if="isShowNav"></top-btn>
        </transition>
    </div>
  </div>
</template>

<script>
import bigcard from "@/components/pages/home/bigcard"
import TopBtn from '@/components/module/TopBtn'
import ddd from "./homeContent.js"
export default {
    components:{bigcard,TopBtn},
    mounted() {
        this.arr = ddd.arr
        this.hot = this.$refs[this.arr2[0]]
        this.timer = null;
        this.navTimer = null;
        this.leader = 0;
        this.myRef = document.getElementsByClassName("my-ref");
        window.addEventListener("scroll", this.addEvent);
    },
    data () {
        return {
            arr:[],
            title: "hot",
            isShowNav: false,
            num: 0,
            navTimer:null,
            arr2:["hot","food","play","movie","test"]
        }
    },
    methods:{
         goToNav(ref) {
            const dom = this.$refs[ref];
            console.log(dom[0].$el.getBoundingClientRect().top)
            const top = dom[0].$el.getBoundingClientRect().top + this.scroll().top;
            window.scrollTo(0, top);
        },
        scroll() {
        if (window.pageXOffset != null) {
            //最新的浏览器
            return {
            left: window.pageXOffset,
            top: window.pageYOffset
            };
        } else if (document.compatMode == "CSS1Compat") {
            //有文档声明的
            return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
            };
        }
        return {
            //没有文档声明的
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        };
        },
        addEvent() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.leader = this.scroll().top;
            for (let j = 0; j < this.myRef.length; j++) {
            let domTop = this.myRef[j].getBoundingClientRect().top;
            let domHeight = this.myRef[j].getBoundingClientRect().height;
            // console.log(this.myRef[j].offsetTop)
            if (
                domTop <= 100 &&
                this.myRef[j].offsetTop + domHeight  > this.scroll().top
            ) {
                let title = this.myRef[j].dataset.title;
                this.title = title;
            }
            }
            if (this.myRef[0].getBoundingClientRect().top < 60) {
            this.isShowNav = true;
            } else {
            this.isShowNav = false;
            }
        }, 100);
        },
        goToDetail(){
            this.$router.push({
                name:'goodDetail'
            })
        }
    },
    beforeDestroy() {
        if (this.timer) {
        clearTimeout(this.timer);
        }
        if (this.navTimer) {
        clearInterval(this.navTimer);
        }
        window.removeEventListener("scroll", this.addEvent);
    }
}
</script>

<style scoped lang="scss">
.content{
    width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
