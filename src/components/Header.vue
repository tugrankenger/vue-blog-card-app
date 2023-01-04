<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow px-4">
    <a href="javascript:void(0)" class="navbar-brand">Axios</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto">
        <router-link 
        tag="li"
        class="nav-item"
        exact
        to="/"
        >
        <a href="javascript:void(0)" class="nav-link">Content List</a>
      </router-link>
        <router-link 
        tag="li"
        class="nav-item"
        exact
        to="/new-post"
        >
        <a href="javascript:void(0)" class="nav-link">Add New Post</a>
      </router-link>
    </ul>
    </div>
  </nav>
</template>

<style scoped>
  .router-link-active{
    background-color: rgb(86, 125, 255);
  }
  .router-link-active .nav-link{
    color: #fff;
  }
  a{
    text-decoration: none;
  }
</style>