import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('vuemastery-components')
  if(element != null) {
    Vue.component('product', {
      props: {
        premium: {
          type: Boolean,
          required: true
        }
      },
      template: `
        <div class="products">
        <h1>{{ title }}</h1>
        <h1>{{ title }}</h1>
        <h1>{{ nonComputedTitle() }}</h1>
        <h1>{{ nonComputedTitle() }}</h1>
        <p>{{ image }}</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>User is premium: {{ premium }}</p>
        <p>Shipping is: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants"
             :key="variant.variantId"
             class="color-box"
             :style="{backgroundColor: variant.variantColor}"
             @mouseover="updateProduct(index)">
        </div>

        <button v-on:click="addToCart">Add to cart</button>

        <div class="cart">
          <p>Cart ({{cart}})</p>
        </div>
        </div>
      `,
      data() {
        return {
          brand: 'Vue Mastery',
          selectedVariant: 0,
          product: 'Socks',
          details: ['80% cotton', '20% polyester', 'Gender-neutral'],
          variants: [
            { variantId: 2234, variantColor: 'green', variantImage: 'green.jpg', variantQuantity: 10 },
            { variantId: 2235, variantColor: 'blue', variantImage: 'blue.jpg', variantQuantity: 0 }
          ],
          cart: 0,
        }
      },
      methods: {
        addToCart() {
          this.cart += 1
        },
        updateProduct(index) {
          this.selectedVariant = index
          console.log(index)
        },
        nonComputedTitle() {
          console.log('computing displayTitle...')
          return this.brand + ' ' + this.product
        }
      },
      computed: {
        title() {
          console.log('computing title...')
          return this.brand + ' ' + this.product
        },
        image() {
          return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
          console.log('computing inStock...')
          return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
          if (this.premium) {
            return 'Free'
          }
          return 2.99
        }
      }
    })

    new Vue({
      el: element,
      data: {
        premium: true
      }
    })
  }
})
