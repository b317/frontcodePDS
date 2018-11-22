<template>
  <div>
    <leftTab v-bind:routeArr="routeArr"></leftTab>
  </div>
</template>

<script>
import leftTab from "@/components/module/leftTab"
export default {
  components:{
    leftTab
  },
  data () {
    return {
        routeArr:{
          home:"asd"
        }
    }
  }
}
</script>

<style scoped>

</style>
