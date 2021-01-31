<template>
  <div class="v-table_pagination">
    <div class="page" v-for="page in pages" :key="page">
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    filterCountry: {
      type: () => {},
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      usersPerPage: 3,
      pageNumber: 1,
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.products.length / 6);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.products.slice(from, to);
    },
  },
};
</script>

<style>
.v-table_pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.page {
  padding: 8px;
  border: solid 1px blue;
  margin-top: 30px;
  margin: 10px;
}
</style>
