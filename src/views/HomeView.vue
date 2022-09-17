<!-- eslint-disable prettier/prettier  -->
<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">
      <h2>Recommended</h2>

      <div class="recommended">
        <CardComp v-for="  product   in this.inventory.slice(0, 3)" :key="product.id" :product="product"
          :fixedPrice="fixedPrice" :addToCart="addToCart" />
      </div>
    </main>
  </div>
</template>

<script>
import CardComp from "@/components/CardComp.vue";
export default {
  // eslint-disable-next-line prettier/prettier
  props: [ "inventory", "cart", "fixedPrice", "addToCart" ],
  components: {
    CardComp,
  },
};
</script>
