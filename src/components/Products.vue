<script lang="ts">
import { defineComponent } from "vue";
import { camisasImg } from "../assets";
import { Camisa } from "../interfaces";

export default defineComponent({
  name: "index",
  data() {
    return {
      camisas: camisasImg as Camisa[],
      text: "fodase",
    };
  },
});
</script>

<template>
  <div class="container">
    <div class="category">Camisas</div>
    <div class="products">
      <div class="product" v-for="(camisa, index) in camisas" :key="index">
        <img :src="camisas[index].image" alt="" />
        <div class="name">{{ camisas[index].name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  .category {
    padding: 8px;
    background: #ddd;
    border: 1px solid #ccc;
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 16px 0;

    .product {
      width: 200px;
      height: 200px;
      margin: 16px 8px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
