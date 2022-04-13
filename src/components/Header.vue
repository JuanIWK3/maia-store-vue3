<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "header",
});
</script>

<template>
  <div class="container-header">
    <img class="logotipo" src="../assets/logos/logotipo.jpg" alt="" />
    <div class="buttons">
      <router-link to="/">
        <button class="selected">Home</button>
      </router-link>
      <router-link to="/products">
        <button>Produtos</button>
      </router-link>
      <router-link to="/galery">
        <button>Galeria</button>
      </router-link>
      <router-link to="/register">
        <button>Cadastro</button>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<style scoped lang="scss">
.container-header {
  display: flex;
  align-items: center;
  margin: 0 16px;

  height: 100px;
  justify-content: space-between;

  .logotipo {
    width: 100px;
    height: 100px;
  }

  .buttons {
    button {
      background: none;
      border: none;
      padding: 16px 0px;
      margin-left: 24px;

      &:hover {
        cursor: pointer;
        padding-top: 5px;
        border-top: 5px solid #ffaa00;
      }
      &.selected {
        padding-top: 5px;
        border-top: 5px solid #c78500;
      }
    }
  }
}
</style>
