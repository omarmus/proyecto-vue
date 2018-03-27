<template>
  <div class="app-sidenav">
    <header>
      <h1>{{ nombre }}</h1>
    </header>
    <nav>
      <ul class="menu">
        <li
          v-for="item in menu"
          :key="item.path">
          <router-link
            :class="path === item.path ? 'active' : ''"
            :to="item.path">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nombre: 'Proyecto Vue',
      path: '/',
      menu: [
        {
          path: '/',
          label: 'Inicio'
        },
        {
          path: '/empresas',
          label: 'Empresas'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/_variables.scss';

$menu: #2c2e3e;
$link: #868aa8;

.app-sidenav {
  background-color: $menu;
  color: white;

  header {
    background-color: darken($menu, 4%);
    h1 {
      font-size: 1.6rem;
      margin: 0;
      padding: 0 10px;
      line-height: $navHeight;
      font-weight: 300;
      color: $link;
    }
  }

  nav {
    .menu {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        a {
          display: block;
          line-height: 50px;
          text-decoration: none;
          padding: 0 15px;
          color: $link;

          &:hover {
            background-color: darken($menu, 2%);
          }
        }
      }
    }
  }
}
</style>
