<template>
  <app-header></app-header>
  <app-new-post></app-new-post>
</template>

<script>
import Header from "./components/Header.vue"
import NewPost from "./components/NewPost.vue"

export default{
  components:{
    appHeader: Header,
    appNewPost : NewPost
  }
}
</script>
  
<style>

</style>