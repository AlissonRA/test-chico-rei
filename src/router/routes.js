const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");

// Products
const IndexProducts = () => import(/* webpackChunkName: "products" */ "@/views/products/Index.vue");
const ShowProducts = () => import(/* webpackChunkName: "products" */ "@/views/products/Show.vue");

// Checkout
const Cart = () => import(/* webpackChunkName: "checkout" */ "@/views/Cart.vue");

const routes = [
  {
    path: "/",
    component: Home,
    name: "index"
  },
  {
    path: "/produtos",
    name: "products",
    component: IndexProducts,
    props: route => ({ category: route.query.c })
  },
  {
    path: "/produtos/produto/:id",
    name: "products-show",
    component: ShowProducts,
    props: true
  },
  {
    path: "/carrinho",
    name: "cart",
    component: Cart
  }
];

export default routes;
