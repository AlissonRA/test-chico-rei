<template>
  <div class="position-relative">
    <!-- Main Slider -->
    <div id="heroSlider" class="bg-light">
      <!-- Slide -->
      <div class="js-slide" v-for="slide in data" :key="`${slide.id}-slide`">
        <div
          v-show="slideSelected === slide.id"
          class="container space-top-2 space-bottom-3"
        >
          <div class="row align-items-lg-center">
            <div class="col-lg-5 order-lg-2 mb-7 mb-lg-0">
              <div class="mb-6">
                <h1 class="display-4 mb-4">{{ slide.name }}</h1>
                <p>
                  {{ slide.description }}
                </p>
              </div>
              <button @click="buy(slide.id)" class="btn btn-primary btn-pill transition-3d-hover px-5 mr-2">
                {{ slide.price | currency }} - Adicionar ao Carrinho
              </button>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="w-85 mx-auto">
                <img
                  class="img-fluid"
                  :src="requireImg(slide.img)"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Slide -->
    </div>
    <!-- End Main Slider -->

    <!-- Slider Nav -->
    <div class="position-absolute bottom-0 w-100">
      <div class="container space-bottom-1">
        <div id="heroSliderNav" class="slick-slider max-w-27rem mx-auto">
          <div class="slick-list">
            <div
              class="slick-track"
              style="opacity: 1;width: 210px;transform: translate3d(0px, 0px, 0px);"
            >
              <div
                class="js-slide slick-slide p-1"
                v-for="sliderNav in data"
                :key="`${sliderNav.id}-slideNav`"
              >
                <a
                  class="d-block avatar avatar-circle border p-1"
                  :class="{ active: slideSelected === sliderNav.id }"
                  href="javascript:;"
                  @click="changeSlider(sliderNav.id)"
                >
                  <img
                    class="avatar-img"
                    :src="requireImg(sliderNav.icon)"
                    alt="Image Description"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Slider Nav -->
  </div>
</template>

<style scoped>
.avatar.avatar-circle.active {
  border-color: #377dff !important;
}
.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.slick-slide {
  float: left;
  height: 100%;
  min-height: 1px;
}
</style>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HeroSection",
  computed: {
    ...mapState({
      data: state => state.heroSection
    })
  },
  data: () => ({
    slideSelected: false
  }),
  mounted() {
    this.slideSelected = this.data[0].id;
  },
  methods: {
    ...mapActions(["addCart"]),
    buy(id) {
      this.addCart(id);
    },
    changeSlider(id) {
      this.slideSelected = id;
    },
    requireImg(path) {
      return require("@/assets" + path);
    }
  }
};
</script>
