<template>
  <div id="app" class="app">
    <app-sidenav></app-sidenav>
    <div class="app-main">
      <app-navbar></app-navbar>
      <main>
        <router-view/>
      </main>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/layout/AppNavbar'
import AppSidenav from './components/layout/AppSidenav'
import AppFooter from './components/layout/AppFooter'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppSidenav,
    AppFooter
  }
}
</script>

<style lang="scss">
@import './assets/scss/index.scss';

.app {
  display: grid;
  height: 100vh;
  grid-template-columns: 260px 1fr;

  .app-main {
    display: grid;
    grid-template-rows: $navHeight 1fr 30px;

    main {
      padding: 30px;
    }
  }
}
</style>
