// data
const products = [
  { id: 1, description: "Yeezy 700 V3 Arzareth", price: 200, img: 'assets/img/700-V3-azareth.jpg'},
  { id: 2, description: 'Yeezy 700 V1 Utility Black', price: 300, img: 'assets/img/adidas-yeezy-boost-700-v2-utility-black.jpg'},
  { id: 3, description: 'Yeezy 700 V2 Static', price: 300, img: 'assets/img/700-V2-static.jpg'},
  { id: 4, description: 'Yeezy 700 V1 Carbon Blue', price: 300, img: 'assets/img/700-WR.jpg'},
  { id: 5, description: 'Yezy 500 Black', price: 200, img: 'assets/img/500-BLACK.jpg'},
  { id: 6, description: 'Yeezy 500 Blush', price: 200, img: 'assets/img/500-BLUSG.jpg'},
  { id: 7, description: 'Yeezy 500 Salt', price: 200, img: 'assets/img/500-SALT.jpg'},
  { id: 8, description: 'Yeezy 350 Zebra', price: 220, img: 'assets/img/350-ZEBRA.jpg'},
  { id: 9, description: 'Yeezy 350 Cinder', price: 220, img: 'assets/img/350-CB.jpg'},
  { id: 10, description:'Yeezy 350 Light', price: 220, img: 'assets/img/350-HS.jpg'},
  { id: 11, description:'Yeezy 350 Tail Light', price: 220, img: 'assets/img/350-OR.jpg'},
  { id: 12, description:'Yeezy Slider Core', price: 60, img: 'assets/img/Slide-CORE.jpg'},
  { id: 13, description:'Yeezy Foam Runner Whithe', price: 80, img: 'assets/img/FOAM-W.jpg'},
  { id: 14, description:'Yeezy Foam Runner Blue/Black', price: 80, img: 'assets/img/FOAM-B.jpg'},
  { id: 15, description:'Yeezy 380 Mist', price: 230, img: 'assets/img/380.jpg'},
]; 

const Home = {
  template: '#home',
  name: 'Home',
  data: () => {
    return {
      products,
      searchKey: '',
      cart: []
    }
  },
  computed: {
    filteredList(){
      return this.products.filter((product) => {
        return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
      })
    },
    cartTotalAmount(){
      let total = 0;
      for (let item in this.cart){
        total = total + (this.cart[item].quantity * this.cart[item].price)
      }
      return total;
    },
    itemTotalAmount(){
      let itemTotal = 0;
      for (let item in this.cart){
        itemTotal = itemTotal + (this.cart[item].quantity);          
      }
      return itemTotal;
    }
  },
  methods: {
    addToCart(product){
      // check if already in array
      for (let i = 0; i < this.cart.length; i++){
        if (this.cart[i].id === product.id) {
          return this.cart[i].quantity++
        }
      }
      this.cart.push({
        id: product.id,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1
      })
    },
    cartPlusOne(product){
      product.quantity = product.quantity + 1;
    },
    cartMinusOne(product, id){
      if (product.quantity == 1) {
        this.cartRemoveItem(id);
      } else {
        product.quantity = product.quantity -1;
      }
    },
    cartRemoveItem(id){
      this.$delete(this.cart, id)
    }
  }
}
// router
const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'Home' },
  ]
})

const vue = new Vue({
  router
}).$mount('#app');
