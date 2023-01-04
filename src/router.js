import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'postList',
    component: ()=> import('./components/Posts.vue'),
    meta:{
      title: "Post List"
    }
  },
  {
    path:'/new-post',
    name:'newPost',
    component: ()=> import('./components/NewPost.vue'),
    meta:{
      title:"Add New Post"
    }
  },
  {
    path:'/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title}`
  next()
})

export default router