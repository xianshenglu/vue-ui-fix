<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <VfHelloWorld msg="Welcome to Your Vue.js App"/>
    <VfElSelect
      multiple
      v-model="values"
    >
      <el-option
        label="label1"
        value="1"
      ></el-option>
      <el-option
        label="label2"
        value="2"
      ></el-option>
    </VfElSelect>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      values: []
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
