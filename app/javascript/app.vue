<template>
  <div id="app">
    <p @click="add">{{ message }}</p>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!",
      count: 0
    }
  },
  methods: {
    add() {
      this.count += 1
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
