<template>
  <div class="res">
    <div id="call">
      <input
        v-model="inputValue"
        type="text"
        name="number"
        id="number"
        placeholder="Ваш номер телефона"
      />
      <button type="submit" @click="validation">Заказать звонок</button>
    </div>
    <div class="error" v-if="inputValidate">
      <p>Некорректные данные</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputCall",
  data() {
    return {
      inputValue: "",
      inputValidate: false,
    };
  },
  methods: {
    validation() {
      const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
      !this.inputValue.match(regPhone)
        ? (this.inputValidate = true)
        : (this.inputValidate = false);
      this.inputValue = "";
      return this.inputValidate;
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
.res{
  margin-bottom: 100px;
}
</style>
