<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "header",
});
</script>

<template>
  <div class="container-header">
    <router-link to="/">
      <img class="logotipo" src="../assets/logos/logotipo.jpg" alt="" />
    </router-link>
    <div class="buttons">
      <router-link to="/products">
        <button :class="$route.name == 'products' && 'selected'">
          Produtos
        </button>
      </router-link>
      <router-link to="/gallery">
        <button :class="$route.name == 'gallery' && 'selected'">Galeria</button>
      </router-link>
      <router-link to="/register">
        <button :class="$route.name == 'register' && 'selected'">
          Cadastro
        </button>
      </router-link>
    </div>
  </div>
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
