<template>
  <div id="content">
    <div class="card-content">
      <div class="card-container">
        <div class="card" v-for="product in products" :key="product.id">
          <h1>{{ product.title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CardGrop",
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios
      .get("http://95.217.16.207:1337/products")
      .then((response) => (this.products = response.data));
  },
  methods: {
    btn: function() {
      this.products.forEach((el) => {
          console.log(el);
      });
    },
  },
};
</script>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 937px;
  height: 2086px;
  left: 327px;
  top: 0px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 28px;
}
.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 937px;
  height: 1996px;
  left: 0px;
  top: 0px;



  flex: none;
  order: 0;
  flex-grow: 0;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 1100px;
  height: 484px;
  left: 0px;
  top: 504px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 20px 0px;
}
.card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 299px;
  height: 484px;
  left: 0px;
  top: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 20px 13px;
}
</style>
