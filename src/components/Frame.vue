<template>
  <div id="frame">
    <div class="respons">
      <CheckboxFilter />
      <CardGrop />
    </div>
  </div>
</template>

<script>
import CheckboxFilter from "./ChekboxFilter";
import CardGrop from './Card'
export default {
  name: "Frame",
  components: {
    CheckboxFilter,
    CardGrop
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
  width: 1920px;
  height: 2632px;
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
  height: 2086px;
  left: 328px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 100px 0px;
}
</style>
