<template>
    <div class="detail">
        <main-header title="商品详情">
            <a href="javascript:history.back();" slot="left">
                <i class="icon">&#xe60b;</i>
            </a>
        </main-header>
        <div class="swiper-container goodSwiper" id="detailSwiper" v-if="!loading">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in list.images" track-by="$index">
                    <img :src="item" >
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <loading :show="loading"></loading>
    </div>
</template>

<script type="text/ecmascript-6">
    import MainHeader from './common/Header.vue';
    import Loading from '../components/Loading.vue';
    import Swiper from 'swiper';
    export default {
        data: function(){
            return {
                list        : [],
                loading     : true,
                showAside   : false,
                bottom      : 'bottom'
            }
        },
        route: {
            data: function() {
                var self = this;
                self.getAjaxData();
            },
            activate: function(transition) {
                transition.next();
            }
        },
        methods: {
            getAjaxData: function() {
                let self = this;
                self.$http.get('./src/data/detail.json')
                        .then(function(res) {
                            let data = res.data;
                            if(data.retcode == 1) {
                                self.list = data.data;
                                self.list.wuser = JSON.parse(data.data.wuser);
                            }
                            self.loading = false;
                            self.$nextTick( () => {
                                self.swipe();
                            })
                        });
            },
            swipe: function () {
                const swiperView = new Swiper('.goodSwiper', {
                    autoplay : 3000,
                    speed:600,
                    autoplayDisableOnInteraction : false,
                    loop : true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                });
            }
        },
        components: {
            MainHeader,
            Loading
        }
    }
</script>