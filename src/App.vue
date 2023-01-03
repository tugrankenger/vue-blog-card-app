<template>
  <app-header></app-header>
  <app-posts></app-posts>
  <app-new-post></app-new-post>
</template>

<script>
import Header from "./components/Header.vue"
import NewPost from "./components/NewPost.vue"
import Posts from "./components/Posts.vue"
export default{
  components:{
    appHeader: Header,
    appNewPost : NewPost,
    appPosts: Posts
  }
}
</script>
  
<style>

</style>