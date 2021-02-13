import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/components/layaout/dashboard';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Dashboard
        }
    ]
})

export default router