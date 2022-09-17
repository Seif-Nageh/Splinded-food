<template>
  <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button class="cart-close" @click="cartHandelToggle">&times;</button>
      </h1>
      <div class="cart-body">
        <table class="cart-table">
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <!--  eslint-disable-next-line prettier/prettier -->
            <tr v-for="(          product, i          ) in this.cart" :key="i">
              <template v-if="product.quantity > 0">
                <td><i class="icofont-carrot icofont-3x"></i></td>
                <td>{{ product.name }}</td>
                <td>${{ fixedPrice(product.price.USD) }}</td>
                <td class="center">{{ product.quantity }}</td>
                <td>${{ fixedPrice(product.quantity * product.price.USD) }}</td>
                <td class="center">
                  <!-- eslint-disable-next-line prettier/prettier -->
                  <button class="btn btn-light cart-remove" @click="cartDelete(product, i)">
                    &times;
                  </button>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
        <p class="center" v-if="cart.length < 1"><em>No items in cart</em></p>
        <div class="spread">
          <span><strong>Total:</strong> {{ totalPrice() }} $</span>
          <button class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    cartHandelToggle: Function,
    cart: Array,
    fixedPrice: Function,
    cartDelete: Function,
  },
  methods: {
    totalPrice() {
      let total = 0;
      this.cart.map((prod) => {
        total += prod.price.USD * prod.quantity;
      });
      return total.toFixed(2);
    },
  },
};
</script>
