import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'


createApp(App)
    .use(store)
    .use(VueAxios, axios)
    .mixin({
        methods: {
            link: function(target) {
                store.dispatch("get", target);
            },
            // get document coordinates of the element
            coords: function(elem) {
                let box = elem.getBoundingClientRect();
            
                return {
                top: box.top + window.pageYOffset,
                right: box.right + window.pageXOffset,
                bottom: box.bottom + window.pageYOffset,
                left: box.left + window.pageXOffset
                };
            }
        }
    })
    .directive('focus', {
        // When the bound element is inserted into the DOM...
        mounted: function(el) {
          // Focus the element
          el.focus()
        }
    })
    .mount('#app');
