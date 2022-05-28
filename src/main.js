import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './index.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')


// axios.interceptors.request.use(config=>{
//     console.log(config)
      
//     config.headers.Authorization=window.sessionStorage.getItem('token')

//     return config
//   })
  
