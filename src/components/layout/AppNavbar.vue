<template>
  <header class="app-navbar">
    <a href="">Cerrar sesión</a>
  </header>
</template>

<style lang="scss">
@import '../../assets/scss/_variables.scss';
.app-navbar {
  background-color: white;
  text-align: right;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

  a {
    display: inline-block;
    line-height: $navHeight;
    padding: 0 20px;
    text-decoration: none;

    &:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
