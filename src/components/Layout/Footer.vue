<template>
  <footer id="stickyBlockEndPoint" class="border-top">
    <div class="container space-2">
      <div class="row">
        <div class="col-sm-3 col-lg-2 order-sm-2 mb-4 mb-sm-0 ml-lg-auto">
          <h4 class="h6 font-weight-semi-bold">
            Sobre
          </h4>

          <!-- List Group -->
          <ul class="list-group list-group-flush list-group-borderless mb-0">
            <li>
              <n-link class="list-group-item list-group-item-action" to="about">
                Quem somos
              </n-link>
            </li>
            <li>
              <n-link class="list-group-item list-group-item-action" to="contact">
                Contato
              </n-link>
            </li>
          </ul>
          <!-- End List Group -->
        </div>

        <div class="col-sm-3 col-lg-2 order-sm-3 mb-4 mb-sm-0">
          <h4 class="h6 font-weight-semi-bold">
            Ajuda
          </h4>

          <!-- List Group -->
          <ul class="list-group list-group-flush list-group-borderless mb-0">
            <li>
              <n-link class="list-group-item list-group-item-action" to="help">
                Suporte
              </n-link>
            </li>
            <li>
              <n-link class="list-group-item list-group-item-action" to="terms-of-service">
                Termos de Uso
              </n-link>
            </li>
            <li>
              <n-link class="list-group-item list-group-item-action" to="privacy-police">
                Política de Privacidade
              </n-link>
            </li>
          </ul>
          <!-- End List Group -->
        </div>

        <div class="col-sm-6 col-lg-4 order-sm-1">
          <!-- Logo -->
          <a class="d-inline-flex align-items-center mb-2" href="#" aria-label="Erga">
            <img src="~/static/logo.png" alt="Logo" width="240px">
          </a>
          <!-- End Logo -->

          <div class="mb-4">
            <p class="small text-muted">
              &copy; Erga. Todos os direitos reservados.
            </p>
          </div>

          <!-- Social Networks -->
          <ul class="list-inline mb-4">
            <li class="list-inline-item mx-0">
              <a class="btn btn-sm btn-icon btn-soft-secondary rounded-circle" href="#">
                <span class="fab fa-facebook-f btn-icon__inner" />
              </a>
            </li>
            <li class="list-inline-item mx-0">
              <a class="btn btn-sm btn-icon btn-soft-secondary rounded-circle" href="#">
                <span class="fab fa-google btn-icon__inner" />
              </a>
            </li>
            <li class="list-inline-item mx-0">
              <a class="btn btn-sm btn-icon btn-soft-secondary rounded-circle" href="#">
                <span class="fab fa-twitter btn-icon__inner" />
              </a>
            </li>
            <li class="list-inline-item mx-0">
              <a class="btn btn-sm btn-icon btn-soft-secondary rounded-circle" href="#">
                <span class="fab fa-github btn-icon__inner" />
              </a>
            </li>
          </ul>

          <a href="//z1lab.com.br" target="_blank" class="mb-0">
            <img
              src="https://d35c048n9fix3e.cloudfront.net/images/z1lab/logo/powered-by.png"
              width="170px"
              alt="Z1lab Soluções Digitais"
            >
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
