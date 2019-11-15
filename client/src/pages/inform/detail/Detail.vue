<template>
  <div id="detail" >
    <p>detail{{id}}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  }
};
</script>

<style lang="scss" scoped>
#detail {
  position: absolute;
  top: 0px;
  bottom: 0px;
  background: red;
  width: 100%;
  z-index: 999;
}
</style>