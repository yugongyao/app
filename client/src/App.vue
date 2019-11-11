<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app{
  .tab-bar{
    border: solid #ddd 2px;
    .tab-item{
      background: #ccc;
      color: #333;
    }
    .router-link-active{
      color: red;
    }
  }
}
</style>
