<!-- eslint-disable prettier/prettier  -->
<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <span class="top-bar-cart-link" @click="cartHandelToggle">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ cartTotal }})</span>
    </span>
  </header>
  <!-- eslint-disable-next-line prettier/prettier -->
  <SideBar v-if="cartOpen" :cart="cart" :cartHandelToggle="cartHandelToggle" :fixedPrice="fixedPrice"
    :cartDelete="cartDelete" />
  <router-view :inventory="inventory" :cart="cart" :fixedPrice="fixedPrice" :addToCart="addToCart" />
  <footer></footer>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import data from "@/food.json";

export default {
  components: {
    SideBar,
  },
  data() {
    return {
      inventory: data,
      cartOpen: false,
      cart: [],
    };
  },
  methods: {
    cartHandelToggle() {
      return (this.cartOpen = !this.cartOpen);
    },
    fixedPrice(price) {
      return price.toFixed(2);
    },
    addToCart(product) {
      if (!this.cart.includes(product)) {
        this.cart.push(product);
      }
    },
    cartDelete(product, index) {
      this.cart.map((value) => {
        if (value === product) {
          this.cart.splice(index, 1);
          return this.cart;
        }
      });
    },
  },
  computed: {
    cartTotal() {
      let total = 0;
      this.cart.map((prod) => {
        total += prod.quantity;
      });
      return total;
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
