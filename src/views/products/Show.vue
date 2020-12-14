<template>
  <div>
    <!-- Hero Section -->
    <div class="container space-top-1 space-top-sm-2">
      <div class="row">
        <div class="col-lg-7 mb-7 mb-lg-0">
          <div class="pr-lg-4">
            <div class="position-relative">
              <!-- Main Slider -->
              <div id="heroSlider" class="js-slick-carousel border rounded">
                <div class="js-slide">
                  <img
                    class="img-fluid w-100 rounded"
                    :src="product.img ? requireImg(product.img) : ''"
                    alt="Image Description"
                  />
                </div>
              </div>
              <!-- End Main Slider -->
            </div>
          </div>
        </div>

        <!-- Product Description -->
        <div class="col-lg-5">
          <!-- Rating -->
          <div class="d-flex align-items-center small mb-2">
            <div class="text-warning mr-2">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <a class="link-underline" href="javascript:;"
            >Read all 287 reviews</a
            >
          </div>
          <!-- End Rating -->

          <!-- Title -->
          <div class="mb-5">
            <h1 class="h2">
              {{ product.name }}
            </h1>
            <p>
              {{ product.brief_description }}
            </p>
          </div>
          <!-- End Title -->

          <!-- Price -->
          <div class="mb-5">
            <h2 class="font-size-1 text-body mb-0">Preço:</h2>
            <span class="text-dark font-size-2 font-weight-bold">{{
                product.price | currency
              }}</span>
          </div>
          <!-- End Price -->

          <!-- Quantity -->
          <div class="border rounded py-2 px-3 mb-3">
            <div class="js-quantity-counter row align-items-center">
              <div class="col-7">
                <small class="d-block text-body font-weight-bold"
                >Selecione a quantidade</small
                >
                <input
                  v-model="quantity"
                  class="js-result form-control h-auto border-0 rounded p-0"
                  type="text"
                />
              </div>
              <div class="col-5 text-right">
                <a
                  class="js-minus btn btn-xs btn-icon btn-outline-secondary rounded-circle"
                  href="javascript:;"
                  @click="quantity > 1 ? quantity-- : ''"
                >
                  <i class="fas fa-minus"></i>
                </a>
                <a
                  class="js-plus btn btn-xs btn-icon btn-outline-secondary rounded-circle"
                  href="javascript:;"
                  @click="quantity++"
                >
                  <i class="fas fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <!-- End Quantity -->

          <!-- Accordion -->
          <div id="shopCartAccordion" class="accordion mb-5">
            <!-- Card -->
            <div class="card border shadow-none">
              <div class="card-body card-collapse" id="shopCardHeadingOne">
                <a
                  class="btn btn-link btn-block card-btn collapsed"
                  href="javascript:;"
                  role="button"
                  data-toggle="collapse"
                  data-target="#shopCardOne"
                  aria-expanded="false"
                  aria-controls="shopCardOne"
                >
                  <span class="row align-items-center">
                    <span class="col-9">
                      <span class="media align-items-center">
                        <span class="w-100 max-w-6rem mr-3">
                          <img
                            class="img-fluid"
                            src="@/assets/svg/icons/icon-65.svg"
                            alt="SVG"
                          />
                        </span>
                        <span class="media-body">
                          <span class="d-block font-size-1 font-weight-bold"
                          >Free shipping</span
                          >
                        </span>
                      </span>
                    </span>
                    <span class="col-3 text-right">
                      <span class="card-btn-toggle">
                        <span class="card-btn-toggle-default">&plus;</span>
                        <span class="card-btn-toggle-active">&minus;</span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div
                id="shopCardOne"
                class="collapse"
                aria-labelledby="shopCardHeadingOne"
                data-parent="#shopCartAccordion"
              >
                <div class="card-body">
                  <p class="small mb-0">
                    We offer free shipping anywhere in the U.S. A skilled
                    delivery team will bring the boxes into your office.
                  </p>
                </div>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div class="card border shadow-none">
              <div class="card-body card-collapse" id="shopCardHeadingTwo">
                <a
                  class="btn btn-link btn-block card-btn collapsed"
                  href="javascript:;"
                  role="button"
                  data-toggle="collapse"
                  data-target="#shopCardTwo"
                  aria-expanded="false"
                  aria-controls="shopCardTwo"
                >
                  <span class="row align-items-center">
                    <span class="col-9">
                      <span class="media align-items-center">
                        <span class="w-100 max-w-6rem mr-3">
                          <img
                            class="img-fluid"
                            src="@/assets/svg/icons/icon-64.svg"
                            alt="SVG"
                          />
                        </span>
                        <span class="media-body">
                          <span class="d-block font-size-1 font-weight-bold"
                          >30 Days return</span
                          >
                        </span>
                      </span>
                    </span>
                    <span class="col-3 text-right">
                      <span class="card-btn-toggle">
                        <span class="card-btn-toggle-default">&plus;</span>
                        <span class="card-btn-toggle-active">&minus;</span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div
                id="shopCardTwo"
                class="collapse"
                aria-labelledby="shopCardHeadingTwo"
                data-parent="#shopCartAccordion"
              >
                <div class="card-body">
                  <p class="small mb-0">
                    If you're not satisfied, return it for a full refund. We'll
                    take care of disassembly and return shipping.
                  </p>
                </div>
              </div>
            </div>
            <!-- End Card -->
          </div>
          <!-- End Accordion -->

          <div class="mb-4">
            <button
              @click="submit"
              type="button"
              class="btn btn-block btn-primary btn-pill transition-3d-hover"
            >
              Add ao Carrinho
            </button>
          </div>
        </div>
        <!-- End Product Description -->
      </div>
    </div>
    <!-- End Hero Section -->

    <!-- Product Description Section -->
    <div class="container space-top-2 space-lg-3">
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0">
          <div class="pr-lg-4">
            <h4>Detalhes</h4>
            <p>
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Product Description Section -->

    <!-- Review Section -->
    <div id="reviewSection" class="container space-bottom-2 space-bottom-lg-3">
      <div class="row">
        <div class="col-lg-4 mb-7 mb-lg-0">
          <div class="border-bottom pb-4 mb-4">
            <!-- Overall Rating Stats -->
            <div class="card bg-primary text-white p-4 mb-3">
              <div class="d-flex justify-content-center align-items-center">
                <span class="display-4">4.7</span>
                <div class="ml-3">
                  <div class="small">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <span><span class="font-weight-bold">287</span> reviews</span>
                </div>
              </div>
            </div>
            <!-- End Overall Rating Stats -->

            <h3>Rating breakdown</h3>

            <!-- Ratings -->
            <ul class="list-unstyled list-sm-article">
              <li>
                <a
                  class="row align-items-center mx-n2 font-size-1"
                  href="javascript:;"
                >
                  <div class="col-3 px-2">
                    <span class="text-dark">5 stars</span>
                  </div>
                  <div class="col-7 px-2">
                    <div class="progress" style="height: 4px;">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 100%;"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-2 text-right px-2">
                    <span>205</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  class="row align-items-center mx-n2 font-size-1"
                  href="javascript:;"
                >
                  <div class="col-3 px-2">
                    <span class="text-dark">4 stars</span>
                  </div>
                  <div class="col-7 px-2">
                    <div class="progress" style="height: 4px;">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 53%;"
                        aria-valuenow="53"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-2 text-right px-2">
                    <span>55</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  class="row align-items-center mx-n2 font-size-1"
                  href="javascript:;"
                >
                  <div class="col-3 px-2">
                    <span class="text-dark">3 stars</span>
                  </div>
                  <div class="col-7 px-2">
                    <div class="progress" style="height: 4px;">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 20%;"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-2 text-right px-2">
                    <span>23</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  class="row align-items-center mx-n2 font-size-1"
                  href="javascript:;"
                >
                  <div class="col-3 px-2">
                    <span class="text-dark">2 stars</span>
                  </div>
                  <div class="col-7 px-2">
                    <div class="progress" style="height: 4px;">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 0%;"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-2 text-right px-2">
                    <span>0</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  class="row align-items-center mx-n2 font-size-1"
                  href="javascript:;"
                >
                  <div class="col-3 px-2">
                    <span class="text-dark">1 stars</span>
                  </div>
                  <div class="col-7 px-2">
                    <div class="progress" style="height: 4px;">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 1%;"
                        aria-valuenow="1"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="col-2 text-right px-2">
                    <span>4</span>
                  </div>
                </a>
              </li>
            </ul>
            <!-- End Ratings -->
          </div>

          <span class="d-block display-4 text-dark">77%</span>
          <p class="small">of customers recommend this product</p>
        </div>

        <div class="col-lg-8">
          <div class="pl-lg-4">
            <!-- Title -->
            <div class="border-bottom pb-4 mb-4">
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="text-body mb-0">Sort on</h4>
              </div>
            </div>
            <!-- End Title -->

            <!-- Review -->
            <div class="border-bottom pb-4 mb-4">
              <!-- Review Rating -->
              <div
                class="d-flex justify-content-between align-items-center text-body font-size-1 mb-3"
              >
                <div class="text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <span>April 3, 2019</span>
              </div>
              <!-- End Review Rating -->

              <h4 class="text-uppercase">I jus love it!</h4>
              <p>
                I bought this hat for my boyfriend, but then i found out he
                cheated on me so I kept it and I love it!! I wear it all the
                time and there is no problem with the fit even though its a
                “mens” hat.
              </p>

              <!-- Reviewer -->
              <div class="text-body font-size-1 mb-2">
                <span class="text-dark font-weight-bold">Hailey</span>
                <span>- Verified Purchase</span>
              </div>
              <!-- End Reviewer -->

              <!-- Helpful -->
              <div class="font-size-1">
                <span>Was this helpful?</span>
                <span class="ml-2">
                  <a class="link-underline" href="javascript:;">Yes</a>
                  <span>(45)</span>
                </span>
                <span class="ml-2">
                  <a class="link-underline" href="javascript:;">No</a>
                  <span>(21)</span>
                </span>
              </div>
              <!-- End Helpful -->
            </div>
            <!-- End Review -->

            <!-- Review -->
            <div class="border-bottom pb-4 mb-4">
              <!-- Review Rating -->
              <div
                class="d-flex justify-content-between align-items-center text-body font-size-1 mb-3"
              >
                <div class="text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <span>January 19, 2019</span>
              </div>
              <!-- End Review Rating -->

              <h4 class="text-uppercase">Really nice</h4>
              <p>Material is great and the hat is comfortable and stylish.</p>

              <!-- Reviewer -->
              <div class="text-body font-size-1 mb-2">
                <span class="text-dark font-weight-bold">David</span>
                <span>- Verified Purchase</span>
              </div>
              <!-- End Reviewer -->

              <!-- Helpful -->
              <div class="font-size-1">
                <span>Was this helpful?</span>
                <span class="ml-2">
                  <a class="link-underline" href="javascript:;">Yes</a>
                  <span>(2)</span>
                </span>
                <span class="ml-2">
                  <a class="link-underline" href="javascript:;">No</a>
                  <span>(0)</span>
                </span>
              </div>
              <!-- End Helpful -->
            </div>
            <!-- End Review -->

            <!-- Review -->
            <div class="border-bottom pb-4 mb-4">
              <!-- Review Rating -->
              <div
                class="d-flex justify-content-between align-items-center text-body font-size-1 mb-3"
              >
                <div class="text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <span>December 21, 2018</span>
              </div>
              <!-- End Review Rating -->

              <p>
                A really well built cap. It looks great and wears just as well.
                A great staple in ball caps.
              </p>

              <!-- Reviewer -->
              <div class="text-body font-size-1 mb-2">
                <span class="text-dark font-weight-bold">Chrizelle</span>
                <span>- Verified Purchase</span>
              </div>
              <!-- End Reviewer -->

              <!-- Helpful -->
              <div class="font-size-1">
                <span>Was this helpful?</span>
                <span class="ml-2">
                  <a class="link-underline" href="javascript:;">Yes</a>
                  <span>(0)</span>
                </span>
                <span class="ml-2">
                  <a class="link-underline" href="javascript:;">No</a>
                  <span>(0)</span>
                </span>
              </div>
              <!-- End Helpful -->
            </div>
            <!-- End Review -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Review Section -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Show",
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    ...mapGetters(["getProductById"])
  },
  data: () => ({
    product: {},
    quantity: 1
  }),
  methods: {
    ...mapActions(["addCart"]),
    submit() {
      this.addCart({ id: this.id, quantity: this.quantity }).then(() => {
        this.$router.push({ name: "cart" });
      });
    },
    requireImg(path) {
      return require("@/assets" + path);
    }
  },
  mounted() {
    this.product = this.getProductById(this.id);
  }
};
</script>
