<template>
    <div class="homepage">
        <main-header title="vue-webapp"></main-header>
        <carousel id="swiperView" classpage="app-pagination" :list="imglist" v-if="!loading"></carousel>
        <section class="main-container" v-if="!loading">
            <ul class="itemBox">
                <li class="item" v-for="item in shoplist">
                    <a v-link="{name: 'goods', query: {id: item.id} }">
                        <img v-lazy="item.cover" alt="" :style="{width: item.imgwh + 'px', height: item.imgwh + 'px'}">
                        <div class="info">
                            <p class="title nowrap-multi">{{item.title}}</p>
                        </div>
                        <div class="msg">

                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <loading :show="loading"></loading>
    </div>
</template>
<script type="text/ecmascript-6">
    const imgData = [
        { src: "./src/assets/images/t1.jpg", id: '1'},
        { src: "./src/assets/images/t2.jpg", id: '2'},
        { src: "./src/assets/images/t3.jpg", id: '3'},
    ];
    import MainHeader from './common/Header.vue';
    import Carousel from '../components/Carousel.vue';
    import Loading from '../components/Loading.vue';


    export default {
        data: function() {
            return {
                isflag      : false,
                scroll      : true,
                activeIndex : 0,
                page        : 1,
                mark        : {up: false, down: false},
                tablist     : [],
                shoplist    : [],
                imglist     : [],
                globalModal : [],
                loading     : true
            }
        },
        ready: function() {
            let self = this;
            self.loadshow = true;
        },
        route: {
            data: function() {
                let self = this;
                self.imgSwiper();
                self.getAjaxData();
            }
        },
        methods: {
            getAjaxData: function() {
                let self = this;
                self.$http.get("./src/data/shoplist.json")
                        .then(function(res) {
                            self.scroll= true;
                            let data = res.data;
                            if(data.retcode == 1) {
                                self.loading = false;
                                let jsonData = data.data.rows;
                                let appW = document.querySelector('#app').style.width;
                                for(var i = 0; i < jsonData.length; i++) {
                                    jsonData[i].imgwh = appW /2 -20;
                                }
                                if(self.page == 1) {
                                    self.shoplist = jsonData
                                } else {
                                    self.shoplist = self.shoplist.concat(jsonData);
                                }
                            }
                        });

            },
            imgSwiper: function() {
                let self = this;
                self.$nextTick(() =>{ self.$set('imglist', imgData);});
            }
        },
        components: {
            Carousel,
            MainHeader,
            Loading
        }
    }
</script>

<style lang="sass">
    @import "../assets/css/home.scss";
</style>