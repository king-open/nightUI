<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">
      <svg class="logo">
        <use xlink:href="#icon-moon"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<script lang="ts">
import {inject,Ref} from "vue";

export default {
  setup(){
    const menuVisible = inject<Ref<Boolean>>("menuVisible")
    const  toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
};
</script>
<style lang="scss" scoped>
$color:#007974;
.topnav {
  color:$color;
  background: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg{
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
