<template>
    <div>
      <ul>
          {{routeArr.home}}
      </ul>
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
        }
    }
</script>
