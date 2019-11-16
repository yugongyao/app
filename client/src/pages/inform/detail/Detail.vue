<template>
  <div id="detail">
    <int-list :isIntDetail="true"></int-list>
  </div>
</template>

<script>
import IntList from "./children/int-list";
export default {
  components:{
    [IntList.name]:IntList
  }
};
</script>

<style lang="scss" scoped>
#detail {
  position: absolute;
  top: 0px;
  bottom: 0px;
  background: #454545;
  width: 100%;
  z-index: 200;
  
}
</style>