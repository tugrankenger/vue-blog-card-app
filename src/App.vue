<template>
  <app-header></app-header>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue"
export default{
  components:{
    appHeader: Header,
  }
}
</script>
  
<style>

</style>