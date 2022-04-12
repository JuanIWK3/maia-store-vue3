<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "index",
});
</script>

<template>
  <div class="container">
    <div class="category">Camisas</div>
    <div class="products">
      <div class="product">
        <img src="../assets/camisas/cru.png" alt="" />
        <div class="name">Cruzeiro</div>
      </div>
      <div class="product">
        <img src="../assets/camisas/cru.png" alt="" />
        <div class="name">Cruzeiro</div>
      </div>
      <div class="product">
        <img src="../assets/camisas/cru.png" alt="" />
        <div class="name">Cruzeiro</div>
      </div>
      <div class="product">
        <img src="../assets/camisas/cru.png" alt="" />
        <div class="name">Cruzeiro</div>
      </div>
      <div class="product">
        <img src="../assets/camisas/cru.png" alt="" />
        <div class="name">Cruzeiro</div>
      </div>
      <div class="product">
        <img src="../assets/camisas/cru.png" alt="" />
        <div class="name">Cruzeiro</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
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
