import axios from "axios"

const instance = axios.create({
  baseURL: "https://vue-blog-card-app-default-rtdb.firebaseio.com"
})

// instance.headers.get["Accepts"] = "Application/json"
// instance.header.common["Authorization"] = "tugrankenger_key"

export default instance