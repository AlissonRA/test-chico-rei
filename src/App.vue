<template>
  <div>
    <Loading :is-loading="loading" />
    <notifications />
    <header-component />

    <main id="content" role="main">
      <router-view v-if="!loading" />
    </main>

    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Layout/Header";
import FooterComponent from "@/components/Layout/Footer";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },
  created() {
    this.init();
  },
  methods: {
    ...mapActions(["init"])
  }
};
</script>
