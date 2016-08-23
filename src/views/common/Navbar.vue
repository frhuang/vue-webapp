<template>
    <nav class="app-nav">
        <div class="tab-bar">
            <a v-link="{name: 'home', exact: true }">
                <i class="icon"></i>
                <p>首页</p>
            </a>
            <a v-link="{path: '/cart' }">
                <i class="icon"></i>
                <p>购物车</p>
            </a>
            <a v-link="{ path: '/me'}">
                <i class="icon"></i>
                <p>我的</p>
            </a>
        </div>
    </nav>
</template>
<style lang="sass">
    .app-nav{
        z-index: 9999;
        position: fixed;
        bottom: 0;
        left:0;
        right: 0;
        width: 100%;
        background: #fff;
        &:before{
            content: " ";
            position: absolute;
            left: 0;
            top:0;
            width: 100%;
            height: 1px;
            border-top: 1px solid #d9d9d9;
            color: #d9d9d9;
            transform-origin: 0 0;
            transform: scaleY(.5);
        }
        .tab-bar{
            padding-top: 2px;
            width: 100%;
            height: 55px;
            text-align: center;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            justify-content: space-between;
            a{
                color: #5d656B;
                flex: 1;
                text-align: center;
                box-sizing: border-box;
                display: block;
                font-size: 14px;
                .icon{
                    font-size: 18px;
                    margin-bottom: 5px;
                    display: block;
                }
            }
        }
    }
</style>