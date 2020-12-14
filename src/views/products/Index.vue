<template>
  <div>
    <!-- Title Section -->
    <div class="bg-light">
      <div class="container py-5">
        <div class="row align-items-sm-center">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <h1 class="h4 mb-0">Lista de Produtos</h1>
          </div>

          <div class="col-sm-6">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Produtos</li>
              </ol>
            </nav>
            <!-- End Breadcrumb -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Title Section -->

    <!-- Products & Filters Section -->
    <div class="container space-top-1 space-top-md-2 space-bottom-2 space-bottom-lg-3">
      <div class="row">
        <div class="col-lg-9">
          <!-- Sorting -->
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 mb-3 mb-lg-0">
              <span class="font-size-1 ml-1">{{products.length}} Produtos</span>
            </div>

            <div class="col-lg-6 align-self-lg-end text-lg-right">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <!-- Select -->
                  <div class="d-flex align-items-center">
                    <select v-model="pagination.perPage" class="custom-select custom-select-sm w-auto mx-2">
                      <option v-for="item in pagination.perPageOptions" :key="item" :value="item">{{ item }}</option>
                    </select>
                  </div>
                  <!-- End Select -->
                </li>
                <li class="list-inline-item">
                  <!-- Search -->
                  <div class="input-group input-group-merge">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-search"></i>
                      </span>
                    </div>
                    <input v-model="searchQuery" type="text" class="form-control form-control-sm" placeholder="Buscar" aria-label="Buscar">
                  </div>
                  <!-- End Search -->
                </li>
              </ul>
            </div>
          </div>
          <!-- End Sorting -->

          <!-- Products -->
          <div class="row mx-n2 mb-5">
            <div class="col-sm-6 col-lg-4 px-2 px-sm-3 mb-3 mb-sm-5" v-for="product in queriedData" :key="product.id">
              <!-- Product -->
              <div class="card border shadow-none text-center h-100">
                <div class="position-relative">
                  <img class="card-img-top" :src="requireImg(product.img)" alt="Image Description">

                  <div class="position-absolute top-0 left-0 pt-3 pl-3">
                    <span v-if="product.new" class="badge badge-success badge-pill">Novo</span>
                  </div>
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
                  <button type="button" class="btn btn-sm btn-outline-primary btn-pill transition-3d-hover" @click="buy(product.id)">Comprar</button>
                </div>
              </div>
              <!-- End Product -->
            </div>
          </div>
          <!-- End Products -->

          <!-- Pagination -->
          <base-pagination
            class="pagination-no-border"
            v-model="pagination.currentPage"
            :per-page="pagination.perPage"
            :total="total"
          >
          </base-pagination>
          <!-- End Pagination -->

          <!-- Divider -->
          <div class="d-lg-none">
            <hr class="my-7 my-sm-11">
          </div>
          <!-- End Divider -->
        </div>

        <!-- Filters -->
        <div class="col-lg-3">
          <form>
            <div class="border-bottom pb-4 mb-4">
              <h4>Gênero</h4>

              <!-- Checkboxes -->
              <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                <div class="custom-control custom-checkbox">
                  <input v-model="selectedFilter" value="male" type="checkbox" class="custom-control-input" id="genderMen">
                  <label class="custom-control-label text-lh-lg" for="genderMen">Masculino</label>
                </div>
              </div>
              <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                <div class="custom-control custom-checkbox">
                  <input v-model="selectedFilter" value="feminine" type="checkbox" class="custom-control-input" id="genderWomen">
                  <label class="custom-control-label text-lh-lg" for="genderWomen">Feminino</label>
                </div>
              </div>
              <!-- End Checkboxes -->
            </div>

            <div class="border-bottom pb-4 mb-4">
              <h4>Tamanho</h4>

              <!-- Checkboxes -->
              <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                <div class="custom-control custom-checkbox">
                  <input v-model="selectedFilter" value="s" type="checkbox" class="custom-control-input" id="sizeS">
                  <label class="custom-control-label" for="sizeS">S</label>
                </div>
              </div>
              <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                <div class="custom-control custom-checkbox">
                  <input v-model="selectedFilter" value="m" type="checkbox" class="custom-control-input" id="sizeM">
                  <label class="custom-control-label" for="sizeM">M</label>
                </div>
              </div>
              <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                <div class="custom-control custom-checkbox">
                  <input v-model="selectedFilter" value="l" type="checkbox" class="custom-control-input" id="sizeL">
                  <label class="custom-control-label" for="sizeL">L</label>
                </div>
              </div>
              <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                <div class="custom-control custom-checkbox">
                  <input v-model="selectedFilter" value="xl" type="checkbox" class="custom-control-input" id="sizeXL">
                  <label class="custom-control-label" for="sizeXL">XL</label>
                </div>
              </div>
              <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                <div class="custom-control custom-checkbox">
                  <input v-model="selectedFilter" value="xxl" type="checkbox" class="custom-control-input" id="sizeXXL">
                  <label class="custom-control-label" for="sizeXXL">XXL</label>
                </div>
              </div>
              <!-- End Checkboxes -->
            </div>

            <div class="border-bottom pb-4 mb-4">
              <h4>Categoria</h4>

              <!-- Checkboxes -->
              <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                <div class="custom-control custom-checkbox">
                  <input v-model="selectedFilter" value="t-shirts" type="checkbox" class="custom-control-input" id="categoryTshirt">
                  <label class="custom-control-label text-lh-lg" for="categoryTshirt">T-shirt</label>
                </div>
              </div>
              <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                <div class="custom-control custom-checkbox">
                  <input v-model="selectedFilter" value="shoes" type="checkbox" class="custom-control-input" id="categoryShoes">
                  <label class="custom-control-label text-lh-lg" for="categoryShoes">Shoes</label>
                </div>
              </div>
              <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                <div class="custom-control custom-checkbox">
                  <input v-model="selectedFilter" value="accessories" type="checkbox" class="custom-control-input" id="categoryAccessories">
                  <label class="custom-control-label text-lh-lg" for="categoryAccessories">Accessories</label>
                </div>
              </div>
              <!-- End Checkboxes -->

              <!-- View More - Collapse -->
              <div class="collapse" id="collapseCategory">
                <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                  <div class="custom-control custom-checkbox">
                    <input v-model="selectedFilter" value="shorts" type="checkbox" class="custom-control-input" id="categoryShorts">
                    <label class="custom-control-label" for="categoryShorts">Shorts</label>
                  </div>
                </div>
                <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                  <div class="custom-control custom-checkbox">
                    <input v-model="selectedFilter" value="hats" type="checkbox" class="custom-control-input" id="categoryHats">
                    <label class="custom-control-label" for="categoryHats">Hats</label>
                  </div>
                </div>
                <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-lg text-body mb-1">
                  <div class="custom-control custom-checkbox">
                    <input v-model="selectedFilter" value="socks" type="checkbox" class="custom-control-input" id="categorySocks">
                    <label class="custom-control-label" for="categorySocks">Socks</label>
                  </div>
                </div>
              </div>
              <!-- End View More - Collapse -->

              <!-- Link -->
              <a class="link link-collapse small font-size-1" data-toggle="collapse" href="#collapseCategory" role="button" aria-expanded="false" aria-controls="collapseCategory">
                <span class="link-collapse-default">Ver Mais</span>
                <span class="link-collapse-active">Ocultar</span>
                <span class="link-icon ml-1">+</span>
              </a>
              <!-- End Link -->
            </div>

            <button @click="clearAll" type="button" class="btn btn-sm btn-block btn-soft-secondary transition-3d-hover">Limpar Tudo</button>
          </form>
        </div>
        <!-- End Filters -->
      </div>
    </div>
    <!-- End Products & Filters Section -->
  </div>
</template>

<script>
import clientPaginationMixin from "@/mixins/clientPaginationMixin";

import BasePagination from "@/components/Pagination/BasePagination";

import { mapActions, mapState } from "vuex";
import { cloneDeep } from "lodash";

export default {
  name: "IndexProducts",
  components: {
    BasePagination
  },
  mixins: [clientPaginationMixin],
  props: {
    category: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapState({
      products: state => state.products
    })
  },
  watch: {
    products(value) {
      if (this.category) {
        this.selectedFilter.push(this.category);
      }

      this.tableData = cloneDeep(value);
      this.fuseSearch.setCollection(this.tableData);
    }
  },
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    if (this.category) {
      this.selectedFilter.push(this.category);
    }

    this.tableData = cloneDeep(this.products);

    // initialization of select2
    // eslint-disable-next-line no-undef
    $('.js-custom-select').each(function () {
      // eslint-disable-next-line no-undef,no-unused-vars
      let select2 = $.HSCore.components.HSSelect2.init($(this));
    });
  },
  methods: {
    ...mapActions(["addCart"]),
    buy(id) {
      this.addCart({ id, quantity: 1 }).then(() => {
        this.$router.push({ name: "cart" });
      });
    },
    clearAll() {
      this.searchQuery = "";
      this.selectedFilter = [];
    },
    requireImg(path) {
      return require("@/assets" + path);
    }
  }
};
</script>
