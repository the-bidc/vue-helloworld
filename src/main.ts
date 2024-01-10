import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



const app = createApp(App)
// app.config.globalProperties.$filters = {
//   limitString(str:string, size:number) {
//     if (str.length <= size) {
//       return str;
//     }
//     return str.slice(0, size) + '...';
//   },

// }


app.use(router)
// eslint-disable-next-line vue/multi-word-component-names
app.mount('#app')