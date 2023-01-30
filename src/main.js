import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MasonryWall from '@yeger/vue-masonry-wall'
import 'animate.css'

let app = createApp(App);
app.config.ignoredElements = [/^ion-/];
app.use(router);
app.mount('#app');
app.use(MasonryWall);
// app.directive('lazyload', (el) => {

// });

// createApp(App).use(router).mount('#app')
