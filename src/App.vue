<template>
  <div id="nav">
    <router-link to="/"></router-link>
    <router-view></router-view>
<!--      <router-link to="/" ></router-link>-->
  </div>
</template>

<script>
export default {
    name: 'APP',

}

</script>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/icon/iconfont.css";
@import "assets/css/select2.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
