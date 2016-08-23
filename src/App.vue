<template>
    <div id="app" v-cloak :class="{'change-page': changePage}">
        <div class="wrap">
            <router-view class="v"></router-view>
        </div>
        <navbar v-if="isIndex"></navbar>
        <loading :show="loadshow"></loading>
    </div>
</template>

<script>
    import Navbar from './views/common/Navbar.vue';
    import Loading from './components/Loading.vue';

    export default {
        data() {
            return{
                effect: 'next',
                isIndex: true,
                changePage: false,
                loadshow: false,
            }
        },
        route: {
            deactivate(transition) {
                transition.next();
            }
        },
        methods: {},
        components: {
            Navbar,
            Loading
        }
    }
</script>

<style>
    [v-cloak]{
        display: none;
    }
</style>

