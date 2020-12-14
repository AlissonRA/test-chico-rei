<template>
  <div>
    <!-- Hero Section -->
    <hero-section />
    <!-- End Hero Section -->

    <!-- Features Section -->
    <div class="border-bottom">
      <div class="container space-2">
        <div class="row">
          <div class="col-md-4 mb-7 mb-md-0">
            <!-- Contacts -->
            <div class="media">
              <figure class="w-100 max-w-8rem mr-4">
                <img
                  class="img-fluid"
                  src="@/assets/svg/icons/icon-4.svg"
                  alt="SVG"
                />
              </figure>
              <div class="media-body">
                <h4 class="mb-1">Suporte 24/7</h4>
                <p class="font-size-1 mb-0">
                  Contate-nos 24 horas por dia, 7 dias por semana.
                </p>
              </div>
            </div>
            <!-- End Contacts -->
          </div>

          <div class="col-md-4 mb-7 mb-md-0">
            <!-- Contacts -->
            <div class="media">
              <figure class="w-100 max-w-8rem mr-4">
                <img
                  class="img-fluid"
                  src="@/assets/svg/icons/icon-64.svg"
                  alt="SVG"
                />
              </figure>
              <div class="media-body">
                <h4 class="mb-1">1ª Troca Grátis</h4>
                <p class="font-size-1 mb-0">
                  Sua primeira troca é por nossa conta!
                </p>
              </div>
            </div>
            <!-- End Contacts -->
          </div>

          <div class="col-md-4">
            <!-- Contacts -->
            <div class="media">
              <figure class="w-100 max-w-8rem mr-4">
                <img
                  class="img-fluid"
                  src="@/assets/svg/icons/icon-65.svg"
                  alt="SVG"
                />
              </figure>
              <div class="media-body">
                <h4 class="mb-1">FRETE GRÁTIS</h4>
                <p class="font-size-1 mb-0">
                  Em todos os pedidos acima de R$150.
                </p>
              </div>
            </div>
            <!-- End Contacts -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Features Section -->

    <!-- Categories Section -->
    <div class="container space-2 space-lg-3">
      <!-- Title -->
      <div class="w-md-80 w-lg-40 text-center mx-md-auto mb-5 mb-md-9">
        <h2>Nossos principais produtos.</h2>
      </div>
      <!-- End Title -->

      <div class="row mb-2">
        <div class="col-md-4 mb-3">
          <!-- Card -->
          <div class="card border shadow-none d-block">
            <div class="card-body d-flex align-items-center p-0">
              <div class="w-65 border-right">
                <img
                  class="img-fluid"
                  src="@/assets/img/380x400/img3.jpg"
                  alt="Image Description"
                />
              </div>
              <div class="w-35">
                <div class="border-bottom">
                  <img
                    class="img-fluid"
                    src="@/assets/img/380x360/img8.jpg"
                    alt="Image Description"
                  />
                </div>
                <img
                  class="img-fluid"
                  src="@/assets/img/380x360/img7.jpg"
                  alt="Image Description"
                />
              </div>
            </div>
            <div class="card-footer text-center py-4">
              <h3 class="mb-1">Camisetas</h3>
              <span class="d-block text-muted font-size-1 mb-3">A partir de R$29.99</span>
              <router-link class="btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5" to="/produtos?c=t-shirts">
                Ver Tudo
              </router-link>
            </div>
          </div>
          <!-- End Card -->
        </div>

        <div class="col-md-4 mb-3">
          <!-- Card -->
          <div class="card border shadow-none d-block">
            <div class="card-body d-flex align-items-center p-0">
              <div class="w-65 border-right">
                <img
                  class="img-fluid"
                  src="@/assets/img/380x400/img4.jpg"
                  alt="Image Description"
                />
              </div>
              <div class="w-35">
                <div class="border-bottom">
                  <img
                    class="img-fluid"
                    src="@/assets/img/380x360/img6.jpg"
                    alt="Image Description"
                  />
                </div>
                <img
                  class="img-fluid"
                  src="@/assets/img/380x360/img5.jpg"
                  alt="Image Description"
                />
              </div>
            </div>
            <div class="card-footer text-center py-4">
              <h3 class="mb-1">Capas</h3>
              <span class="d-block text-muted font-size-1 mb-3"
                >A partir de R$29.99</span
              >
              <router-link
                class="btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5"
                to="/produtos?c=shoes"
                >Ver Tudo</router-link
              >
            </div>
          </div>
          <!-- End Card -->
        </div>

        <div class="col-md-4 mb-3">
          <!-- Card -->
          <div class="card border shadow-none d-block">
            <div class="card-body d-flex align-items-center p-0">
              <div class="w-65 border-right">
                <img
                  class="img-fluid"
                  src="@/assets/img/380x400/img2.jpg"
                  alt="Image Description"
                />
              </div>
              <div class="w-35">
                <div class="border-bottom">
                  <img
                    class="img-fluid"
                    src="@/assets/img/380x360/img4.jpg"
                    alt="Image Description"
                  />
                </div>
                <img
                  class="img-fluid"
                  src="@/assets/img/380x360/img3.jpg"
                  alt="Image Description"
                />
              </div>
            </div>
            <div class="card-footer text-center py-4">
              <h3 class="mb-1">Bonés</h3>
              <span class="d-block text-muted font-size-1 mb-3"
                >A partir de R$33.99</span
              >
              <router-link
                class="btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5"
                to="/produtos?c=accessories"
                >Ver Tudo</router-link
              >
            </div>
          </div>
          <!-- End Card -->
        </div>
      </div>
    </div>
    <!-- End Categories Section -->

    <!-- Products Section -->
    <div class="container space-2 space-lg-3">
      <!-- Title -->
      <div class="w-md-80 w-lg-40 text-center mx-md-auto mb-5 mb-md-9">
        <h2>Oque mais está vendendo</h2>
      </div>
      <!-- End Title -->

      <!-- Products -->
      <div class="row mx-n2 mx-sm-n3 mb-3">
        <div class="col-sm-6 col-lg-3 px-2 px-sm-3 mb-3 mb-sm-5" v-for="product in products" :key="product.id">
          <!-- Product -->
          <div class="card border shadow-none text-center h-100">
            <div class="position-relative">
              <img
                class="card-img-top"
                :src="requireImg(product.img)"
                alt="Image Description"
              />
            </div>

            <div class="card-body pt-4 px-4 pb-0">
              <div class="mb-2">
                <span class="d-inline-block text-body small font-weight-bold mb-1">{{ product.category }}</span>
                <span class="d-block font-size-1">
                  <router-link class="text-inherit" :to="{ name: 'products-show', params: { id: product.id } }">{{ product.name }}</router-link>
                </span>
                <div class="d-block">
                  <span class="text-dark font-weight-bold">{{ product.price | currency }}</span>
                </div>
              </div>
            </div>

            <div class="card-footer border-0 pt-0 pb-4 px-4">
              <button
                @click="buy(product.id)"
                type="button"
                class="btn btn-sm btn-outline-primary btn-pill transition-3d-hover"
              >
                Comprar
              </button>
            </div>
          </div>
          <!-- End Product -->
        </div>
      </div>
      <!-- End Products -->

      <div class="text-center">
        <a class="btn btn-primary btn-pill transition-3d-hover px-5" href="#"
          >Mais Produtos</a
        >
      </div>
    </div>
    <!-- End Products Section -->
  </div>
</template>

<script>
import HeroSection from "@/components/Home/HeroSection";

import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    HeroSection
  },
  computed: {
    ...mapState({
      products: state => state.products
    })
  },
  methods: {
    ...mapActions(["addCart"]),
    buy(id) {
      this.addCart({ id, quantity: 1 }).then(() => {
        this.$router.push({ name: "cart" });
      });
    },
    requireImg(path) {
      return require("@/assets" + path);
    }
  }
};
</script>
