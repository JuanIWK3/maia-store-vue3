<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "header",
});
</script>

<template>
  <div class="container">
    <img class="logotipo" src="../assets/logos/logotipo.jpg" alt="" />
    <div class="buttons">
      <button class="selected">Home</button>
      <button>Produtos</button>
      <button>Galeria</button>
      <button>Cadastro</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
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
