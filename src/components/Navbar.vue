<template>
  <div id="navbar">
    <div class="logo">LOGO TYPE</div>
    <div class="logo-text">Интернет-магазин бытовых и пищевых товаров</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

#navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 349px;
  height: 57px;
  left: 700px;
  top: 20px;
  margin: 50px 0px;
}
.logo {
  position: static;
  left: 24.5%;
  right: 24.5%;
  top: 0%;
  bottom: 40.35%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #262329;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 6px;
}
.logo-text {
  position: static;
  left: 0%;
  right: 0%;
  top: 70.18%;
  bottom: 0%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #222222;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 6px;
  width: 349px;
}
</style>
