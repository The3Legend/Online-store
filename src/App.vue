<template>
  <div id="app">
    <Navbar />
    <Frame/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
import Frame from "./components/Frame/Frame";
export default {
  name: "app",
  components: {
    Navbar,
    Frame,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  position: relative;
  width: 100%;

  background: #ffffff;
}
</style>
