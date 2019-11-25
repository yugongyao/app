<template>
  <div class="app-tab border-bottom">
      <ul>
        <router-link v-for="(item,index) in list" :key="index" :to="item.link">{{item.title}}</router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: "app-tab",
  data() {
    return {
      list: [
        { title: "互动", link: "/inform/interact" },
        { title: "私信", link: "/inform/letter" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
    .app-tab{
        height: 44px;
        width: 100%;
        position: relative;
        ul{
            height: 44px;
            display: inline-block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            a{
                font-size: 13px;
                line-height: 44px;
                color: #999;
                float: left;
                padding: 0 15px;
                font-weight: bold;
                &.router-link-active {
                    color: #333;
                    border-bottom: 1px solid #333;
                }
            }

        }
    }
</style>