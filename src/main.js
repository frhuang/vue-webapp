import './assets/css/main.scss';
import './assets/css/swiper.min.css'

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueLazyLoad from 'vue-lazyload';
import RouterMap from './routers';
import AppVue from './App.vue';

const App = Vue.extend(AppVue);

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueLazyLoad, {
    error: './src/assets/images/lazy.gif',
    loading: 'http://img.zcool.cn/community/01443f564897a432f87512f6eed753.gif',
    try: 3
})

Vue.config.devtools = true;

function preventDefault(e) { e.preventDefault(); }

const banTouchmove = function() {
    document.addEventListener('touchmove', preventDefault, false);
}
const restoreTouchmove = function() {
    document.removeEventListener('touchmove', preventDefault, false);
}

Vue.transition('next', {
    beforeEnter: function(el) {
        router.app.changePage = true;
        banTouchmove();
    },
    enter: function() {

    },
    afterEnter: function() {
        router.app.changePage = false;
        restoreTouchmove();
    }
});

Vue.transition('prev', {
    beforeEnter: function(el) {
        router.app.changePage = true;
        banTouchmove();
    },
    enter:function() {

    },
    afterEnter: function(el) {
        router.app.changePage = false;
        restoreTouchmove();
    }
})



let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnload: true,
    linkActiveClass: 'custom-active'
});

RouterMap(router);

router.start(App, '#app');