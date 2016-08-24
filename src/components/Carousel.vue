<template>
    <div class="swiper-container appSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in list">
                <a href="javascript:;">
                    <img :src="item.src" :style="{height:height}" alt="">
                </a>
            </div>
        </div>
        <div class="swiper-pagination" :class="classpage" v-if="showpage"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        ready: function() {
            let self = this;
            if(!(self.list && self.list.length === 0)) {
                self.renderSwiper();
            }
        },
        methods: {
            buildBackgroundUrl: function(url){
                return `url(${url})`;
            },
            renderSwiper:function() {
                let self = this;
                self.swiper = new Swiper(self.$el, {
                    direction: self.direction,
                    autoplay: self.autoplay,
                    speed: self.speed,
                    loop: self.loop,
                    autoplayDisableOnInteraction: self.autoplayDisableOnInteraction,
                    paginationClickable: true
                });
            }
        },
        props: {
            list: {
                type: Array,
                required: false
            },
            direction: {
                type: String,
                default: 'horizontal'
            },
            autoplay: {
                type: Number,
                default: 3000
            },
            speed: {
                type: Number,
                default: 600
            },
            loop: {
                type: Boolean,
                default: true
            },
            autoplayDisabelOnInteraction: {
                type: Boolean,
                default: false
            },
            showpage: {
                type: Boolean,
                default: true
            },
            height: {
                type: String,
                default: "200px"
            }
        },
        watch: {
            list: function(val){
                this.renderSwiper();
            }
        }
    }
</script>

<style lang="sass">
    .appSwiper {
        width:100%;
        .swiper-slide {
            text-align: center;
            background: #fff;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            background: center no-repeat;
            background-size: cover;

        a{display: block;}
            img{width: 100%;}
        }
    }

</style>