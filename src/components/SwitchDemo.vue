<template>
  <div>
    <Switch v-model:value="bool"/>
  </div>
</template>

<script lang="ts">
import  Switch from '../lib/Switch.vue'
import {ref} from "vue";
export default {
  name: "SwitchDemo.vue",
  components:{Switch},
  setup(){
    const  bool = ref(false)
    return {bool}
  }

}
</script>

<style lang="scss" scoped>

</style>