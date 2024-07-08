<template>
  <div id="app">
    <CommonEditor/>
  </div>
</template>

<script>

import CommonEditor from "@/components/codeeditor.vue";

export default {
  name: 'App',
  components: {CommonEditor},

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  justify-content: center;
  height: 100%;

}
</style>


