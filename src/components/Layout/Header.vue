<template>
  <header id="header" class="header">
    <div class="header-section">
      <div id="logoAndNav" class="container">
        <!-- Nav -->
        <nav class="js-mega-menu navbar navbar-expand-lg">
          <!-- Logo -->
          <div class="d-flex">
            <a
              href="/"
              class="navbar-logo header-logo-diamond d-none d-sm-block"
            >
              <img src="@/assets/svg/logos/logo-diamond.svg" alt="Logo" />
            </a>
            <a href="/" class="navbar-logo header-logo-cr">
              <img src="@/assets/svg/logos/logo-cr.svg" alt="Logo" />
            </a>
          </div>
          <!-- End Logo -->

          <!-- Responsive Toggle Button -->
          <button
            type="button"
            class="navbar-toggler btn btn-icon btn-sm rounded-circle"
            aria-label="Toggle navigation"
            aria-expanded="false"
            aria-controls="navBar"
            data-toggle="collapse"
            data-target="#navBar"
          >
            <span class="navbar-toggler-default">
              <i class="fas fa-equals"></i>
            </span>
            <span class="navbar-toggler-toggled">
              <i class="fas fa-times"></i>
            </span>
          </button>
          <!-- End Responsive Toggle Button -->

          <!-- Navigation -->
          <div id="navBar" class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <!-- Home -->
              <li class="hs-has-mega-menu navbar-nav-item">
                <router-link
                  class="hs-mega-menu-invoker nav-link"
                  :to="{ name: 'products' }"
                >
                  Produtos
                </router-link>
              </li>
              <!-- End Home -->

              <!-- Button -->
              <li class="navbar-nav-last-item">
                <router-link
                  class="btn btn-sm btn-primary btn-pill transition-3d-hover btn-icon"
                  :to="{ name: 'cart' }"
                  target="_blank"
                >
                  <i class="fas fa-shopping-cart"></i>
                </router-link>
              </li>
              <!-- End Button -->
            </ul>
          </div>
          <!-- End Navigation -->
        </nav>
        <!-- End Nav -->
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar-logo {
  display: inline-block;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  margin-right: 0;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.navbar-logo img {
  width: 3rem;
}

.header-logo-cr img {
  position: absolute;
  margin-top: -73px;
  width: 9rem;
}

@media (min-width: 576px) {
  .header-logo-cr img {
    margin-top: -45px;
  }
}
</style>

<script>
export default {
  name: "Header",
  methods: {
    testNotification() {
      this.$notify({
        message: "Ops, não tenho funcionalidade por enquanto!",
        icon: "ni ni-fat-remove",
        type: "info"
      });
    }
  }
};
</script>
