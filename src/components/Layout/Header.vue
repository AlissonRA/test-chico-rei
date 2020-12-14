<template>
  <header id="header" class="u-header u-header--abs-top-md u-header--bg-transparent u-header--show-hide-md" data-header-fix-moment="500" data-header-fix-effect="slide">
    <div class="u-header__section">
      <div id="logoAndNav" class="container">
        <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
          <!-- Logo -->
          <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="#" aria-label="Erga Software">
            <img src="~/static/logo.png" alt="Logo">
            <!--<span class="u-header__navbar-brand-text"><i class="fas fa-dice-d20"/> Erga</span>-->
          </a>
          <!-- End Logo -->

          <!-- Responsive Toggle Button -->
          <button
            type="button"
            class="navbar-toggler btn u-hamburger"
            aria-label="Toggle navigation"
            aria-expanded="false"
            aria-controls="navBar"
            data-toggle="collapse"
            data-target="#navBar"
          >
            <span id="hamburgerTrigger" class="u-hamburger__box">
              <span class="u-hamburger__inner" />
            </span>
          </button>
          <!-- End Responsive Toggle Button -->

          <!-- Navigation -->
          <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
            <ul class="navbar-nav u-header__navbar-nav">
              <li class="nav-item u-header__nav-item">
                <a class="nav-link u-header__nav-link" :href="getAdminUrl()" target="_blank">
                  Acessar <i class="fas fa-external-link-square-alt" />
                </a>
              </li>

              <!-- Button -->
              <li class="nav-item u-header__nav-last-item">
                <a class="btn btn-sm btn-primary transition-3d-hover" href="#" target="_blank">
                  Assinar
                </a>
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

<script>
export default {
  name: 'Header',
  methods: {
    getAdminUrl: () => process.env.ADMIN_URL
  }
}
</script>
