<template>
  <div id="app" class="app">
    <app-navbar></app-navbar>
    <main>
      <router-view/>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from './components/layout/AppNavbar'
import AppFooter from './components/layout/AppFooter'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style lang="scss">
@import './assets/scss/index.scss';

.app {
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;

  main {
    padding: 30px;
  }
}
</style>
