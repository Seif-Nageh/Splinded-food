<!-- eslint-disable prettier/prettier  -->
<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <CardComp v-for="      product      in this.inventory" :key="product.id" :product="product" :fixedPrice="fixedPrice"
        :addToCart="addToCart" />
    </div>
  </main>
</template>
<script>
import CardComp from "@/components/CardComp.vue";
export default {
  components: {
    CardComp,
  },
  // eslint-disable-next-line prettier/prettier
  props: [ "inventory", "fixedPrice", "addToCart", ],
};
</script>
