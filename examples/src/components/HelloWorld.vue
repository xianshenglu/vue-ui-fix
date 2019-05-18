<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vf-hello-world></vf-hello-world>
    <vf-el-select
      multiple
      collapse-tags
      v-model="values"
    >
      <el-option
        v-for="({value,label}) in options"
        :key="value"
        :label="label"
        :value="value"
      ></el-option>
    </vf-el-select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      options: [
        { label: 'option1', value: 1 },
        { label: 'option2', value: 2 },
        { label: 'option3', value: 3 },
        { label: 'option4', value: 4 }
      ],
      values: []
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
