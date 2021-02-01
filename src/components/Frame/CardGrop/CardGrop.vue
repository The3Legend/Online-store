<template>
  <div id="content">
    <div class="card-content">
      <div class="card-container">
        <div class="cards" v-for="product in paginatedUsers" :key="product.id">
          <div class="oneCard">
            <div class="imgCard">
              <img
                :src="`http://95.217.16.207:1337${product.image[0].url}`"
                alt="cat :)"
              />
            </div>
            <div class="descriptionCard">
              <div class="ProductDescriptionCard">
                <p class="title-card">{{ product.title }}</p>
              </div>
              <div class="descriptionProduct">
                <p class="material" v-if="product.material !== null">
                  Материал: {{ product.material.title }}
                </p>
                <p class="material" v-else>Материал: Не задано</p>
                <p class="manufacturer">
                  Производитель: {{ product.manufacturer.seo_url }}
                </p>
                <p class="country">
                  Страна производитель: {{ product.manufacturer.title }}
                </p>
              </div>
              <div class="price">
                <span class="start-price">{{ product.price }}p.</span>
                <span class="best-price" v-if="product.special_price !== null"
                  >{{ product.special_price }}p.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="v-table_pagination">
      <svg
        @click="pageClick(1)"
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.213735 7.99795L7.33096 14.7935C7.61492 15.0688 8.0741 15.0688 8.35806 14.7935L8.78703 14.3776C9.07099 14.1022 9.07099 13.657 8.78703 13.3817L2.60628 7.5L8.78099 1.61834C9.06495 1.343 9.06495 0.897774 8.78099 0.622437L8.35202 0.206503C8.06805 -0.0688342 7.60888 -0.0688342 7.32492 0.206503L0.207693 7.00205C-0.0702295 7.27739 -0.0702286 7.72261 0.213735 7.99795Z"
          fill="#222222"
        />
      </svg>

      <div
        class="page"
        v-for="page in pages"
        :key="page"
        @click="pageClick(page)"
        :class="{ 'page-selected': page === pageNumber }"
      >
        {{ page }}
      </div>
      <svg
        @click="pageClick(2)"
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78627 7.99795L1.66904 14.7935C1.38508 15.0688 0.925903 15.0688 0.64194 14.7935L0.212973 14.3776C-0.070991 14.1022 -0.070991 13.657 0.212973 13.3817L6.39372 7.5L0.219015 1.61834C-0.0649492 1.343 -0.0649492 0.897774 0.219015 0.622437L0.647981 0.206503C0.931945 -0.0688342 1.39112 -0.0688342 1.67508 0.206503L8.79231 7.00205C9.07023 7.27739 9.07023 7.72261 8.78627 7.99795Z"
          fill="#222222"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../../axios/plagins";
export default {
  name: "CardGrop",
   props: {
    filterCheckProducts: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      products: [],
      usersPerPage: 6,
      pageNumber: 1,
      something: "",
      massage: "",
      newArrayProducts: [],
    };
  },
  created() {
    HTTP.get()
      .then((response) => (this.products = response.data))
      .catch((error) => {
        console.log(error);
      })
  },
  computed: {
    pages() {
      return Math.ceil(this.filterCheckProducts.length / 6);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.filterCheckProducts.slice(from, to);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
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
  margin: 0px 0px;
}
.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 937px;
  height: 1050px;
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
.cards {
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
.oneCard {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 299px;
  height: 484px;
  left: 0px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 28px;
}
img {
  width: 302px;
  height: 302px;
}
.descriptionCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 30px;
  width: 299px;
  height: 194px;
  left: 0px;
  top: 290px;

  background: #ffffff;
}
.ProductDescriptionCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: static;
  width: 259px;
  left: 20px;
  top: 20px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.title-card {
  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 72.22%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  /* Dark */

  color: #222222;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.descriptionProduct {
  display: flex;
  flex-direction: column;
  padding: 0px;

  position: static;
  width: 259px;
  height: 54px;
  left: 0px;
  top: 55px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}
.manufacturer {
  position: static;
  left: 0%;
  right: 0%;
  top: 70.37%;
  bottom: 0%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;

  /* Grey */

  color: #b9b9b9;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 3px 0px;
}
.country {
  position: static;
  left: 0%;
  right: 0%;
  top: 70.37%;
  bottom: 0%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;

  /* Grey */

  color: #b9b9b9;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 3px 0px;
}
.material {
  position: static;
  left: 0%;
  right: 0%;
  top: 35.19%;
  bottom: 35.19%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;

  /* Grey */

  color: #b9b9b9;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 3px 0px;
}
.price {
  position: static;
  left: 29.15%;
  right: 29.15%;
  top: 86.11%;
  bottom: 0%;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 15px 0px;
}
.start-price {
  left: 29.15%;
  right: 51.54%;
  top: 86.11%;
  bottom: 0%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  /* Dark */

  color: #222222;
}
.best-price {
  left: 51.59%;
  right: 29.87%;
  top: 86.11%;
  bottom: 0%;
  text-decoration: line-through;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  /* Grey */

  color: #b9b9b9;
  margin-left: 20px;
}
.v-table_pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.page {
  margin-top: 30px;
  margin: 10px;
  color: #222222;
  border: solid 1px #e7e7e7;
  padding: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 50px;
  height: 50px;
  text-align: center;
}
.page:hover {
  background-color: #fbd656;
  color: #222222;
  cursor: pointer;
}
svg {
  margin-top: 22px;
  width: 70px;
  height: 20px;
  cursor: pointer;
}
.page-selected {
  background-color: #fbd656;
  color: #222222;
}
</style>
