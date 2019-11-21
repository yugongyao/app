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
                    <p><van-icon name="plus" style="vertical-align:small;"/> 关注</p>
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
                    <p><van-icon name="plus" style="vertical-align:small;" /> 关注</p>
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
                    <p><van-icon name="plus" style="vertical-align:small;" /> 关注</p>
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
    width: 100%;
    // margin: 10px 5%;
    padding: 0 10px;
    box-sizing: border-box;
    min-height: 170px;
    background-color: snow;
    border: 1px solid rgba(97, 96, 96, 0.24);
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
                border: 1px solid #eee;
                margin:0 10px;
            }
            span{
                position: absolute;
                &.nickname{
                    font-size: 15px;
                    color: #333;
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
                width: 50px;
                height: 26px;
                border: 1px #1989fa solid;
                border-radius: 3px;
                font-size: 12px;
                color: #1989fa;
                line-height: 30px;
            }
        }
    }
    
}
</style>