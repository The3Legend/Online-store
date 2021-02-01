<template>
  <div id="frame">
    <div class="respons">
      <div id="Chekbox">
        <div class="price" ref="priceControl">
          <div class="price-container">
            <div class="text-price">
              Цена(грн)
            </div>
            <div>
              <svg
                v-b-toggle.collapse-5
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="changPrice"
              >
                <path
                  d="M13.8897 8.15024L13.6678 8.38388C13.5207 8.53871 13.2823 8.53871 13.1352 8.38388L6.99999 1.92453L0.864777 8.38388C0.717716 8.53871 0.479267 8.53871 0.332175 8.38388L0.110296 8.15024C-0.0367652 7.99541 -0.0367652 7.74436 0.110296 7.58953L6.7337 0.616124C6.88076 0.461292 7.11921 0.461292 7.2663 0.616124L13.8897 7.58953C14.0368 7.74436 14.0368 7.99541 13.8897 8.15024Z"
                  fill="#262329"
                />
              </svg>
            </div>
          </div>
          <div class="range-slider">
            <b-collapse visible id="collapse-5">
              <input class="input" type="number" v-model="minPrice" />
              -
              <input class="input" type="number" v-model="maxPrice" />
            </b-collapse>
          </div>
        </div>
        <div class="materials" ref="materialControl">
          <div class="material">
            <div class="text-material">Материал</div>
            <div class="material-vector">
              <svg
                v-b-toggle.collapse-3
                class="m-1"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="changMaterial"
              >
                <path
                  d="M13.8897 8.15024L13.6678 8.38388C13.5207 8.53871 13.2823 8.53871 13.1352 8.38388L6.99999 1.92453L0.864777 8.38388C0.717716 8.53871 0.479267 8.53871 0.332175 8.38388L0.110296 8.15024C-0.0367652 7.99541 -0.0367652 7.74436 0.110296 7.58953L6.7337 0.616124C6.88076 0.461292 7.11921 0.461292 7.2663 0.616124L13.8897 7.58953C14.0368 7.74436 14.0368 7.99541 13.8897 8.15024Z"
                  fill="#262329"
                />
              </svg>
            </div>
          </div>
          <b-collapse class="checkbox-filt" visible id="collapse-3">
            <b-form-checkbox
              class="check-style"
              v-for="material in materials"
              :key="material.id"
              v-model="checkboxMaterial"
              :value="material.title"
               v-on:click="filterCheckProducts"
            >
              {{ material.title }}
            </b-form-checkbox>
          </b-collapse>
        </div>
        <div class="country" ref="coutryControl">
          <div class="country-selection">
            <div class="country-text">Страна производитель</div>
            <div>
              <svg
                v-b-toggle.collapse-4
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="changCountry"
              >
                <path
                  d="M13.8897 0.349759L13.6678 0.116123C13.5207 -0.0387085 13.2823 -0.0387085 13.1352 0.116123L6.99999 6.57547L0.864777 0.116123C0.717716 -0.0387087 0.479267 -0.0387087 0.332175 0.116123L0.110296 0.349759C-0.0367652 0.50459 -0.0367652 0.755638 0.110296 0.91047L6.7337 7.88388C6.88076 8.03871 7.11921 8.03871 7.2663 7.88388L13.8897 0.91047C14.0368 0.755638 14.0368 0.50459 13.8897 0.349759Z"
                  fill="#262329"
                />
              </svg>
            </div>
          </div>
          <b-collapse class="checkbox-filt" visible id="collapse-4">
            <b-form-checkbox
              class="check-style"
              v-for="country in countries"
              :key="country.id"
              v-model="checkboxCountry"
              :value="country.title"
              v-on:click="filterCheckProducts"
            >
              {{ country.title }}
            </b-form-checkbox>
          </b-collapse>
        </div>
      </div>
      <CardGrop :filterCheckProducts="filterCheckProducts" />
    </div>
    <ValidateForm />
    <Footer />
  </div>
</template>

<script>
import CardGrop from "./CardGrop/CardGrop"
import ValidateForm from "./ValidateForm/ValidateForm";
import Footer from "./Footer/Footer";
import { HTTP } from "../../axios/plagins";
export default {
  name: "Frame",
  components: {
    CardGrop,
    ValidateForm,
    Footer,
  },
  data() {
    return {
      allProducts: [],
      minPrice: 0,
      maxPrice: 999999,
      materials: [],
      countries: [],
      checkboxMaterial: [],
      checkboxCountry: [],
    };
  },
  created() {
    HTTP.get("http://95.217.16.207:1337/materials")
      .then((respons) => {
        this.materials = respons.data;
      })
      .catch((error) => {
        console.log(error);
      });
    HTTP.get("http://95.217.16.207:1337/manufacturers")
      .then((respons) => {
        this.countries = respons.data;
      })
      .catch((error) => {
        console.log(error);
      });
    HTTP.get()
      .then((respons) => {
        this.allProducts = respons.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    changMaterial: function() {
      this.responsMaterial = !this.responsMaterial;
      if (this.responsMaterial) {
        setTimeout(() => {
          this.$refs.materialControl.style.height = "80px";
        }, 200);
      } else
        setTimeout(() => {
          this.$refs.materialControl.style.height = "322px";
        }, 100);
    },
    changCountry: function() {
      this.responsCountry = !this.responsCountry;
      if (this.responsCountry) {
        setTimeout(() => {
          this.$refs.coutryControl.style.height = "45px";
        }, 100);
      } else
        setTimeout(() => {
          this.$refs.coutryControl.style.height = "129px";
        }, 100);
    },
    changPrice: function() {
      this.responsPrice = !this.responsPrice;
      if (this.responsPrice) {
        setTimeout(() => {
          this.$refs.priceControl.style.height = "60px";
        }, 100);
      } else
        setTimeout(() => {
          this.$refs.priceControl.style.height = "129px";
        }, 100);
    },
  },
  computed: {
    filterCheckProducts() {
      let filterProducts = this.allProducts;

      if (this.checkboxMaterial.length > 0) {
        filterProducts = filterProducts.filter((el) => {
          if (el.material !== null) {
            return this.checkboxMaterial.includes(el.material.title);
          }
        });
      }

      if (this.checkboxCountry.length > 0) {
        filterProducts = filterProducts.filter((el) => {
          return this.checkboxCountry.includes(el.manufacturer.title);
        });
      }

      return filterProducts.filter((el) => {
        return (
          Number(el.price) >= this.minPrice && Number(el.price) <= this.maxPrice
        );
      });
    },
  },
};
</script>

<style scoped>
#frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 100%;
  left: 0px;
  top: 166px;
}
.respons {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 1264px;
  height: 1200px;
  left: 328px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 100px 0px;
}
#Chekbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: static;
  width: 299px;
  height: 552.5px;
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 28px;
}
.price {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 15px 20px 20px;

  position: static;
  width: 299px;
  height: 128.5px;
  left: 0px;
  top: 0px;

  /* Grey 2 */

  background: #f6f6f6;
  border-radius: 3px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 22.5px 0px;
}
.price-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: static;
  width: 264px;
  height: 17px;
  left: 20px;
  top: 15px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.range-slider {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 198.66px;
  height: 30px;
  left: 0px;
  top: 26.5px;
}
.input {
  margin-top: 50px;
  width: 90px;
  height: 30px;
  border: 0;
}
.text-price {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}
.materials {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 15px 20px 20px;

  position: static;
  width: 299px;
  height: 332px;
  left: 0px;
  top: 151px;

  /* Grey 2 */

  background: #f6f6f6;
  border-radius: 3px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 22.5px 0px;
}
.material-vector {
  position: static;
  width: 8px;

  /* Dark (Main) */

  /* Inside Auto Layout */

  flex: none;

  flex-grow: 0;
}
.checkbox-filt {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 264px;
  height: 260px;
  left: 20px;
  top: 52px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 5px 0px;
}
.check-style {
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 5px 0px;
}
.material {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: static;
  width: 264px;
  height: 17px;
  left: 20px;
  top: 15px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 20px 0px;
}
.text-material {
  position: static;
  width: 75px;
  height: 17px;
  left: 0px;
  top: 0px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  /* Dark */

  color: #222222;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.country {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 15px 15px 20px;

  position: static;
  width: 299px;
  height: 129px;
  left: 0px;
  top: 505.5px;

  /* Grey 2 */

  background: #f6f6f6;
  border-radius: 3px;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 22.5px 0px;
}
.country-selection {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: static;
  width: 264px;
  height: 17px;
  left: 20px;
  top: 15px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.country-text {
  position: static;
  width: 173px;
  height: 17px;
  left: 0px;
  top: 0px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #222222;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
