import { createApp,defineComponent } from './vendor/vue.esm-browser.js';
const Root = defineComponent({
    name: 'Root',
    data(){
        return{
            counter: 0,
        };
    },
});
const app = createApp(Root);
const vm = app.mount('#app');
window.vm = vm;
