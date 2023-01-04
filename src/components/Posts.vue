<template>
  <div class="container-fluid py-5">
    <h1 class="text-center">Content List</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div v-for="post in postList" :key="post.id" class="card m-1">
        <img class="card-img-top" :src="post.thumbnail" :alt="post.title">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.previewText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import axios from "axios"
  import axiosInstance from "../custom_axios"
  export default{
    data(){
      return{
        postList : []
      }
    },
    mounted(){
      axiosInstance.get('/records.json').then((res)=>{
        // console.log("resGet: ",res.data)
        let data = res.data
        for(let key in data){
          this.postList.push({...data[key], id:key})
        }
      })
      .catch(e=>{
        console.log(e)
      })
    }
  }
</script>

<style scoped>
  .card{
    width: 300px;
  }
  img{
    width: 100%;
    height: 200px;
  }
</style>