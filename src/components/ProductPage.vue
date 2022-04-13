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
  <div>
    <img :src="camisa.image" alt="" />
    <p>{{ camisa.name }}</p>
  </div>
  <router-view />
</template>

<style></style>
