<script lang="ts">
import { defineComponent } from "vue";
import { camisasImg } from "../assets";
import { Camisa } from "../interfaces";

export default defineComponent({
  name: "product-page",
  data() {
    const camisa: Camisa =
      camisasImg[parseInt(this.$route.params.id as string)];
    return {
      camisa,
    };
  },
});
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="image">
        <img :src="camisa.image" alt="" />
      </div>
      <div class="content">
        <h1>{{ camisa.name }}</h1>
        <p>{{ camisa.description }}</p>
        <p>R${{ camisa.price }}</p>
        <hr />
        Tamanhos:
        <ul>
          <li v-for="(size, index) in camisa.sizes" :key="index">{{ size }}</li>
        </ul>
        <hr />
        <button>Adicionar ao carrinho</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
  }
}
.image {
  margin-right: 24px;
  img {
    height: 300px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  width: 300px;

  button {
    height: max-content;
    background: #000;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      padding: 8px 12px;
      border: 1px solid #000;
      margin: 4px;
      cursor: pointer;

      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
}
</style>
