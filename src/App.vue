/* eslint-disable */
<template>
  <div id="app">
    <nav
      class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left">Weather Database</a>
        <ul class="nav navbar-nav flex-row float-left">
          <li class="home">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="about">Weather</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="AddData"
              >Add Data</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="ListData"
              >All Data</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
