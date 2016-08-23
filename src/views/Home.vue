<template>
    <div class="homepage">
        <carousel id="swiperView" classpage="app-pagination" :list="imglist"></carousel>
    </div>
</template>
<script>
    const imgData = [
        { src: "./src/assets/images/t1.jpg", id: '1'},
        { src: "./src/assets/images/t2.jpg", id: '2'},
        { src: "./src/assets/images/t3.jpg", id: '3'},
    ];
    import Carousel from '../components/Carousel.vue';

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
                self. ();
            }
        },
        methods: {
            imgSwiper: function() {
                let self = this;
                self.$nextTick(() =>{
                    self.$set('imglist', imgData);
                });
            }
        },
        components: {
            Carousel
        }
    }
</script>