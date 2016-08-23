import './assets/css/main.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import RouterMap from './routers';
import AppVue from './App.vue';

const App = Vue.extend(AppVue);

Vue.use(VueRouter);
Vue.use(VueResource);

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