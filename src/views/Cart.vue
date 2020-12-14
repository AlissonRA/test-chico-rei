<template>
  <div v-if="!checkCartEmpty">
    <!-- Cart Section -->
    <div class="container space-1 space-md-2">
      <div class="row">
        <div class="col-lg-8 mb-7 mb-lg-0">
          <!-- Title -->
          <div
            class="d-flex justify-content-between align-items-end border-bottom pb-3 mb-7"
          >
            <h1 class="h3 mb-0">Carrinho</h1>
            <span>{{ cart.length }} items</span>
          </div>
          <!-- End Title -->

          <form>
            <!-- Product Content -->
            <div
              class="border-bottom pb-5 mb-5"
              v-for="product in cart"
              :key="product.id"
            >
              <div class="media">
                <div class="max-w-15rem w-100 mr-3">
                  <img
                    class="img-fluid"
                    :src="requireImg(product.img)"
                    alt="Image Description"
                  />
                </div>
                <div class="media-body">
                  <div class="row">
                    <div class="col-md-7 mb-3 mb-md-0">
                      <a class="h5 d-block" href="javascript:;">{{
                        product.name
                      }}</a>

                      <div class="d-block d-md-none">
                        <span class="h5 d-block mb-1">{{
                          product.price | currency
                        }}</span>
                      </div>

                      <div class="text-body font-size-1 mb-1">
                        <span>Gênero:</span>
                        <span>{{
                          product.gender === "male" ? " Masculino" : " Feminino"
                        }}</span>
                      </div>
                      <div class="text-body font-size-1 mb-1">
                        <span>Tamanho:</span>
                        <span> {{ product.size }}</span>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="row">
                        <div class="col-auto">
                          <select
                            @change="updateCart"
                            :data-id="product.id"
                            class="custom-select custom-select-sm w-auto mb-3"
                            :value="product.quantity"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </div>

                        <div class="col-auto">
                          <a
                            class="d-block text-body font-size-1 mb-1"
                            href="javascript:;"
                            @click="removeItem(product.id)"
                          >
                            <i
                              class="far fa-trash-alt text-hover-primary mr-1"
                            ></i>
                            <span class="font-size-1 text-hover-primary"
                              >Remove</span
                            >
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      class="col-4 col-md-2 d-none d-md-inline-block text-right"
                    >
                      <span class="h5 d-block mb-1">{{
                        product.price | currency
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Product Content -->

            <div class="d-sm-flex justify-content-end">
              <router-link class="font-weight-bold" to="/produtos">
                <i class="fas fa-angle-left fa-xs mr-1"></i>
                Continue Comprando
              </router-link>
            </div>
          </form>
        </div>

        <div class="col-lg-4">
          <div class="pl-lg-4">
            <!-- Order Summary -->
            <div class="card shadow-soft p-4 mb-4">
              <!-- Title -->
              <div class="border-bottom pb-4 mb-4">
                <h2 class="h3 mb-0">Resumo do Pedido</h2>
              </div>
              <!-- End Title -->

              <div class="border-bottom pb-4 mb-4">
                <div class="media align-items-center mb-3">
                  <span class="d-block font-size-1 mr-3">Subtotal</span>
                  <div class="media-body text-right">
                    <span class="text-dark font-weight-bold">{{
                      subtotal | currency
                    }}</span>
                  </div>
                </div>

                <div class="media align-items-center mb-3">
                  <span class="d-block font-size-1 mr-3">Frete</span>
                  <div class="media-body text-right">
                    <span class="text-dark font-weight-bold">{{
                      delivery | currency
                    }}</span>
                  </div>
                </div>

                <!-- Checkbox -->
                <div class="card shadow-none mb-3">
                  <div class="card-body p-0">
                    <div
                      class="custom-control custom-radio d-flex align-items-center small"
                    >
                      <input
                        v-model="delivery"
                        type="radio"
                        class="custom-control-input"
                        id="deliveryRadio1"
                        name="deliveryRadio"
                        :value="0"
                        checked
                      />
                      <label
                        class="custom-control-label ml-1"
                        for="deliveryRadio1"
                      >
                        <span class="d-block font-size-1 font-weight-bold mb-1"
                          >Grátis - Entrega Simples</span
                        >
                        <span class="d-block text-muted"
                          >Entrega de 5 a 6 dias úteis.</span
                        >
                      </label>
                    </div>
                  </div>
                </div>
                <!-- End Checkbox -->

                <!-- Checkbox -->
                <div class="card shadow-none">
                  <div class="card-body p-0">
                    <div
                      class="custom-control custom-radio d-flex align-items-center small"
                    >
                      <input
                        v-model="delivery"
                        type="radio"
                        :value="27.99"
                        class="custom-control-input"
                        id="deliveryRadio2"
                        name="deliveryRadio"
                      />
                      <label
                        class="custom-control-label ml-1"
                        for="deliveryRadio2"
                      >
                        <span class="d-block font-size-1 font-weight-bold mb-1"
                          >R$27.99 - Entrega Expressa</span
                        >
                        <span class="d-block text-muted"
                          >Entrega de 2 a 3 dias úteis.</span
                        >
                      </label>
                    </div>
                  </div>
                </div>
                <!-- End Checkbox -->
              </div>

              <div class="media align-items-center mb-3">
                <span class="d-block font-size-1 mr-3">Desconto</span>
                <div class="media-body text-right">
                  <span class="text-danger font-weight-bold">- {{
                    discount | currency
                  }}</span>
                </div>
              </div>

              <div class="media align-items-center mb-3">
                <span class="d-block font-size-1 mr-3">Total</span>
                <div class="media-body text-right">
                  <span class="text-dark font-weight-bold">{{
                    total | currency
                  }}</span>
                </div>
              </div>

              <div class="row mx-1">
                <div class="col px-1 my-1">
                  <a
                    class="btn btn-primary btn-block btn-pill transition-3d-hover"
                    href="javascript:;"
                    >Finalizar</a
                  >
                </div>
                <div class="col px-1 my-1">
                  <button
                    type="submit"
                    class="btn btn-soft-warning btn-block btn-pill transition-3d-hover"
                  >
                    <img
                      src="@/assets/img/logos/paypal.png"
                      width="70"
                      alt="PayPal logo"
                    />
                  </button>
                </div>
              </div>
            </div>
            <!-- End Order Summary -->

            <!-- Accordion -->
            <div id="shopCartAccordion" class="accordion card shadow-soft mb-4">
              <!-- Card -->
              <div class="card rounded">
                <div class="card-header card-collapse" id="shopCartHeadingOne">
                  <h3 class="mb-0">
                    <a
                      class="btn btn-link btn-block card-btn font-weight-bold collapsed"
                      href="javascript:;"
                      role="button"
                      data-toggle="collapse"
                      data-target="#shopCartOne"
                      aria-expanded="false"
                      aria-controls="shopCartOne"
                    >
                      Cupom?
                      <i
                        class="far fa-question-circle text-body ml-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-trigger="hover"
                        title="Cupom de Desconto"
                        data-content="Valid on full priced items only. Some products maybe excluded."
                      ></i>
                    </a>
                  </h3>
                </div>
                <div
                  id="shopCartOne"
                  class="collapse"
                  aria-labelledby="shopCartHeadingOne"
                  data-parent="#shopCartAccordion"
                >
                  <form class="js-validate p-4">
                    <div class="input-group input-group-pill mb-3">
                      <input
                        v-model="cupom"
                        type="text"
                        class="form-control"
                        name="name"
                        placeholder="Código"
                      />
                      <div class="input-group-append">
                        <button
                          type="button"
                          @click="checkCupom"
                          class="btn btn-block btn-primary btn-pill"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- End Card -->
            </div>
            <!-- End Accordion -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Cart Section -->
  </div>
  <div v-else>
    <!-- Cart Section -->
    <div class="container space-2 space-lg-3">
      <div class="w-md-80 w-lg-50 text-center mx-md-auto">
        <figure class="max-w-10rem max-w-sm-15rem mx-auto mb-3">
          <img
            class="img-fluid"
            src="@/assets/svg/illustrations/empty-cart.svg"
            alt="SVG"
          />
        </figure>
        <div class="mb-5">
          <h1 class="h2">Seu carrinho está vazio no momento</h1>
          <p>
            Antes de prosseguir com a finalização da compra, você deve adicionar
            alguns produtos ao seu carrinho de compras. Você encontrará muitos
            produtos interessantes em nossa página "Loja".
          </p>
        </div>
        <router-link
          class="btn btn-primary btn-pill transition-3d-hover px-5"
          to="/produtos"
          >Ir a Loja</router-link
        >
      </div>
    </div>
    <!-- End Cart Section -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { isEmpty, sumBy } from "lodash";
import { http } from "@/services";

export default {
  name: "Cart",
  data: () => ({
    delivery: 0,
    discount: 0,
    cupom: ""
  }),
  computed: {
    ...mapState({
      cart: state => state.cart
    }),
    checkCartEmpty() {
      return isEmpty(this.cart);
    },
    subtotal() {
      return sumBy(this.cart, "price_total");
    },
    total() {
      return this.subtotal + this.delivery - this.discount;
    }
  },
  methods: {
    ...mapActions(["updateItemCart", "deleteItemCart"]),
    checkCupom() {
      const discount = 20;

      http.get(`/cupom/${this.cupom}`).then(response => {
        if (response.data.valid) {
          this.discount = discount;
          this.$notify({
            message: "Oba, o desconto foi adicionado!",
            icon: "ni ni-fat-remove",
            type: "success"
          });
        } else {
          this.$notify({
            message: "Ops, você inseriu um cupom inválido!",
            icon: "ni ni-fat-remove",
            type: "danger"
          });
        }
      });
    },
    updateCart(event) {
      this.updateItemCart({
        id: event.target.dataset.id,
        quantity: event.target.value
      });
    },
    removeItem(id) {
      this.deleteItemCart(id);
    },
    requireImg(path) {
      return require("@/assets" + path);
    }
  }
};
</script>
