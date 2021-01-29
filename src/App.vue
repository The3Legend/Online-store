<template>
  <div id="app">
    <Navbar />
    <Frame/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Frame from "./components/Frame";
export default {
  name: "app",
  components: {
    Navbar,
    Frame,
  },
  data() {
    return {
      listItem:[
        
      ]
    };
  },
};
</script>

<style>
#app {
  position: relative;
  width: 1920px;
  height: 2797px;
  background: #ffffff;
}
</style>
