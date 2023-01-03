<template>
  <div class="container py-5">
    <h3>Add New Post</h3>
    <hr>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Author</label>
        <input v-model="post.author" type="text" class="form-control" placeholder="Enter author name...">
      </div>
      <div class="form-group">
        <label>Title</label>
        <input v-model="post.title" type="text" class="form-control" placeholder="Enter title...">
      </div>
      <div class="form-group">
        <label>Image URL</label>
        <input v-model="post.thumbnail" type="text" class="form-control" placeholder="Enter image URL...">
      </div>
      <div class="form-group">
        <label>Preview text</label>
        <input v-model="post.previewText" type="text" class="form-control" placeholder="Enter preview text...">
      </div>
      <div class="form-group">
        <label>Content</label>
        <input v-model="post.content" type="text" class="form-control" placeholder="Enter content...">
      </div>
      <!-- <button @click="$router.push('/')" class="btn btn-danger">Cancel</button> -->
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
  export default{
    data(){
      return{
        post:{
          author: "",
          content: "",
          previewText: "",
          thumbnail: "",
          title:"",
          updateDate:""
        }
      }
    },
    methods:{
      onSubmit(){
        
      }
    }
  }
</script>

<style scoped>
  .form-group{
    margin-bottom: 1rem;
  }
</style>