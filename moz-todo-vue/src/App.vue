<template>
  <!-- <img src="./assets/logo.png"> -->
  <!-- <div>
    <p>
      If Element Plus is successfully added to this project, you'll see an
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <el-button type="primary">el-button</el-button>
  </div> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Wedding />
</template>

<script>
import Wedding from './components/Wedding.vue'

export default {
  name: 'App',
  components: {
    Wedding
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* margin: 0px; */
  /* padding: 0px; */
}
</style>
