<template>
  <div id="footer">
    <div class="contact">
      <p class="contact-info">Контакты</p>
      <p>+7 (495) - 641 - 61 - 55</p>
      <p>Пн-Пт с 09:00 до 17:00 Сб-Вс: выходной</p>
    </div>
    <div class="footer-info">
      <p>Интернет магазин | Все права защищены © 2020</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer {
  width: 1920px;
  height: 306px;
  background-color: #f6f6f6;
  /* Inside Auto Layout */
  display: flex;
  flex-direction: column;
  margin-top: 380px;
}
.contact {
  position: relative;
  right: 90px;
  top: 70px;
  text-align: center;
  flex: 1 0 auto;
}
.footer-info {
  text-align: center;
  color: white;
  background-color: #222222;
  flex: 0 0 auto;
  padding-top: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
}
.contact-info {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}
</style>
