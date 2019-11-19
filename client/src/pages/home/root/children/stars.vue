<template>
  <section id="starUsers">
    <van-swipe style="height: 170px;width: 100%;" vertical :autoplay="13000" :duration="12000" :show-indicators="false">
        <van-swipe-item>
            <div class="box" v-for="item in list1" :key="item.id">
                <div class="user">
                    <img :src="item.icon" alt="用户头像">
                    <span class="nickname">{{item.username}}</span>
                </div>
                <div class="sub">
                    <p><van-icon name="plus" style="vertical-align:middle;"/> 关注</p>
                </div>
            </div>
        </van-swipe-item>
        <van-swipe-item>
            <div class="box" v-for="item in list2" :key="item.id">
                <div class="user">
                    <img :src="item.icon" alt="用户头像">
                    <span class="nickname">{{item.username}}</span>
                </div>
                <div class="sub">
                    <p><van-icon name="close" /> 关注</p>
                </div>
            </div>
        </van-swipe-item>
        <van-swipe-item>
            <div class="box" v-for="item in list3" :key="item.id">
                <div class="user">
                    <img :src="item.icon" alt="用户头像">
                    <span class="nickname">{{item.username}}</span>
                </div>
                <div class="sub">
                    <p><van-icon name="close" /> 关注</p>
                </div>
            </div>
        </van-swipe-item>
    </van-swipe>
  </section>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

import {mapState} from 'vuex';

export default {
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem
    },
    computed: {
        ...mapState({
            starsList: state=>state.starUsers
        }),
        list1(){
            return this.starsList.slice(0,3)
        },
        list2(){
            return this.starsList.slice(3,6)
        },
        list3(){
            return this.starsList.slice(6)
        },
    },
    created(){
        this.$store.dispatch('requestStars')
    }
}
</script>

<style scoped lang="scss">
#starUsers{
    width: 90%;
    margin: 10px 5%;
    min-height: 170px;
    background-color: rgba(239, 231, 231, 0.7);
    .van-swipe-item{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .box{
        flex: 1;
        width: 100%;
        position: relative;
        padding: 4px 0;
        .user{
            width: 200px;
            height: 100%;
            position: absolute;
            img{
                display: inline-block;
                width: 45px;
                border-radius: 50%;
                margin:0 10px;
            }
            span{
                position: absolute;
                &.nickname{
                    color: #555;
                    left: 70px;
                    top: 15px;
                }
            }
        }
        .sub{
            float: right;
            height: 40px;
            margin-top: 5px;
            margin-right: 10px;
            p{
                text-align: center;
                width: 80px;
                height: 38px;
                border: 1px #dd6611 solid;
                border-radius: 10px;
                font-size: 14px;
                color: #dd6611;
                line-height: 38px;
            }
        }
    }
    
}
</style>