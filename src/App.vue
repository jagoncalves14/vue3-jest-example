<template>
  <header>
    <nav>
      <router-link to="/">Popular Movies</router-link>
      <div class="separator">|</div>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>

  <div id="app__body">
    <router-view />
  </div>
</template>

<style lang="scss">
  $header-height: 83px;

  body {
    margin: 0px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  header {
    position: fixed;
    width: 100%;
    top: 0;
    height: 83px;
    left: 0;

    nav {
      padding: 30px;
      background-color: white;
      border-bottom: 1px solid black;
      text-align: left;
    }

    nav a {
      display: inline-block;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;

      &.router-link-exact-active {
        color: rgba(blue, 0.5);
      }
    }

    nav .separator {
      display: inline-block;
      margin: 0 30px;
    }
  }

  #app__body {
    padding-top: $header-height;
  }
</style>
