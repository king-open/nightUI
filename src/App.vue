<template>
  <router-view />
</template>

<script lang="ts">

import {provide, ref} from "vue";
import  {router} from "./router";

export default {
  name:'app',
  setup(){
    const menuVisible = ref(false)
    provide("menuVisible",menuVisible)
    router.afterEach(() => {
      let width;
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  }
}
</script>
