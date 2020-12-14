<template>
  <footer class="border-top">
    <div class="container">
      <div class="row justify-content-lg-between space-top-2 space-bottom-lg-2">
        <div class="col-lg-3 mb-5">
          <div class="d-flex align-items-start flex-column h-100">
            <a
              class="w-100 mb-3 mb-lg-auto header-logo-cr"
              href="/"
              aria-label="Front"
            >
              <img
                class="brand"
                src="@/assets/svg/logos/logo-cr.svg"
                alt="Logo"
              />
            </a>
            <p class="small text-muted mb-0">
              &copy; Chico Rei Test. Todos os direitos reservados.
            </p>
          </div>
        </div>

        <div class="col-6 col-md-4 col-lg-3 ml-lg-auto mb-5 mb-lg-0">
          <h5>Ajuda</h5>

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 flex-column">
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" @click="testNotification">Dúvidas frequentes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" @click="testNotification">Trocas e devoluções</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" @click="testNotification">Atendimento</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" @click="testNotification">Mapa do site</a>
            </li>
          </ul>
          <!-- End Nav Link -->
        </div>

        <div class="col-6 col-md-4 col-lg-3 mb-5 mb-lg-0">
          <h5>Chico Rei</h5>

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 flex-column">
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" @click="testNotification">Sobre Nós</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" @click="testNotification">Trabalhe Conosco</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" @click="testNotification">Contato</a>
            </li>
          </ul>
          <!-- End Nav Link -->
        </div>

        <div class="col-md-4 col-lg-2 mb-5 mb-lg-0">
          <h5>Outros</h5>

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 flex-column">
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" @click="testNotification">
                <span class="media align-items-center">
                  <i class="fas fa-info-circle mr-2"></i>
                  <span class="media-body">Ajuda</span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" @click="testNotification">
                <span class="media align-items-center">
                  <i class="fas fa-user-circle mr-2"></i>
                  <span class="media-body">Minha Conta</span>
                </span>
              </a>
            </li>
          </ul>
          <!-- End Nav Link -->
        </div>
      </div>

      <hr class="my-0" />

      <div class="row align-items-md-center space-1">
        <div class="col-md-4 mb-4 mb-md-0">
          <!-- Social Networks -->
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a class="btn btn-xs btn-icon btn-soft-secondary" href="javascript:;" @click="testNotification">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-xs btn-icon btn-soft-secondary" href="javascript:;" @click="testNotification">
                <i class="fab fa-google"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-xs btn-icon btn-soft-secondary" href="javascript:;" @click="testNotification">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-xs btn-icon btn-soft-secondary" href="javascript:;" @click="testNotification">
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
          <!-- End Social Networks -->
        </div>

        <div class="col-md-8 text-md-right">
          <!-- Links -->
          <ul class="nav nav-sm justify-content-md-end">
            <li class="nav-item">
              <a class="nav-link pl-0" href="javascript:;" @click="testNotification">Política de Privacidade</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" @click="testNotification">Termos e Condições</a>
            </li>
          </ul>
          <!-- End Links -->
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.header-logo-cr img {
}
</style>

<script>
export default {
  name: "Footer",
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
