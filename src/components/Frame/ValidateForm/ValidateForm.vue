<template>
  <div class="res">
    <div id="call">
      <input
        v-model="inputValue"
        type="text"
        name="number"
        id="number"
        placeholder="Введите ваш email"
      />
      <button type="submit" @click="validation">Заказать звонок</button>
    </div>
    <div class="error" v-if="inputValidate">
      <p>Некорректные данные</p>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../../axios/plagins";
export default {
  name: "ValidateForm",
  data() {
    return {
      inputValue: "",
      inputValidate: false,
    };
  },
  methods: {
    validation() {
      const regMail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!this.inputValue.match(regMail)) {
        this.inputValidate = true;
      } else {
        HTTP.post("http://95.217.16.207:1337/forms", {
          email: this.inputValue,
        })
          .then((respons) => console.log(respons))
          .catch((err) => console.log(err));

        this.inputValidate = false;
      }
      this.inputValue = "";
    },
  },
};
</script>

<style scoped>
#call {
  display: flex;
  width: 412px;
  height: 40px;
  margin-left: 120px;
}

input {
  border: 0px;
  background-color: #f6f6f6;
  width: 267px;
  height: 40px;
  padding: 20px;
}
button {
  background-color: #fbd656;
  border-radius: 3px;
  border: 0;
  width: 145px;
  height: 40px;
}
.error {
  margin-left: 120px;
  color: red;
}
.res {
  margin-bottom: 100px;
}
</style>
